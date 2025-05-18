'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Dropdown from "./Dropdown";


// Componente NavLink reutilizable
function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-blue-400 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY <= 60);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔹 Menú "Categorías"
  const categoryItems = [
    { href: "/sections/latest", label: "🎮 Últimos" },
    { href: "/sections/upcoming", label: "📆 Próximos" },
    { href: "/sections/top", label: "⭐ Top" },
  ];

  // 🔹 Menú "Plataformas"
  const platformItems = [

    // 🕹️ Consolas Retro
    { href: "/sections/platforms/ps3", label: "🎮 PS3" },
    { href: "/sections/platforms/ps2", label: "🎮 PS2" },
    { href: "/sections/platforms/ps-vita", label: "🎮 PS Vita" },
    { href: "/sections/platforms/psp", label: "🎮 PSP" },
    { href: "/sections/platforms/xbox-360", label: "🎮 Xbox 360" },
    { href: "/sections/platforms/gamecube", label: "🎮 GameCube" },
    { href: "/sections/platforms/nintendo-64", label: "🎮 Nintendo 64" },
    { href: "/sections/platforms/wii", label: "🎮 Wii" },
    { href: "/sections/platforms/nintendo-ds", label: "🎮 Nintendo DS" },
    { href: "/sections/platforms/snes", label: "🎮 SNES" },
    { href: "/sections/platforms/nes", label: "🎮 NES" },
    { href: "/sections/platforms/game-boy", label: "🎮 Game Boy" },
    { href: "/sections/platforms/Game Boy Color", label: "🎮 Game Boy Color" },
    { href: "/sections/platforms/game-boy-advance", label: "🎮 Game Boy Advance" },
    { href: "/sections/platforms/sega-genesis", label: "🎮 Sega Genesis" },
    { href: "/sections/platforms/sega-saturn", label: "🎮 Sega Saturn" },
    { href: "/sections/platforms/dreamcast", label: "🎮 Dreamcast" },
    { href: "/sections/platforms/3do", label: "🎮 3DO" },
    { href: "/sections/platforms/neo-geo", label: "🎮 Neo Geo" },
    { href: "/sections/platforms/atari-2600", label: "🎮 Atari 2600" },

    // 🕹️ Consolas Modernas
    { href: "/sections/platforms/ps5", label: "🎮 PS5" },
    { href: "/sections/platforms/xbox-one", label: "🎮 Xbox One" },
    { href: "/sections/platforms/switch", label: "🎮 Switch" },
    { href: "/sections/platforms/ps4", label: "🎮 PS4" },

    // 📱 Móviles
    { href: "/sections/platforms/ios", label: "📱 iOS" },
    { href: "/sections/platforms/android", label: "📱 Android" },

    // 💻 Computadoras / Web
    { href: "/sections/platforms/pc", label: "🖥️ PC" },
    { href: "/sections/platforms/mac", label: "💻 macOS" },
    { href: "/sections/platforms/linux", label: "🐧 Linux" },
    { href: "/sections/platforms/web", label: "🌐 Web" },
    { href: "/sections/platforms/pc-98", label: "💻 PC-98" },
    { href: "/sections/platforms/commodore-amiga", label: "💾 Commodore/Amiga" },
    { href: "/sections/platforms/apple-ii", label: "🍎 Apple II" },

  ];

  return (
    <nav className={`dark:bg-gray-900 bg-opacity-90 shadow-md backdrop-blur-lg sticky top-0 z-50 transform transition-transform duration-300 p-2 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src='/images/logo.png' alt="Logo de Nampcom" width={200} height={200} className="hover:opacity-80 transition-opacity duration-300" priority  />
            </Link>
          </div> 

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Abrir menú">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú escritorio */}
          <div className="hidden md:flex space-x-6 items-center text-lg font-medium relative">
            {/* <input type="search" name="" id="" className="bg-blue-600 rounded p-2 w-full text-white"/> */}
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Noticias</NavLink>
            <NavLink className="text-sm font-medium hover:underline" href="/lanzamientos">Lanzamientos</NavLink>
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Análisis</NavLink>
            {/* <NavLink className="text-sm font-medium hover:underline" href="/noticias">Gameplays</NavLink>
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Top juegos</NavLink> */}
            <NavLink href="/retro">Retro</NavLink>
            {/* Las opciones de navegación, como "Retro", "Categorías" y "Plataformas", se pasan como props a un componente Dropdown. */}
            <Dropdown label="Categorías" items={categoryItems} />
            <Dropdown label="Plataformas" items={platformItems} />
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 text-center">
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Noticias</NavLink>
            <NavLink className="text-sm font-medium hover:underline" href="/lanzamientos">Lanzamientos</NavLink>
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Análisis</NavLink>
            {/* <input type="search" name="" id="" className="bg-blue-600 rounded p-2 w-full text-white"/>
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Gameplays</NavLink>
            <NavLink className="text-sm font-medium hover:underline" href="/noticias">Top juegos</NavLink> */}
            <NavLink href="/retro" onClick={toggleMenu}>Retro</NavLink>
            <Dropdown label="Categorías" items={categoryItems} />
            <Dropdown label="Plataformas" items={platformItems} />
          </div>
        )}
      </div>
    </nav>
  );
}
