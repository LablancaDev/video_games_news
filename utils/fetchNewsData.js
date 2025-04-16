// 📁 /utils/fetchNews.js
// Paso 1: Obtener noticias básicas desde NewsData.io
import axios from 'axios';
// ✔️ API que estoy consumiendo en esta versión de github -> changeAPI
const NEWS_API_KEY = process.env.NEWSDATA_API_KEY;

export async function fetchNews() {
  try {
    const { data } = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: NEWS_API_KEY,
        q: 'videojuegos OR gaming OR e-sports',
        language: 'es',
        category: 'technology',
        country: 'es,us,mx',
      },
    });
    // Adaptar estructura para el frontend
    return (data.results || []).map((item) => ({
      id: item.article_id, // 👈 ESTE es el ID único
      title: item.title,
      publish_date: item.pubDate,
      deck: item.description,
      image: {
        original: item.image_url,
      },
      categories: item.category ? item.category.map((cat) => ({ name: cat })) : [],
      site_detail_url: item.link,
      content: item.content, // 👈 agregar si deseas usarlo en detalle
    }));
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    return [];
  }
}
// La API devuelve máximo 10 artículos por petición

