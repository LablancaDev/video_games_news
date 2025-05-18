// 📂 archivo que se encarga de traer los juegos recientes desde la API de RAWG.io.

const API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

// Función para obtener los juegos más recientes
export async function getLatestGames() {
  try {
    const res = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&ordering=-added&page_size=30`
    );

    if (!res.ok) throw new Error('Error al obtener juegos');

    const data = await res.json();
    return data.results.map((game) => ({
      id: game.id,
      slug: game.slug,
      name: game.name,
      released: game.released,
      background_image: game.background_image,
      rating: game.rating,
    }));
  } catch (err) {
    console.error('RAWG ERROR:', err);
    return [];
  }
}

// ⚡ RAWG.io ofrece varios endpoints que te permiten obtener datos de diferentes tipos de juegos:

// 1️⃣ Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-released&page_size=12`);(Endpoint principal Juegos Recientes)
// 2️⃣ Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-added&page_size=12`);(Juegos Más Esperados)
// 3️⃣ Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=12`);(Juegos Populares)
// 4️⃣ Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&genres=action&ordering=-released&page_size=12`); (Juegos por Género)
// 5️⃣ Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&platforms=7&ordering=-released&page_size=12`); (Juegos de una Plataforma)
// 6️⃣ Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&developers=3&ordering=-released&page_size=12`);(Juegos de una Compañía)
// 7  Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&dates=2024-01-01,2024-12-31&page_size=12`);(Juegos por Fecha de Lanzamiento)
// 8  Endpoint:const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=12`);(Juegos con Mejor Calificación)
// 9  Endpoint:const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&platforms=7&ordering=-released&page_size=12`);(Ej: Obtener Juegos nintendo) 

// Función para obtener los detalles completos de un juego
export async function getGameDetails(slug) {
  try {
    const res = await fetch(`${BASE_URL}/games/${slug}?key=${API_KEY}`);

    if (!res.ok) throw new Error('Error al obtener detalles del juego');

    const data = await res.json();
    return {
      name: data.name,
      description: data.description_raw,
      released: data.released,
      background_image: data.background_image,
      rating: data.rating,
    };
  } catch (err) {
    console.error('RAWG ERROR:', err);
    return null;
  }
}


// Función para obtener diferentes endpoints según la sección pasada desde 📄 app/sections/[section]/page.js 
export async function getGamesBySection(section) {
  const base = 'https://api.rawg.io/api/games';
  const sectionUrls = {
    latest: '&ordering=-released',  // Juegos más recientes
    top: '&ordering=-rating',  // Juegos mejor valorados
    upcoming: '&dates=2024-04-20,2025-12-31&ordering=added',  // Juegos próximos
  };

  let url = `${base}?key=${process.env.RAWG_API_KEY}`;

  if (sectionUrls[section]) {
    url += sectionUrls[section];
  } else if (section.startsWith('platforms/')) {
    const platformSlug = section.split('/')[1];
    url += `&platforms=${getPlatformId(platformSlug)}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}


// Función para obtener el ID de la plataforma (puedes ajustar esto según tus necesidades)
function getPlatformId(slug) {
  const platformMap = {
    switch: 7,
    ps5: 187,
    "xbox-one": 1,
    ps4: 18,
    ios: 3,
    android: 21,
    ps3: 16,
    ps2: 15,
    "ps-vita": 19,
    psp: 17,
    "xbox-360": 14,
    gamecube: 105,
    "nintendo-64": 83,
    wii: 11,
    "nintendo-ds": 8,
    snes: 79,
    nes: 49,
    "game-boy": 43,
    "game-boy-color": 57,
    "game-boy-advance": 24,
    "sega-genesis": 29,
    "sega-saturn": 107,
    dreamcast: 106,
    "3do": 111,
    "neo-geo": 12,
    "atari-2600": 23,
    pc: 4,
    mac: 5,
    linux: 6,
    web: 14,
  };
  return platformMap[slug] || 4;  // Devuelve el ID de la plataforma o 4 (PC) como valor por defecto
}


//  ❌ Function para obtener las plataformas
// Probar API desde URL https://api.rawg.io/api/platforms?key=f504817288c9452985ef0b7f82fab3d6

// Endpoint: const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&platforms=7&ordering=-released&page_size=12`);
export async function getGamesByPlatform(section, pageSize = 50) {
  const platformSlug = section.split('/')[1];  // Obtiene el nombre de la plataforma de la URL
  const platformId = getPlatformId(platformSlug);  // Obtén el ID de la plataforma

  // Modifica el endpoint con el nuevo page_size
  const url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${platformId}&page_size=${pageSize}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Error al obtener juegos de la plataforma');
    }

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error('RAWG ERROR:', err);
    return [];
  }
}
// Más adelante se puede añadir la Paginación.
// Más adelante, puedes mejorar el SEO agregando metadata dinámica con generateMetadata().

/*

🏆 1. APITube.io – API de Noticias de Videojuegos
Ventajas:

Cobertura global de noticias sobre videojuegos, consolas, eSports y más, en más de 60 idiomas.

Permite uso comercial incluso en su plan gratuito (sin necesidad de tarjeta de crédito).

Ofrece funcionalidades avanzadas como análisis de sentimiento, detección de duplicados, agrupación de historias y filtrado por categorías, plataformas o títulos específicos.

Proporciona acceso a artículos completos, imágenes, metadatos y permite exportar datos en formatos como JSON, XML, CSV y XLSX.​

Consideraciones:

Aunque permite uso comercial, es recomendable revisar sus términos de servicio para asegurarte de cumplir con los requisitos específicos de atribución o limitaciones.*/ 