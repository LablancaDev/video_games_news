// (Página individual de noticia)
/*📌 Función:
Muestra una noticia en detalle.
Recibe el id dinámicamente de la URL.*/

//* ⚡ Fetch en el servidor SSR

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('es-ES', options);
}

async function getNewsById(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`, {
    cache: 'no-store' // ⚠️ opcional: evita usar datos cacheados
  });

  if (!res.ok) throw new Error("Error al obtener la noticia");

  return res.json();
}

export default async function NewsDetailPage({ params }) {
  const { id } = params;
  const news = await getNewsById(id); // ⚡ Fetch del lado del servidor

  const imageUrl =
    news.image?.original ||
    news.image?.square_small ||
    news.image?.screen_tiny ||
    "/placeholder.jpg";

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={imageUrl}
        alt={news.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <p className="text-sm text-indigo-600 dark:text-indigo-300 mb-2">
        📅 {formatDate(news.publish_date)}
      </p>

      <h1 className="text-3xl font-bold text-indigo-900 dark:text-white mb-4">
        {news.title}
      </h1>

      <p className="text-base text-indigo-800 dark:text-indigo-200 mb-6">
        {news.deck}
      </p>

      {news.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {news.categories.map((cat, idx) => (
            <span
              key={idx}
              className="bg-violet-200 text-violet-800 dark:bg-violet-700 dark:text-white text-sm font-medium px-3 py-1 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}

      {news.content && (
        <div className="prose dark:prose-invert max-w-none">
          <p>{news.content}</p>
        </div>
      )}

      <a
        href={news.site_detail_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 text-indigo-700 dark:text-indigo-300 hover:underline"
      >
        Ver en sitio original →
      </a>
    </div>
  );
}


// * ESTUDIAR ESTO PREGUNTAR A CHATGPT
/* 🧠 ¿Cuál conviene? 
Opción	Ventajas
useEffect + useState	Más control, sin librerías externas
React Query	Menos código, manejo automático de loading/error/cache, escalable
¿Querés que también te muestre cómo hacerlo con SWR? Es igual de potente y minimalista.

Estás utilizando SSR (Server-Side Rendering) en tu código, ya que estás realizando el fetch de los datos directamente en el servidor dentro del componente NewsDetailPage utilizando la función getNewsById de forma asíncrona. Esto significa que los datos de la noticia se obtienen en el momento de la solicitud, antes de que se renderice la página para el usuario.*/ 

// * Los componentes marcados como "use client" no pueden ser async. En React Server Components (como en Next.js App Router), solo los Server Components pueden ser async.

 