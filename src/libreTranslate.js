// libreTranslate.js
// Thin client for the Flask translation server.

const API_URL = "http://127.0.0.1:5008/translate";
const PROJECT = "voxentrax";

/**
 * Translate an array of strings to the target language.
 * Returns the original texts on any error so the UI never breaks.
 *
 * @param {string[]} texts      - Source strings (may contain empty strings)
 * @param {string}   page       - Logical page name used for cache keying
 * @param {string}   targetLang - BCP-47 language code, e.g. "fr", "de", "ml"
 * @returns {Promise<string[]>}
 */
export async function batchTranslateText(texts, page, targetLang) {
  if (!targetLang || targetLang === "en") return texts;
  if (!texts || texts.length === 0) return texts;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: PROJECT,
        page,
        lang: targetLang,
        texts,
      }),
    });

    if (!res.ok) {
      console.error(`Translation server error: ${res.status}`);
      return texts;
    }

    const data = await res.json();

    if (!Array.isArray(data.translatedTexts)) return texts;
    if (data.translatedTexts.length !== texts.length) {
      console.warn("⚠️ Length mismatch — using originals");
      return texts;
    }

    return data.translatedTexts;
  } catch (err) {
    console.error("batchTranslateText failed:", err);
    return texts;
  }
}