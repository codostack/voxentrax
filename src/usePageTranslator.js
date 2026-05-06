// usePageTranslator.js
import { useEffect, useRef, useState } from "react";
import { batchTranslateText } from "./libreTranslate";

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"]);

// ─────────────────────────────────────────────────────────────────────────────
// Collect text nodes
// ─────────────────────────────────────────────────────────────────────────────
function collectTextNodes() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  return nodes;
}

// ─────────────────────────────────────────────────────────────────────────────
// Group sibling text nodes that share the same parent element.
//
// WHY: React splits JSX like:
//   "Cloud VoIP Built for " <span>Modern Teams</span>
// into multiple text nodes inside the same <h1>. When translated separately
// they produce awkward or broken sentences in languages like Japanese.
//
// HOW: We merge adjacent text nodes whose parent is the same element into
// one logical string for translation, then write the result back split
// proportionally across the original nodes.
// ─────────────────────────────────────────────────────────────────────────────
function groupSiblingNodes(nodes) {
  // group[i] = { parent, nodeIndices: [i, j, ...], mergedText }
  const parentMap = new Map(); // parent element → first group index

  nodes.forEach((node, idx) => {
    const parent = node.parentElement;
    if (!parent) return;
    parentMap.set(parent, idx);
  });

  // Build groups: consecutive nodes with the same parent
  const groups = [];
  let i = 0;
  while (i < nodes.length) {
    const parent = nodes[i].parentElement;
    const group  = { parent, nodeIndices: [i] };
    let j = i + 1;
    while (j < nodes.length && nodes[j].parentElement === parent) {
      group.nodeIndices.push(j);
      j++;
    }
    groups.push(group);
    i = j;
  }

  return groups;
}

// ─────────────────────────────────────────────────────────────────────────────
// Build the flat texts array that goes to the API.
// For a group with multiple siblings, we send ONE merged string.
// Single-node groups send their text as-is.
// ─────────────────────────────────────────────────────────────────────────────
function buildTextsForAPI(nodes, groups) {
  return groups.map(({ nodeIndices }) => {
    const merged = nodeIndices.map((i) => nodes[i].nodeValue).join(" ").trim();
    return merged;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Write translated text back to DOM nodes.
// For multi-node groups, put the full translation in the first node
// and clear the rest (they were redundant fragments).
// ─────────────────────────────────────────────────────────────────────────────
function applyTranslations(nodes, originals, groups, translated) {
  groups.forEach(({ nodeIndices }, gIdx) => {
    const text = translated[gIdx] || nodeIndices.map((i) => originals[i]).join(" ");

    if (nodeIndices.length === 1) {
      nodes[nodeIndices[0]].nodeValue = text;
    } else {
      // Put the full translated sentence in the first node,
      // empty the rest so they don't double-up.
      nodes[nodeIndices[0]].nodeValue = text;
      for (let k = 1; k < nodeIndices.length; k++) {
        nodes[nodeIndices[k]].nodeValue = "";
      }
    }
  });
}

function restoreOriginals(nodes, originals) {
  nodes.forEach((node, i) => {
    node.nodeValue = originals[i];
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

/**
 * usePageTranslator(language)
 *
 * - Re-snapshots on every React Router navigation (pathname change)
 * - Merges sibling text nodes before sending to API → fixes broken headings
 * - Aborts stale requests when language or page changes rapidly
 * - Restores English instantly without a network call
 *
 * @param {string|null} language
 * @returns {boolean} loading
 */
export default function usePageTranslator(language) {
  const nodesRef     = useRef([]);
  const originalsRef = useRef([]);
  const groupsRef    = useRef([]);
  const abortRef     = useRef(null);
  const pathname     = useRef(window.location.pathname);

  const [loading, setLoading]   = useState(false);
  // trigger re-snapshot when pathname changes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // ── Listen to React Router navigation ────────────────────────────────────
  useEffect(() => {
    // popstate covers browser back/forward
    const onPop = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onPop);

    // Patch pushState / replaceState (React Router uses these)
    const _push    = window.history.pushState.bind(window.history);
    const _replace = window.history.replaceState.bind(window.history);

    window.history.pushState = (...args) => {
      _push(...args);
      setCurrentPath(window.location.pathname);
    };
    window.history.replaceState = (...args) => {
      _replace(...args);
      setCurrentPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener("popstate", onPop);
      window.history.pushState    = _push;
      window.history.replaceState = _replace;
    };
  }, []);

  // ── Re-snapshot nodes after navigation / DOM settles ─────────────────────
  useEffect(() => {
    // Abort any in-flight translation from the previous page
    if (abortRef.current) abortRef.current.abort();

    // Wait for React to finish rendering the new page
    const raf = requestAnimationFrame(() => {
      const nodes    = collectTextNodes();
      const groups   = groupSiblingNodes(nodes);
      nodesRef.current     = nodes;
      originalsRef.current = nodes.map((n) => n.nodeValue);
      groupsRef.current    = groups;
      pathname.current     = currentPath;

      // Immediately translate the new page if a non-English language is active
      if (language && language !== "en") {
        runTranslation(language, nodes, originalsRef.current, groups, currentPath);
      }
    });

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  // ── Translate when language changes (same page) ───────────────────────────
  useEffect(() => {
    if (!language) return;

    if (language === "en") {
      restoreOriginals(nodesRef.current, originalsRef.current);
      return;
    }

    runTranslation(
      language,
      nodesRef.current,
      originalsRef.current,
      groupsRef.current,
      currentPath
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // ── Core async translation runner ─────────────────────────────────────────
  function runTranslation(lang, nodes, originals, groups, pathForPage) {
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    let cancelled    = false;
    controller.signal.addEventListener("abort", () => { cancelled = true; });

    const page = pathForPage.split("/").filter(Boolean)[0] || "home";
    const apiTexts = buildTextsForAPI(nodes, groups);

    setLoading(true);

    batchTranslateText(apiTexts, page, lang)
      .then((translated) => {
        if (cancelled) return;
        if (translated.length !== apiTexts.length) {
          console.warn("⚠️ Length mismatch — reverting");
          restoreOriginals(nodes, originals);
          return;
        }
        applyTranslations(nodes, originals, groups, translated);
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("usePageTranslator:", err);
          restoreOriginals(nodes, originals);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
  }

  return loading;
}