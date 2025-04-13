import axios from "axios";

const NEWS_API_KEY = process.env.NEWSDATA_API_KEY; // ⚠️ Guarda tu API key en .env

export async function fetchNews() {
  try {
    const response = await axios.get("https://newsdata.io/api/1/news", {
      params: {
        apikey: NEWS_API_KEY,
        language: "es",
        category: "entertainment",
        q: "videojuegos", // Puedes cambiar a: gaming, consolas, etc.
        country: "es",    // O "mx", "ar", etc. si quieres filtrar
      }
    });

    const news = response.data.results.map((item) => ({
      title: item.title,
      description: item.description,
      image: item.image_url || "/no-image.jpg", // Por si no tiene imagen
      link: item.link,
      source: item.source_id,
      date: item.pubDate
    }));

    return news;
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    return [];
  }
}
