import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 p-4 text-center bg-white dark:bg-gray-900 transition-colors">
      <p>
        © {new Date().getFullYear()} <strong>NamCom Generations</strong>. Todos los derechos reservados.
      </p>
      <p>
        Imágenes e información de videojuegos proporcionadas por{' '}
        <a
          href="https://rawg.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          RAWG.io
        </a>
        .
      </p>
      <p>
        Todo el contenido pertenece a sus respectivos propietarios.{' '}
        <Link href="/aviso-legal" className="text-blue-600 hover:underline">
          Aviso legal
        </Link>
        .
      </p>
    </footer>
  );
}



/*

Sí, **ese footer es una muy buena práctica para reducir riesgos legales** si estás usando contenido de RAWG, 
especialmente imágenes y descripciones. Vamos a desglosarlo brevemente para asegurarnos:

---

### ✅ **Lo que estás haciendo bien:**
1. **Atribución clara a RAWG:**  
   ✔️ Indicas que la información e imágenes provienen de RAWG.  
   ✔️ Enlaces a su web oficial (`https://rawg.io`).  
   ✔️ Mencionas que el contenido pertenece a sus respectivos propietarios.

2. **No afirmas propiedad:**  
   ✔️ No dices que tú creaste las imágenes o la información, solo las estás mostrando.

3. **Sin uso comercial directo del contenido:**  
   ✔️ Mientras no vendas directamente las imágenes o las reutilices fuera del contexto de una web informativa 
   (como camisetas, NFTs, etc.), estás dentro de un uso razonable.

---

### ⚠️ **Pero hay algunas recomendaciones clave si vas a monetizar:**

1. **Consulta sus términos de uso:**  
   RAWG tiene una [API gratuita](https://rawg.io/apidocs) pero **requiere atribución**, y **el uso comercial puede tener restricciones**. 
   Aunque muchas webs la usan con anuncios, lo más seguro es:
   - Revisar sus términos aquí: https://rawg.io/apidocs#toc-terms-of-use
   - O contactarles si planeas monetizar fuerte (ads, suscripciones, productos).

2. **Evita hotlinking masivo:**  
   Aunque RAWG permite acceder a sus imágenes vía URL, lo ideal es:
   - **Cachéalas/localízalas** si tu tráfico crece, para evitar problemas de carga o bloqueos.

3. **No alteres marcas o contenido visual de juegos sin permiso:**  
   Usar imágenes está bien con atribución, pero redibujarlas, editarlas o combinarlas para branding propio **sí puede generar problemas** 
   con los estudios o distribuidores.

---

### ✅ ¿Puedes monetizar con anuncios tipo AdSense o afiliados?
Sí, **muchas webs lo hacen** mientras:
- No modifican imágenes.
- No venden contenido como propio.
- Muestran la atribución.
- Usan RAWG solo como fuente de datos, no como branding propio.

---

### 💡 Consejo adicional
Podrías incluso añadir una pequeña nota en tu política de privacidad o legal tipo:

> "*Esta web utiliza la API pública de RAWG para mostrar información sobre videojuegos. Todos los derechos de las imágenes y textos pertenecen a sus respectivos propietarios.*"

---

Si quieres, te ayudo a redactar esa parte legal también. ¿Tienes ya una página de términos y condiciones o aviso legal?

*/ 