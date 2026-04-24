export async function batchTranslateText(texts, page, targetLang) {
  const API_URL = "http://localhost:5008/translate";

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