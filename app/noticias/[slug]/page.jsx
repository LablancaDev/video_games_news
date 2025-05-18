// 📄 Página con la Noticia individual dinámica

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaShareAlt } from "react-icons/fa";

// Simulamos todas las noticias completas aquí, incluyendo el campo slug:
const noticias = [
  {
    id: 1,
    titulo: "PlayStation 5 Pro: Todos los detalles filtrados",
    slug: "playstation-5-pro-todos-los-detalles-filtrados",
    resumen: "La nueva versión de PS5 promete mejorar el rendimiento con gráficos mejorados y carga ultra rápida.",
    contenido: `
      Sony planea lanzar una versión mejorada de la PS5 con soporte para DLSS, mejor trazado de rayos, y un nuevo sistema de refrigeración.
      Entre los cambios más importantes, se incluye una GPU con un rendimiento hasta un 45% superior respecto al modelo base y soporte para resoluciones 4K nativas con mejoras significativas en reflejos y sombras.
      
      También se ha mejorado el sistema de refrigeración para mantener temperaturas más bajas durante sesiones largas de juego, y el SSD ahora ofrece velocidades aún más rápidas para reducir los tiempos de carga al mínimo.
      
      Se espera su lanzamiento a finales de 2025 con una ligera subida de precio respecto al modelo estándar, situándose alrededor de los $599.
    `,
    imagen: "/images/ps5pro.jpg",
    fecha: "10 Mayo 2025",
  },
  {
    id: 2,
    titulo: "El nuevo Mario Kart World",
    slug: "el-nuevo-mario-kart-world",
    resumen: "Nintendo prepara una nueva entrega global y conectada del clásico de carreras.",
    contenido: `
      Nintendo está desarrollando Mario Kart World, un título que busca revolucionar la franquicia con una propuesta global y conectividad total entre jugadores.
      El juego incluirá circuitos inspirados en ciudades reales, con eventos en vivo y desafíos diarios que conectarán a jugadores de distintas regiones.

      Además, se ha confirmado la integración de un sistema de progresión online con desbloqueables exclusivos, tablas de clasificación por país y soporte para juego cruzado entre plataformas.

      El lanzamiento está previsto para finales de 2025 y se espera una beta cerrada en otoño.
    `,
    imagen: "/images/switch2.jpg",
    fecha: "9 Mayo 2025",
  },
  {
    id: 3,
    titulo: "Nintendo anuncia una nueva consola híbrida",
    slug: "nintendo-anuncia-una-nueva-consola-hibrida",
    resumen: "La sucesora de la Switch llegaría en 2026 con tecnología DLSS.",
    contenido: `
      Nintendo ha confirmado que trabaja en una nueva consola híbrida, sucesora de la popular Nintendo Switch. Este nuevo dispositivo incluirá una pantalla OLED de mayor tamaño y mejor resolución, así como compatibilidad con tecnología DLSS de NVIDIA para mejorar el rendimiento gráfico sin sacrificar eficiencia.

      Se espera que conserve la naturaleza portátil y de sobremesa de la Switch, pero con un salto notable en hardware que permitirá títulos más ambiciosos. Fuentes cercanas sugieren compatibilidad hacia atrás con juegos de Switch y un nuevo dock con salidas 4K.

      El lanzamiento tentativo sería en 2026.
    `,
    imagen: "/images/switch.jpg",
    fecha: "8 Mayo 2025",
  },
  {
    id: 4,
    titulo: "Xbox Game Pass suma 10 nuevos juegos",
    slug: "xbox-game-pass-suma-10-nuevos-juegos",
    resumen: "Microsoft añade títulos AAA y sorpresas indie este mes.",
    contenido: `
      Microsoft ha revelado que Xbox Game Pass incluirá 10 nuevos títulos en su catálogo este mes, incluyendo lanzamientos recientes como 'Star Wars Outlaws', 'Hollow Knight: Silksong' y la remasterización de 'Mass Effect Trilogy'.

      Entre los juegos indie destacados se encuentran 'Cocoon', 'Tunic' y 'Replaced', todos ellos aclamados por la crítica por su estilo visual y mecánicas innovadoras.

      La estrategia de Microsoft busca reforzar el valor de su suscripción, manteniéndose como una de las plataformas más atractivas para los jugadores.
    `,
    imagen: "/images/gamepass.webp",
    fecha: "7 Mayo 2025",
  },
  {
    id: 5,
    titulo: "EA confirma el desarrollo de Battlefield 7",
    slug: "ea-confirma-el-desarrollo-de-battlefield-7",
    resumen: "El nuevo shooter promete realismo sin precedentes y jugabilidad táctica.",
    contenido: `
      EA ha confirmado el desarrollo de Battlefield 7, una entrega que apuesta por el realismo extremo, físicas mejoradas y una IA dinámica en los combates.

      El juego contará con un sistema climático avanzado que afectará directamente la jugabilidad, como tormentas que alteran la visibilidad o inundaciones que cambian el terreno.

      Además, se implementará un modo campaña con decisiones narrativas y un multijugador de hasta 128 jugadores en mapas dinámicos. El motor Frostbite ha sido mejorado para este título.

      Se espera un tráiler para principios de 2026 y un lanzamiento en otoño del mismo año.
    `,
    imagen: "/images/Battlefield7.webp",
    fecha: "6 Mayo 2025",
  },
  {
    id: 6,
    titulo: "Todas las novedades de GTA VI, ya tiene nuevo trailer",
    slug: "todas-las-novedades-de-gta-vi-ya-tiene-nuevo-trailer",
    resumen: "Rockstar confirmó que GTA 6 será lanzado el próximo 26 de mayo de 2026.",
    contenido: `
      Rockstar ha lanzado un nuevo tráiler de Grand Theft Auto VI, mostrando un mundo abierto más vivo que nunca con dos protagonistas y un mapa que fusiona zonas urbanas y rurales.

      El juego incluirá una ciudad inspirada en Miami, con un sistema económico dinámico, inteligencia artificial avanzada en peatones y una historia influenciada por decisiones morales.

      También se ha confirmado que GTA VI tendrá multijugador desde el primer día, con nuevos modos cooperativos y una economía online expandida.

      El lanzamiento está fechado para el 26 de mayo de 2026, en PS5, Xbox Series y PC.
    `,
    imagen: "/images/gta6.webp",
    fecha: "26 Mayo 2026",
  },
  {
    id: 7,
    titulo: "Steam celebra sus rebajas de primavera",
    slug: "steam-celebra-sus-rebajas-de-primavera",
    resumen: "Descuentos de hasta el 90% en grandes títulos y bundles.",
    contenido: `
      Steam ha iniciado oficialmente sus rebajas de primavera, una de las más esperadas por los jugadores. Títulos como 'Red Dead Redemption 2', 'Cyberpunk 2077' y 'Elden Ring' están disponibles con descuentos de hasta el 70%.

      Además, packs de franquicias completas como 'Tomb Raider', 'Resident Evil' y 'The Witcher' están en promoción especial, junto a numerosos indies por menos de 5€.

      Las ofertas estarán disponibles hasta el 21 de mayo, incluyendo recompensas diarias, misiones temáticas y artículos de perfil exclusivos.
    `,
    imagen: "/images/steam.webp",
    fecha: "4 Mayo 2025",
  },
  {
    id: 8,
    titulo: "Ubisoft revela Assassin’s Creed: Shadows",
    slug: "ubisoft-revela-assassins-creed-shadows",
    resumen: "Nueva entrega ambientada en la China de la dinastía Ming.",
    contenido: `
      Ubisoft ha presentado oficialmente 'Assassin’s Creed: Shadows', una nueva entrega de la saga que traslada la acción a la China de la dinastía Ming.

      El juego presentará un sistema de parkour más fluido, combate con armas tradicionales chinas, y una narrativa centrada en espionaje e intriga política. El protagonista, un maestro shaolin, deberá infiltrarse en palacios imperiales y evitar una guerra civil.

      Se ha confirmado una ambientación extensa con ciudades históricas como Nankín y la Gran Muralla, y un ciclo día-noche que influye en las misiones.

      Su lanzamiento está previsto para primavera de 2026.
    `,
    imagen: "/images/assas.avif",
    fecha: "3 Mayo 2025",
  },
  {
    id: 9,
    titulo: "DOOM: The Dark Ages es revelado por Bethesda",
    slug: "doom-the-dark-ages-es-revelado-por-bethesda",
    resumen: "La nueva entrega llevará la acción infernal a una ambientación medieval oscura.",
    contenido: `
      Bethesda ha revelado oficialmente 'DOOM: The Dark Ages', la nueva entrega de la icónica saga de disparos en primera persona. Esta vez, la acción nos traslada a una era medieval oscura donde la brutalidad, los demonios y las armas imposibles vuelven con más fuerza que nunca.
  
      El juego presenta al DOOM Slayer en un mundo donde castillos góticos, templos profanados y campos de batalla infernales reemplazan los laboratorios futuristas. A pesar de la ambientación antigua, las armas son una mezcla de tecnología avanzada y estética medieval, incluyendo una nueva espada rúnica, un escudo lanzable y una escopeta de triple cañón.
  
      Entre las novedades jugables, destaca un sistema de combate cuerpo a cuerpo renovado, jefes colosales y nuevos enemigos demoníacos inspirados en la mitología europea. También se incluirá un modo horda cooperativo para hasta 4 jugadores y contenido post-lanzamiento planeado durante todo 2026.
  
      'DOOM: The Dark Ages' llegará a PC, Xbox Series X|S y PlayStation 5 en el primer trimestre de 2026.
    `,
    imagen: "/images/doom-the-dark-ages.jpg",
    fecha: "18 Mayo 2025",
  },

  {
    id: 10,
    titulo: "Lies of P recibirá DLC gratuito este otoño",
    slug: "lies-of-p-dlc-gratuito-otono",
    resumen: "El aclamado soulslike inspirado en Pinocho suma nuevo contenido este año.",
    contenido: `
      Neowiz ha confirmado que 'Lies of P' recibirá un DLC gratuito en otoño de 2025. El nuevo contenido incluirá una región inédita, nuevas armas con habilidades especiales y una misión secundaria que ampliará el final alternativo del juego original.
  
      Los desarrolladores también han prometido mejoras de rendimiento para consolas y más opciones de personalización del protagonista. Los fans esperan que esta actualización abra paso a una posible secuela ya rumoreada.
  
      Más detalles se compartirán en el evento Gamescom 2025.
    `,
    imagen: "/images/liesofp.jpg",
    fecha: "16 Mayo 2025",
  },
  {
    id: 11,
    titulo: "Resident Evil 9 se presentará este año y se lanzará en 2026, según una nueva filtración",
    slug: "resident-evil-9-se-presentara-este-ano-y-se-lanzara-en-2026-segun-una-nueva-filtracion",
    resumen: "La esperada nueva entrega de la saga de terror apunta a una presentación oficial en 2025 y lanzamiento en 2026.",
    contenido: `
      Una filtración reciente sugiere que Capcom tiene planeado presentar oficialmente Resident Evil 9 antes de que termine este año, generando gran expectativa entre los fans de la saga.
  
      Se especula que esta nueva entrega traerá una vuelta a las raíces del survival horror, con un enfoque renovado en la atmósfera oscura, exploración y narrativa intensa, sin dejar de lado innovaciones técnicas importantes.
  
      Entre las novedades, se rumorea que el juego aprovechará al máximo la tecnología de las consolas actuales para ofrecer gráficos ultra realistas, junto con un sistema de audio 3D inmersivo que aumentará la tensión y el miedo.
  
      La fecha de lanzamiento prevista es para algún momento de 2026, y se espera que esté disponible en PlayStation 5, Xbox Series X|S y PC.
  
      Más detalles se esperan en los próximos meses, cuando Capcom confirme oficialmente los planes de lanzamiento.
    `,
    imagen: "/images/residentevil9.webp",
    fecha: "18 Mayo 2025",
  },

  {
    id: 12,
    titulo: "Anunciado torneo mundial de Valorant para septiembre",
    slug: "torneo-mundial-valorant-septiembre-2025",
    resumen: "Riot Games revela detalles del evento global con equipos de todas las regiones.",
    contenido: `
      Riot Games ha anunciado el próximo torneo mundial de Valorant, que se llevará a cabo del 5 al 22 de septiembre de 2025 en Berlín, Alemania.
  
      El campeonato contará con los 16 mejores equipos del mundo, incluyendo representantes de Norteamérica, Europa, Latinoamérica y Asia. Además, se distribuirá un pozo de premios de más de 2 millones de dólares y se presentarán cambios importantes en el metajuego competitivo.
  
      La final será transmitida en más de 10 idiomas y se espera que supere la audiencia récord del torneo anterior.
    `,
    imagen: "/images/valorant.webp",
    fecha: "15 Mayo 2025",
  },

  {
    id: 13,
    titulo: "Fall Guys se une a Sonic en nuevo evento temático",
    slug: "fall-guys-sonic-evento-tematico",
    resumen: "La colaboración incluye trajes, desafíos y escenarios inspirados en Green Hill Zone.",
    contenido: `
      Mediatonic ha revelado un nuevo evento temático de Sonic the Hedgehog en 'Fall Guys', disponible del 20 al 30 de mayo de 2025.
  
      Los jugadores podrán desbloquear trajes exclusivos de Sonic, Tails y Knuckles, además de participar en desafíos con anillos dorados y plataformas móviles. El escenario estrella del evento será una reinterpretación de la clásica Green Hill Zone adaptada a las físicas de Fall Guys.
  
      Se trata de una celebración por el aniversario 34 de Sonic, y los cosméticos estarán disponibles en la tienda del juego.
    `,
    imagen: "/images/fallguys-sonic.jpg",
    fecha: "14 Mayo 2025",
  },

  {
    id: 14,
    titulo: "Among Us lanza modo batalla campal limitado",
    slug: "among-us-modo-batalla-campal",
    resumen: "Innersloth sorprende con una modalidad experimental de 20 jugadores.",
    contenido: `
      Innersloth ha lanzado un modo de juego temporal para 'Among Us' en el que hasta 20 tripulantes compiten en un mapa abierto sin votaciones ni reuniones.
  
      El nuevo modo, llamado “Survival”, enfrenta a jugadores en partidas rápidas donde los impostores pueden eliminar y sabotear libremente. Gana quien sobreviva más tiempo o elimine a todos los rivales.
  
      Este experimento estará disponible hasta el 31 de mayo y busca probar nuevas ideas para la futura evolución del juego.
    `,
    imagen: "/images/amongbattle.jpg",
    fecha: "13 Mayo 2025",
  },

  {
    id: 15,
    titulo: "Warhammer 40.000: Speed Freeks anuncia su llegada con acción frenética",
    slug: "warhammer-40000-speed-freeks-anuncia-su-llegada-con-accion-frenetica",
    resumen: "La nueva entrega de Warhammer 40K promete carreras explosivas y combate vehicular intenso.",
    contenido: `
      Games Workshop y Frontier Developments han anunciado oficialmente 'Warhammer 40.000: Speed Freeks', un juego que mezcla carreras vertiginosas con combates brutales en el universo de Warhammer 40K.
  
      El título pondrá a los jugadores en el papel de corredores de vehículos modificados en un torneo brutal organizado por los Orkos, donde la velocidad y la destrucción son las claves para la victoria.
  
      Se destaca un sistema de personalización profundo para los vehículos, que podrán ser equipados con armas, mejoras y trampas para sabotear a los rivales. Además, el juego ofrecerá modos multijugador competitivos y cooperativos.
  
      Warhammer 40.000: Speed Freeks llegará a PC y consolas en 2026, y promete capturar la esencia caótica y divertida de los Orkos con gráficos detallados y una banda sonora explosiva.
    `,
    imagen: "/images/warhammer-speedfreeks.jpg",
    fecha: "18 Mayo 2025",
  }



];

function formatContent(text) {
  // convierte saltos de línea en párrafos HTML
  const paragraphs = text.trim().split(/\n\s*\n/);
  return paragraphs.map((p, i) => `<p>${p.trim()}</p>`).join('');
}

export default function NoticiaPage({ params }) {
  const { slug } = params;
  const noticia = noticias.find((n) => n.slug === slug);

  const shareUrl = 'www.facebook.com';

  if (!noticia) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans">
      <Link href="/noticias" className="text-blue-700 hover:underline mb-6 inline-block font-semibold">
        ← Volver a Noticias
      </Link>

      <article className="bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900">{noticia.titulo}</h1>

        <div className="flex items-center text-gray-500 mb-6 space-x-3">
          <FaCalendarAlt />
          <time dateTime={new Date(noticia.fecha).toISOString()} className="text-sm">{noticia.fecha}</time>
          <span className="ml-auto text-xs uppercase tracking-widest font-semibold text-blue-600">
            {/* Aquí puedes poner categoría si la añades */}
            Noticia #{noticia.id}
          </span>
        </div>

        <p className="text-lg text-gray-700 mb-8 font-medium italic border-l-4 border-blue-500 pl-4">
          {noticia.resumen}
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg mb-10">
          <Image
            src={noticia.imagen}
            alt={noticia.titulo}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <section
          className="prose prose-lg max-w-none text-gray-800 mb-12"
          dangerouslySetInnerHTML={{ __html: formatContent(noticia.contenido) }}
        />

        <section className="flex items-center space-x-4 text-blue-600 hover:text-blue-800 cursor-pointer select-none">
          <FaShareAlt />
          <span className="font-semibold">Compartir esta noticia</span>
          {/* Aquí podrías agregar iconos de redes sociales con links reales */}
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
        </section>

        {/* Ejemplo sencillo de sección de noticias relacionadas (opcional) */}
        <section className="mt-14 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Noticias relacionadas</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            {noticias
              .filter((n) => n.id !== noticia.id)
              .slice(0, 3)
              .map((rel) => (
                <li key={rel.id}>
                  <Link href={`/noticias/${rel.slug}`} className="hover:underline">
                    {rel.titulo}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </article>
    </main>
  );
}