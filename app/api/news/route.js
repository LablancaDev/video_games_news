//📂 Backend
// API de noticias, Obtiene todas las noticias desde una API externa y las envía al frontend.
// ⬅️ Devuelve TODAS las noticias 
import { fetchNews } from "../../../utils/fetchNews";

export async function GET() {
  try {
    const news = await fetchNews();
    return new Response(JSON.stringify(news), { status: 200 });
  } catch (error) {
    console.error("Error en la API:", error);
    return new Response(JSON.stringify({ message: "Error obteniendo noticias" }), { status: 500 });
  }
}
