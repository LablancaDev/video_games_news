// 📄 noticias/page.jsx Página con conjunto de Noticias 

/*Este es un Client Component ("use client"), lo cual está perfecto porque usas Swiper (una librería que necesita el cliente).
No puedes definir metadata aquí por esa razón, y ya lo estás evitando correctamente.
*/
"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// NOTA: Añadiendo (destacada: true) a una noticia se incluye en el Carousel y desaparece de restantes 
const noticias = [
  {
    id: 1,
    titulo: "Todas las novedades de GTA VI, ya tiene nuevo trailer",
    resumen: "Rockstar confirmó que GTA 6 será lanzado el próximo 26 de mayo de 2026.",
    imagen: "/images/gta6.webp",
    fecha: "26 Mayo 2026",
    destacada: true,
  },
  {
    id: 2,
    titulo: "El nuevo Mario Kart World",
    resumen: "Nintendo prepara una nueva entrega global y conectada del clásico de carreras.",
    imagen: "/images/switch2.jpg",
    fecha: "9 Mayo 2025",
    destacada: true,
  },
  {
    id: 3,
    titulo: "Nintendo anuncia una nueva consola híbrida",
    resumen: "La sucesora de la Switch llegaría en 2026 con tecnología DLSS.",
    imagen: "/images/switch.jpg",
    fecha: "8 Mayo 2025",
  },
  {
    id: 4,
    titulo: "Xbox Game Pass suma 10 nuevos juegos",
    resumen: "Microsoft añade títulos AAA y sorpresas indie este mes.",
    imagen: "/images/gamepass.webp",
    fecha: "7 Mayo 2025",
  },
  {
    id: 5,
    titulo: "EA confirma el desarrollo de Battlefield 7",
    resumen: "El nuevo shooter promete realismo sin precedentes y jugabilidad táctica.",
    imagen: "/images/Battlefield7.webp",
    fecha: "6 Mayo 2025",
  },
  {
    id: 6,
    titulo: "PlayStation 5 Pro: Todos los detalles filtrados",
    resumen: "La nueva versión de PS5 promete mejorar el rendimiento con gráficos mejorados y carga ultra rápida.",
    imagen: "/images/ps5pro.jpg",
    fecha: "10 Mayo 2025",
    destacada: true,
  },
  {
    id: 7,
    titulo: "Steam celebra sus rebajas de primavera",
    resumen: "Descuentos de hasta el 90% en grandes títulos y bundles.",
    imagen: "/images/steam.webp",
    fecha: "4 Mayo 2025",
  },
  {
    id: 8,
    titulo: "Ubisoft revela Assassin’s Creed: Shadows",
    resumen: "Nueva entrega ambientada en la China de la dinastía Ming.",
    imagen: "/images/assas.avif",
    fecha: "3 Mayo 2025",
  },
  {
    id: 9,
    titulo: "DOOM: The Dark Ages es revelado por Bethesda",
    slug: "doom-the-dark-ages-es-revelado-por-bethesda",
    resumen: "La nueva entrega llevará la acción infernal a una ambientación medieval oscura.",
    imagen: "/images/doom-the-dark-ages.jpg",
    fecha: "18 Mayo 2025",
  },
];

const noticiasMenores = [
  {
    id: 10,
    titulo: "Resident Evil 9 se presentará este año y se lanzará en 2026, según una nueva filtración",
    slug: "resident-evil-9-se-presentara-este-ano-y-se-lanzara-en-2026-segun-una-nueva-filtracion",
    imagen: "/images/residentevil9.webp",
    fecha: "18 Mayo 2025",
  },
  {
    id: 11,
    titulo: "Lies of P recibirá DLC gratuito este otoño",
    slug: "lies-of-p-dlc-gratuito-otono",
    imagen: "/images/liesofp.jpg",
    fecha: "16 Mayo 2025",
  },
  {
    id: 12,
    titulo: "Anunciado torneo mundial de Valorant para septiembre",
    slug: "torneo-mundial-valorant-septiembre-2025",
    imagen: "/images/valorant.webp",
    fecha: "15 Mayo 2025",
  },
  {
    id: 13,
    titulo: "Fall Guys se une a Sonic en nuevo evento temático",
    slug: "fall-guys-sonic-evento-tematico",
    imagen: "/images/fallguys-sonic.jpg",
    fecha: "14 Mayo 2025",
  },
  {
    id: 14,
    titulo: "Among Us lanza modo batalla campal limitado",
    slug: "among-us-modo-batalla-campal",
    imagen: "/images/amongbattle.jpg",
    fecha: "13 Mayo 2025",
  },
  {
    id: 15,
    titulo: "Warhammer 40.000: Speed Freeks anuncia su llegada con acción frenética",
    slug: "warhammer-40000-speed-freeks-anuncia-su-llegada-con-accion-frenetica",
    imagen: "/images/warhammer-speedfreeks.jpg",
    fecha: "18 Mayo 2025", 
  },
];


export default function NoticiasPage() {

  // Filtros de Noticias entre destacadas y restantes
  const destacadas = noticias.filter((n) => n.destacada);
  const restantes = noticias.filter((n) => !n.destacada);

  return (
    <div className="flex justify-center px-2 md:px-4">
      {/* 👉 Izquierda: espacio para anuncio */}
      <div className="hidden lg:block w-[160px] mr-4">
        <div className="bg-gray-200 h-full text-center p-2 text-sm text-gray-600 rounded">
          [Anuncio izquierdo]
        </div>
      </div>

      {/* 📰 Contenido principal */}
      <main className="max-w-5xl w-full py-10">
        <h1 className="text-4xl font-bold mb-6">Noticias de Videojuegos</h1>
        <p className="mb-10 text-lg text-gray-900">
          Descubre lo último del mundo gamer: anuncios, filtraciones, tráilers y más.
        </p>

        {/* 🎠 Carousel */}
        <section className="mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {destacadas.map((noticia) => (
              <SwiperSlide key={noticia.id}>
                <Link href={`/noticias/${slugify(noticia.titulo)}`} className="block relative h-[450px]">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h2 className="text-3xl font-bold text-white">{noticia.titulo}</h2>
                    <p className="text-white mt-2">{noticia.fecha}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* 📰 Noticias principales */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restantes.map((noticia) => (
            <Link
              key={noticia.id}
              href={`/noticias/${slugify(noticia.titulo)}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col h-full"
            >
              <div className="relative w-full h-48">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{noticia.titulo}</h3>
                <p className="text-sm text-gray-500 mb-2">{noticia.fecha}</p>
                <p className="text-sm text-gray-700 line-clamp-3 flex-1">{noticia.resumen}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* 📰 Noticias menores */}
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {noticiasMenores.map((noticia) => (
            <Link
              key={noticia.id}
              href={`/noticias/${slugify(noticia.slug)}`}
              className="group bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition flex flex-col"
            >
              <div className="relative w-full h-40">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h4 className="text-md font-medium text-gray-800">{noticia.titulo}</h4>
                <p className="text-xs text-gray-500 mt-1">{noticia.fecha}</p>
              </div>
            </Link>
          ))}
        </section>

        <div className="mt-20 border-t pt-10 text-center text-gray-400 italic text-sm">
          [Espacio reservado para anuncios o widgets]
        </div>
      </main>

      {/* 👉 Derecha: espacio para anuncio */}
      <div className="hidden lg:block w-[160px] ml-4">
        <div className="bg-gray-200 h-full text-center p-2 text-sm text-gray-600 rounded">
          [Anuncio derecho]
        </div>
      </div>
    </div>
  );
}
