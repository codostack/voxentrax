import { useEffect, useRef, useState } from "react";
import { batchTranslateText } from "./libreTranslate";

export default function usePageTranslator(language) {
  const nodesRef = useRef([]);
  const originalsRef = useRef([]);
  const initializedRef = useRef(false);

  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false); // ✅ NEW

  // ------------------------------------------------
  // COLLECT TEXT NODES ONLY ONCE
  // ------------------------------------------------
  const collectNodes = () => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue.trim())
            return NodeFilter.FILTER_REJECT;

          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;

          const skipTags = [
            "SCRIPT",
            "STYLE",
            "NOSCRIPT",
            "SVG",
            "PATH"
          ];

          if (skipTags.includes(parent.tagName))
            return NodeFilter.FILTER_REJECT;

          if (parent.closest("[data-no-translate]"))
            return NodeFilter.FILTER_REJECT;

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];
    let node;

    while ((node = walker.nextNode())) {
      nodes.push(node);
    }

    return nodes;
  };

  // ------------------------------------------------
  // INITIALIZE (RUN ONLY ONCE)
  // ------------------------------------------------
  useEffect(() => {
    if (initializedRef.current) return;

    requestAnimationFrame(() => {
      const nodes = collectNodes();

      nodesRef.current = nodes;
      originalsRef.current = nodes.map(n => n.nodeValue);

      initializedRef.current = true;
      setReady(true); // ✅ SIGNAL READY
    });
  }, []);

  // ------------------------------------------------
  // TRANSLATE WHEN LANGUAGE OR READY CHANGES
  // ------------------------------------------------
  useEffect(() => {
    if (!ready) return;      // ✅ WAIT FOR DOM
    if (!language) return;

    const translate = async () => {
      setLoading(true);

      const nodes = nodesRef.current;
      const originals = originalsRef.current;

      // Restore English instantly
      if (language === "en") {
        nodes.forEach((node, i) => {
          node.nodeValue = originals[i];
        });
        setLoading(false);
        return;
      }

      const pathParts = window.location.pathname
        .split("/")
        .filter(Boolean);

      const page = pathParts[0] || "home";

      try {
        const translated = await batchTranslateText(
          originals,
          page,
          language
        );

        translated.forEach((text, i) => {
          if (!nodes[i]) return;

          const clean = (text || "")
            .replace(/\(.*?\)/g, "")
            .trim();

          nodes[i].nodeValue = clean || originals[i];
        });
      } catch (err) {
        console.error("Translation error:", err);
      } finally {
        setLoading(false);
      }
    };

    translate();
  }, [language, ready]); // ✅ IMPORTANT

  return loading;
}