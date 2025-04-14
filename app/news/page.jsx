// 📁 /app/news/[id]/page.jsx
// Paso 5: Mostrar contenido completo en tu web
import React from 'react';

async function getNewsDetail(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`);
  if (!res.ok) throw new Error('No se pudo cargar la noticia');
  return res.json();
}

export default async function NewsDetailPage({ params }) {
  const news = await getNewsDetail(params.id);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={news.image?.original || '/placeholder.jpg'}
        alt={news.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold text-white mb-2">{news.title}</h1>
      <p className="text-sm text-indigo-400 mb-4">{new Date(news.publish_date).toLocaleDateString('es-ES')}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p dangerouslySetInnerHTML={{ __html: news.content }} />
      </div>
    </div>
  );
}

















// import React from 'react'
// //  # Página de listado de noticias
// // Muestra una lista de noticias (igual que el inicio, pero con más artículos).
// import NewsCard from "../components/NewsCard";

// async function getNews() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);
//   return res.json();
// }

// export default async function NewsPage() {
//   const news = await getNews();

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4 text-white">Todas las Noticias</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {news.map((item) => (
//           <NewsCard key={item.id} news={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

