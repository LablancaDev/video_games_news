import React from 'react'
//  # Página de listado de noticias
// Muestra una lista de noticias (igual que el inicio, pero con más artículos).
import NewsCard from "../components/NewsCard";

async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);
  return res.json();
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-white">Todas las Noticias</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
}

