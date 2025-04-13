import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {new Date().getFullYear()} <span className=''> NampCom </span> Blog de Videojuegos. Todos los derechos reservados.
    </footer>
  );
}

