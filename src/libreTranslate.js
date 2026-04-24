export async function batchTranslateText(texts, page, targetLang) {
  const API_URL = "https://translator.cloudqlobe.com/translate";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        texts,
        lang: targetLang,
        page,
        project: "voxentrax"
      })
    });

    const data = await res.json();
    return data.translatedTexts ?? texts;
  } catch (err) {
    console.error(err);
    return texts;
  }
}