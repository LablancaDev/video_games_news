import { getGamesByPlatform, getGamesBySection } from '@/lib/rawg';
import { notFound } from 'next/navigation';
import ClientGameSection from './ClientGameSection';

// 📄 👉 Página dinámica para secciones como /latest, /top, /platforms/switch, etc.
// app/sections/[...section]/page.jsx

export default async function SectionPage({ params }) {
  const { section } = params;

  const sectionArray = Array.isArray(section) ? section : [section];
  const sectionPath = sectionArray.join('/');

  let games;

  if (section === 'categoryItems') {
    games = await getGamesBySection(sectionPath);
  } else if (sectionPath.startsWith('platforms/')) {
    games = await getGamesByPlatform(sectionPath);
  } else {
    games = await getGamesBySection(sectionPath);
  }

  if (!games || games.length === 0) return notFound();

  return <ClientGameSection sectionPath={sectionPath} games={games} />;
}



/*
Desde app/sections/[section]/page.js, le pasas el nombre de la sección como params.section a 
getGamesBySection(), y según ese valor ("latest", "top", "upcoming", etc.), la función construye la URL a la API RAWG correspondiente.

💡 Todas las páginas usan la misma estructura, solo cambia el contenido dinámicamente según la sección.

Así reduces duplicación y mantienes todo limpio y escalable. 🔥*/ 