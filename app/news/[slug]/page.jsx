import { getGameDetails } from '../../../lib/rawg';
import { notFound } from 'next/navigation';
import { rewriteTextWithGPT } from '@/lib/gptRewriteServer';
// ← Página de lista de noticias
export default async function GameDetailPage({ params }) {
  const { slug } = params;

  // Obtener los detalles del juego
  const game = await getGameDetails(slug);

  // Si no se encuentra el juego, se muestra un error 404
  if (!game) return notFound();

  // Intentamos reescribir la descripción del juego con GPT
  let rewrittenDescription = '';
  try {
    rewrittenDescription = await rewriteTextWithGPT(game.description);
  } catch (error) {
    console.error('Error al reescribir la descripción con GPT:', error);
    // Si falla, mantén la descripción original, IMPORTANTE EN UN FUTURO CAMBIAR OPENAI LIMITADA (PAGAR CHATGPT 4.0 o AÑADIR PETICIÓN DE APOYO A OTRA IA)
    rewrittenDescription = game.description;
  }

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-2 italic text-gray-500">
        {rewrittenDescription === game.description
          ? 'Descripción original de RAWG'
          : 'Descripción generada con IA'}
      </p>
      <p className="text-lg mb-4">{rewrittenDescription}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Fecha de lanzamiento: {game.released}</span>
        <span>Calificación: {game.rating}</span>
      </div>
    </section>
  );
}


/*### 🧠 ¿Qué hace este código?
1. **Recibe el `slug` de la URL**: el `params.slug` te permite identificar qué juego mostrar.
2. **Llama a la API de RAWG** para obtener los detalles completos del juego usando una nueva función `getGameDetails()`.
3. Si el juego no existe, muestra un error 404 (`notFound()`).
4. Muestra los detalles: imagen, nombre, descripción, fecha de lanzamiento, y rating.
*/
