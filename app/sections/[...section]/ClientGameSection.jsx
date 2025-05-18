// app/sections/[...section]/ClientGameSection.jsx
'use client';

import { useState, useEffect } from 'react';

export default function ClientGameSection({ sectionPath, games }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    const results = games.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGames(results);
  }, [searchQuery, games]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <input
        type="search"
        className="bg-blue-600 rounded p-2 mb-6 w-full text-white"
        placeholder="Busca un juego..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h1 className="text-3xl font-bold capitalize mb-6">
        {sectionPath.replace('-', ' ')}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div key={game.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{game.name}</h3>
              <p className="text-sm text-gray-600">Rating: {game.rating}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">No se encontraron juegos que coincidan con tu búsqueda.</p>
        )}
      </div>
    </div>
  );
}
