// 📄 /app/aviso-legal/page.jsx o /pages/aviso-legal.jsx

export default function AvisoLegalPage() {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Aviso Legal</h1>
  
        <p className="mb-4">
          <strong>NamCom Generations</strong> es un sitio web dedicado a la divulgación de información sobre videojuegos. La información, imágenes y datos mostrados en este sitio provienen de fuentes externas, en especial de la plataforma{' '}
          <a
            href="https://rawg.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            RAWG.io
          </a>{' '}
          mediante su API pública.
        </p>
  
        <p className="mb-4">
          Todo el contenido (nombres, logotipos, imágenes, descripciones) relacionado con videojuegos pertenece a sus respectivos desarrolladores, editores y propietarios legales. Este sitio no reclama derechos de autor sobre dicho contenido.
        </p>
  
        <p className="mb-4">
          El uso de este contenido tiene fines exclusivamente informativos y educativos. Si algún propietario considera que su contenido no debe estar expuesto aquí, puede contactarnos y será retirado inmediatamente.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Uso de la API de RAWG</h2>
        <p className="mb-4">
          Este sitio utiliza la API pública de RAWG para obtener y mostrar información sobre videojuegos. Se cumple con los requisitos de atribución y no se redistribuye el contenido fuera del entorno de esta web.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Publicidad y Monetización</h2>
        <p className="mb-4">
          Este sitio puede contener enlaces de afiliación, anuncios o formas de monetización. Estos no están relacionados directamente con RAWG ni con los desarrolladores de los juegos mostrados.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
        <p className="mb-4">
          Para cualquier duda o reclamo relacionado con contenido mostrado en esta web, puedes contactarnos a través del correo electrónico que aparece en la sección de contacto.
        </p>
      </main>
    );
  }
  