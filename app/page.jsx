//✅ NewsPage.jsx obtiene las noticias de la API con getNews().

// "use client" // Indicar en todos los archivos que usen hooks del cliente.
/*Esto le indica a Next.js que este archivo debe ser ejecutado del lado del 
cliente y que puede utilizar hooks como useEffect y useState.*/

//* ⚡ Fetch en el servidor SSR

import NewsCard from "./components/NewsCard";

// Función para obtener las noticias desde la API
async function getNews() { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);
  if (!res.ok) {
    throw new Error("Error al obtener noticias");
  }
  const data = await res.json();
  return data || []; // Si no se encuentran noticias, devuelve un array vacío
}

// El componente es ahora un Server Component
export default async function NewsPage() {
  try {
    const news = await getNews(); // Llamamos a la API en el servidor
    
    console.log('Array de Noticias:', news);
    
    return (
      <div>
        <h1 className="text-3xl text-center text-white font-bold my-4">Todas las Noticias</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3"> {/*grid: Activa el diseño en cuadrícula. grid-cols-1: En pantallas pequeñas, habrá 1 columna. md:grid-cols-3: En pantallas medianas (768px o más), habrá 3 columnas.*/}
          {news.map((item) => ( 
            <NewsCard key={item.id} news={item} />  
          ))} 
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    return <div>Error al cargar las noticias.</div>;
  }
}

/*
FLUJO DESEADO
[1] fetchNews()                   => Llama a NewsData.io con axios ✅
[2] /api/news                     => API interna que devuelve todas las noticias ✅
[3] /api/news/[id]                => Scrapea y traduce una noticia por ID ✅
[4] NewsPage & NewsCard           => Listado de tarjetas ✅
[5] [id]/page.jsx                 => Página de detalle por noticia ✅
*/ 

