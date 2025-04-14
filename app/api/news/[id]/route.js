
// 📁 /app/api/news/[id]/route.js
// Paso 2: Scraping + traducción + cacheado por ID
import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { fetchNews } from '../../../../utils/fetchNews';

const cache = new Map(); // En producción, usar Redis o base de datos
const TRANSLATE_API_KEY = process.env.TRANSLATE_API_KEY; // Google o DeepL

async function scrapeAndTranslate(url) {
  const { data: html } = await axios.get(url);
  const $ = cheerio.load(html);

  const content = $('article').text() || $('body').text();

  // Traducción automática
  const translated = await axios.post('https://translation.googleapis.com/language/translate/v2', {
    q: content,
    target: 'es',
    format: 'text',
    key: TRANSLATE_API_KEY,
  });

  return translated.data.data.translations[0].translatedText;
}

export async function GET(req, { params }) {
  const id = params.id;
  if (!id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 });

  if (cache.has(id)) return NextResponse.json(cache.get(id));

  try {
    const allNews = await fetchNews();
    const newsItem = allNews.find((n) => n.id === id);
    if (!newsItem) return NextResponse.json({ error: 'Noticia no encontrada' }, { status: 404 });

    const content = await scrapeAndTranslate(newsItem.site_detail_url);

    const fullNews = { ...newsItem, content };
    cache.set(id, fullNews);

    return NextResponse.json(fullNews);
  } catch (error) {
    console.error('Error detallado:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}



































// // * Solución anterior API antigua
// // Ruta de la api para devolver solo una noticia 
// // ⬅️ Devuelve UNA noticia específica por ID
// // app/api/news/[id]/route.js

// import { fetchNews } from "../../../../utils/fetchNews";

// export async function GET(_, context) {
//     const { id } = await context.params;

//     try {
//         const allNews = await fetchNews();
//         // Filtro de Noticias por ID
//         const newsItem = allNews.find((item) => item.id.toString() === id);

//         if (!newsItem) {
//             return new Response(JSON.stringify({ message: "Noticia no encontrada" }), { status: 404 });
//         }

//         return new Response(JSON.stringify(newsItem), { status: 200 });
//     } catch (error) {
//         console.error("Error al obtener noticia individual:", error);
//         return new Response(JSON.stringify({ message: "Error interno del servidor" }), { status: 500 });
//     }
// }
// /*🧠 ¿Y si en el futuro quieres mejorar rendimiento?
// Si más adelante tienes muchas noticias (ej. 500+) y no quieres traerlas todas para una sola, ahí sí te convendría:

// Guardar las noticias en una base de datos local (ej: MongoDB, PostgreSQL, etc.)

// Y luego hacer búsquedas individuales por id de forma más eficiente.

// Pero para 20-50 noticias, la estrategia actual es perfecta, limpia y sencilla.*/

