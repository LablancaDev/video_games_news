// // 📁 /app/news/[id]/page.jsx
// // Paso 5: Mostrar contenido completo en tu web
// ❌ Elimiar ya Duplicada 
// import React from 'react';

// async function getNewsDetail(id) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`, {
//     cache: 'no-store', // 👈 para evitar datos viejos en dev
//   });

//   if (!res.ok) throw new Error('No se pudo cargar la noticia');

//   return res.json();
// }

// export default async function NewsDetailPage({ params }) {
//   const news = await getNewsDetail(params.id);
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <img
//         src={news.image?.original || '/placeholder.jpg'}
//         alt={news.title}
//         className="w-full h-64 object-cover rounded mb-4"
//       />
//       <h1 className="text-3xl font-bold text-white mb-2">{news.title}</h1>
//       <p className="text-sm text-indigo-400 mb-4">{new Date(news.publish_date).toLocaleDateString('es-ES')}</p>
//       <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-2">
//           {news.deck}
//         </p>
//       <div className="prose dark:prose-invert max-w-none">
//         <p dangerouslySetInnerHTML={{ __html: news.content }} />
//       </div>
//     </div>
//   );
// }

















