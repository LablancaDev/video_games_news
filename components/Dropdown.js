'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

//📄 componente <Dropdown /> reusable (LO PODRÉ UTILIZAR EN DIFERENTES PARTES DE LA WEB A PARTE DE EN EL HEADER)

export default function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);

  // 👇 Detectar clic fuera del dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-blue-400 transition-colors duration-300"
      >
        {label}
      </button>

      {open && (
        <div className="absolute top-full mt-2 bg-gray-800 shadow-md rounded-lg py-2 w-48 z-50">
          {items.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-200"
              onClick={closeDropdown}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
