//🧱 componente que muestra cada “noticia rápida” de juego en la home.

import Link from 'next/link';

export default function NewsCard({ game }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
      <Link href={`/news/${game.slug}`}>
        <div className="space-y-3">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="text-lg font-semibold hover:underline">{game.name}</h2>
          <p className="text-sm text-gray-500">Lanzado: {game.released}</p>
        </div>
      </Link>    
    </article>
  );
}
