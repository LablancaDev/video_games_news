//📂 Backend
// # Función para obtener noticias

import axios from "axios";

const API_KEY = "dc8efcead89be72234bc09c7f9ccf9a6304932b4"; // Reemplázalo con tu API Key real

export async function fetchNews() {
    try {
      const response = await axios.get(
        `https://www.gamespot.com/api/articles/`, {
          params: {
            api_key: API_KEY,
            format: "json",
            sort: "publish_date:desc", // 🔄 Ordenar noticias por fecha más reciente
            limit: 20, // Limita la cantidad si quieres
            filter: `publish_date:2024-01-01|${new Date().toISOString().split("T")[0]}` // Noticias desde enero 2024 hasta hoy
          }
        }
      );
  
      console.log("Noticias obtenidas correctamente:", response.data.results);
      return response.data.results;
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      return [];
    }
  }
  

