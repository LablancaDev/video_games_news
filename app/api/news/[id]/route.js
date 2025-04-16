// 📁 /app/api/news/[id]/route.js
// Paso 2: Scraping + traducción + cacheado por ID
// ❌ Eliminar  Ya no hay endpoint individual.
// 🧠 
import { fetchNews } from '../../../../utils/fetchNewsData';
import { NextResponse } from 'next/server';

export async function GET(req, {params}) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID faltante' }, { status: 400 });
  }

  try {
    const allNews = await fetchNews();
    const noticia = allNews.find(n => n.id === id);

    if (!noticia) {
      return NextResponse.json({ error: 'Noticia no encontrada' }, { status: 404 });
    }

    return NextResponse.json(noticia);
  } catch (error) {
    console.error('Error al obtener la noticia por ID:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
