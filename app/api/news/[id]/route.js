// Ruta de la api para devolver solo una noticia 
// ⬅️ Devuelve UNA noticia específica por ID
// app/api/news/[id]/route.js

import { fetchNews } from "../../../../utils/fetchNews";

export async function GET(_, context) {
    const { id } = await context.params;

    try {
        const allNews = await fetchNews();
        // Filtro de Noticias por ID
        const newsItem = allNews.find((item) => item.id.toString() === id);

        if (!newsItem) {
            return new Response(JSON.stringify({ message: "Noticia no encontrada" }), { status: 404 });
        }

        return new Response(JSON.stringify(newsItem), { status: 200 });
    } catch (error) {
        console.error("Error al obtener noticia individual:", error);
        return new Response(JSON.stringify({ message: "Error interno del servidor" }), { status: 500 });
    }
}
/*🧠 ¿Y si en el futuro quieres mejorar rendimiento?
Si más adelante tienes muchas noticias (ej. 500+) y no quieres traerlas todas para una sola, ahí sí te convendría:

Guardar las noticias en una base de datos local (ej: MongoDB, PostgreSQL, etc.)

Y luego hacer búsquedas individuales por id de forma más eficiente.

Pero para 20-50 noticias, la estrategia actual es perfecta, limpia y sencilla.*/

