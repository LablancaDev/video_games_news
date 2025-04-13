'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 60) {
        setShowNavbar(false); // scroll hacia abajo → ocultar
      } else {
        setShowNavbar(true); // scroll hacia arriba → mostrar
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black bg-opacity-90 shadow-md backdrop-blur-lg sticky top-0 z-50 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo de Nampcom"
                width={200}
                height={200}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links en escritorio */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <NavLink href="/news">Noticias</NavLink>
            <NavLink href="/about">Acerca de</NavLink>
            <NavLink href="/novedades">Novedades</NavLink>
            <NavLink href="/novedades">Retro</NavLink>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 text-center">
            <NavLink href="/news" onClick={toggleMenu}>Noticias</NavLink>
            <NavLink href="/about" onClick={toggleMenu}>Acerca de</NavLink>
            <NavLink href="/novedades" onClick={toggleMenu}>Novedades</NavLink>
            <NavLink href="/retro" onClick={toggleMenu}>Retro</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

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
