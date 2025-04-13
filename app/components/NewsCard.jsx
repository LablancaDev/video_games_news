import Link from 'next/link';
import React from 'react'
// para renderizar cada noticia.

// 2️⃣ NewsCard.jsx → Representa cada noticia individualmente en una tarjeta.
// 📦 Importación de React (necesario para componentes funcionales)
// 🧱 Componente que representa una tarjeta individual de noticia

// 📆 Función para formatear la fecha
function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('es-ES', options);
}

const NewsCard = ({ news }) => {
  const imageUrl =
    news.image?.original ||
    news.image?.square_small ||
    news.image?.screen_tiny ||
    "/placeholder.jpg";

  return (
    <div className="bg-indigo-100 dark:bg-indigo-900 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden border border-indigo-300 dark:border-indigo-700 flex flex-col h-full card">
      {/* Imagen superior */}
      <img
        src={imageUrl}
        alt={news.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Fecha */}
        <p className="text-xs text-indigo-600 dark:text-indigo-300 mb-1">
          📅 {formatDate(news.publish_date)}
        </p>

        {/* Título */}
        <h2 className="text-lg font-semibold text-indigo-900 dark:text-white mb-1">
          {news.title}
        </h2>

        {/* Descripción */}
        <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-2">
          {news.deck}
        </p>

        {/* Categorías */}
        {news.categories?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {news.categories.map((cat, index) => (
              <span
                key={index}
                className="bg-violet-200 text-violet-800 dark:bg-violet-700 dark:text-white text-xs font-medium px-2 py-0.5 rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Enlace */}
        <Link
        //   href={news.site_detail_url}
        href={`/news/${news.id}`}
          className="mt-auto text-sm text-violet-700 dark:text-violet-300 font-medium hover:underline transition"
        >
          Leer más →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;




