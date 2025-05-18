// app/lanzamientos/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

// Datos de lanzamientos actualizados
const lanzamientos = [
  {
    id: 1,
    titulo: "Grand Theft Auto VI",
    fecha: "2026-05-26",
    plataforma: ["PS5", "Xbox Series X|S"],
    genero: "Acción/Aventura",
    imagen: "/images/gta6.webp",
    descripcion: "Rockstar busca crear el mejor producto de entretenimiento jamás visto, con un enfoque en consolas actuales y una versión para PC en desarrollo.",
  },
  {
    id: 2,
    titulo: "Mario Kart World",
    fecha: "2025-06-05",
    plataforma: ["Nintendo Switch 2"],
    genero: "Carreras",
    imagen: "/images/mario-kart-world.jpg",
    descripcion: "Nintendo lanza Mario Kart World como el juego estrella para su nueva consola, ofreciendo accesibilidad y profundidad para todos los jugadores.",
  },
  {
    id: 3,
    titulo: "Metroid Prime 4: Beyond",
    fecha: "2025-09-01",
    plataforma: ["Nintendo Switch 2"],
    genero: "Aventura/FPS",
    imagen: "/images/metroid-prime-4.jpg",
    descripcion: "Samus Aran regresa con una entrega repleta de exploración, ambientación espacial y mecánicas modernas.",
  },
  {
    id: 4,
    titulo: "Monster Hunter Wilds",
    fecha: "2025-02-28",
    plataforma: ["PS5", "Xbox Series X|S", "PC"],
    genero: "Acción/RPG",
    imagen: "/images/monster-hunter-wilds.jpg",
    descripcion: "La nueva entrega de la saga de caza de monstruos de Capcom promete mundos abiertos y criaturas colosales.",
  },
  {
    id: 5,
    titulo: "Assassin's Creed Shadows",
    fecha: "2025-03-20",
    plataforma: ["PS5", "Xbox Series X|S", "PC"],
    genero: "Acción/Aventura",
    imagen: "/images/assas.avif",
    descripcion: "Ubisoft presenta una nueva entrega ambientada en la China de la dinastía Ming, con una historia envolvente y mecánicas mejoradas.",
  },
  {
    id: 6,
    titulo: "Kingdom Come: Deliverance 2",
    fecha: "2025-02-04",
    plataforma: ["PS5", "Xbox Series X|S", "PC"],
    genero: "RPG",
    imagen: "/images/kingdom-come-2.jpg",
    descripcion: "La secuela del aclamado RPG medieval ofrece una narrativa profunda y un mundo abierto realista.",
  },
  {
    id: 7,
    titulo: "Civilization VII",
    fecha: "2025-02-11",
    plataforma: ["PC", "PS5", "PS4", "Xbox Series X|S", "Xbox One", "Switch"],
    genero: "Estrategia",
    imagen: "/images/civilization-7.avif",
    descripcion: "La nueva entrega de la saga de estrategia por turnos introduce mecánicas renovadas y civilizaciones inéditas.",
  },
  {
    id: 8,
    titulo: "Avowed",
    fecha: "2025-02-18",
    plataforma: ["Xbox Series X|S", "PC"],
    genero: "RPG",
    imagen: "/images/avowed.jpg",
    descripcion: "Obsidian Entertainment presenta un RPG en primera persona ambientado en el mundo de Eora, conocido por Pillars of Eternity.",
  },
  {
    id: 9,
    titulo: "Borderlands 4",
    fecha: "2025-09-12",
    plataforma: ["PS5", "Xbox Series X|S", "PC"],
    genero: "FPS/RPG",
    imagen: "/images/borderlands-4.jpg",
    descripcion: "La popular saga de disparos y saqueo regresa con nuevos personajes, armas y un mundo aún más caótico.",
  },
  {
    id: 10,
    titulo: "Doom: The Dark Ages",
    fecha: "2025-10-15",
    plataforma: ["PS5", "Xbox Series X|S", "PC"],
    genero: "FPS",
    imagen: "/images/doom-the-dark-ages.jpg",
    descripcion: "Bethesda lleva la acción infernal a una ambientación medieval oscura en esta nueva entrega de la saga Doom.",
  },
  // Agrega más juegos según sea necesario
];

export default function LanzamientosPage() {
  const [filtro, setFiltro] = useState("");

  const plataformas = [
    "",
    "PS5",
    "Xbox Series X|S",
    "PC",
    "Nintendo Switch 2",
  ];

  const filtrados = lanzamientos.filter((juego) =>
    filtro === "" ? true : juego.plataforma.includes(filtro)
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Calendario de Lanzamientos</h1>
      <p className="mb-8 text-lg text-gray-700">
        Descubre todos los videojuegos que llegarán próximamente. Explora por plataforma, género y más. ¡Mantente al día con lo mejor del gaming!
      </p>

      {/* 🎮 Filtros por plataforma */}
      <div className="flex flex-wrap gap-4 mb-10">
        {plataformas.map((plataforma) => (
          <button
            key={plataforma || "Todos"}
            onClick={() => setFiltro(plataforma)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              filtro === plataforma
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {plataforma || "Todos"}
          </button>
        ))}
      </div>

      {/* 🗓️ Lista de juegos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtrados.map((juego) => (
          <div
            key={juego.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={juego.imagen}
                alt={juego.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {juego.titulo}
              </h2>
              <p className="text-md mb-1 bg-blue-400 p-2 rounded">
                <strong>Fecha:</strong> {juego.fecha}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Plataforma:</strong> {juego.plataforma.join(", ")}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Género:</strong> {juego.genero}
              </p>
              <p className="text-sm text-gray-700 flex-1">
                {juego.descripcion}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
