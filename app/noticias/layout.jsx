// 📄 Este archivo define el layout para la ruta /noticias y sus subpáginas.
// 📄 noticias/layout.jsx

/*Este archivo no tiene "use client", así que puede exportar metadata sin problema.
Al colocar metadata aquí, Next.js aplicará esa información a todas las rutas dentro de /noticias, incluyendo noticias/page.jsx.
es muy importante para el posicionamiento SEO*/ 

// Exportamos metadata para que Next.js genere dinámicamente el <head> de esta sección.
export const metadata = {
    title: "Noticias de Videojuegos | Nampcom", // Título que aparecerá en la pestaña del navegador
    description: "Últimas noticias sobre videojuegos, consolas y la industria del gaming.", // Meta descripción para SEO
  };
  
  // Esta es la función del layout. Next.js usará este componente como contenedor de las páginas dentro de /noticias
  export default function NoticiasLayout({ children }) {
    // 🧒 'children' representa el contenido de la página que se está mostrando dentro de este layout.
    // Por ejemplo, cuando se carga /noticias/page.jsx, su contenido se renderiza aquí donde aparece {children}.
    return <>{children}</>; // Devolvemos ese contenido tal cual, sin envolverlo en nada adicional.
  }
  
  