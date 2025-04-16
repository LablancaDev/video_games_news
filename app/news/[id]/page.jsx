// 📁 /app/news/[id]/page.jsx
// Función para obtener una noticia por ID
// app/news/[id]/page.jsx

import React from 'react';
export const dynamic = 'force-dynamic'; // 👈 Esto evita el error de params
// Esto le dice a Next.js: “No intentes generar esta ruta en build-time (SSG), quiero que siempre se renderice en el servidor (SSR) cuando se acceda”.


async function getNewsDetail(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('No se pudo cargar la noticia');

  return res.json();
}

export default async function NewsDetailPage({ params }) {
  const news = await getNewsDetail(params.id);
  const imageUrl = news.image?.original || '/placeholder.jpg';

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <img
        src={imageUrl}
        alt={news.title}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
      <p className="text-sm text-indigo-400 mb-4">
        📅 {new Date(news.publish_date).toLocaleDateString('es-ES')}
      </p>

      {/* Subtítulo o resumen */}
      {news.deck && (
        <p className="text-lg text-indigo-200 italic mb-4">{news.deck}</p>
      )}

      {/* Categorías */}
      {news.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {news.categories.map((cat, index) => (
            <span
              key={index}
              className="bg-violet-700 text-white text-xs font-medium px-3 py-1 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="prose dark:prose-invert max-w-none">
        {news.content ? (
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        ) : (
          <p>Contenido no disponible.</p>
        )}
      </div>

      {/* Link externo (opcional) */}
      {news.site_detail_url && (
        <a
          href={news.site_detail_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm text-indigo-300 hover:underline"
        >
          🌐 Ver artículo original
        </a>
      )}
    </div>
  );
}



// Opción	Ventajas
// useEffect + useState	Más control, sin librerías externas
// React Query	Menos código, manejo automático de loading/error/cache, escalable
// ¿Querés que también te muestre cómo hacerlo con SWR? Es igual de potente y minimalista.

// Estás utilizando SSR (Server-Side Rendering) en tu código, ya que estás realizando el fetch de los datos directamente en el servidor dentro del componente NewsDetailPage utilizando la función getNewsById de forma asíncrona. Esto significa que los datos de la noticia se obtienen en el momento de la solicitud, antes de que se renderice la página para el usuario.*/

// * Los componentes marcados como "use client" no pueden ser async. En React Server Components (como en Next.js App Router), solo los Server Components pueden ser async.

