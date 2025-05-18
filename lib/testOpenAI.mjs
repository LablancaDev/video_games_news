// ⚙️ test de prueba, SOLO PARA TEST DE CONEXION CON OPENAI para la traducción de textos, usa dotenv.
// ❌ Eliminar cuando funcione, este archivo es el BUENO // 📄 lib/gptRewrite.js no usa dotenv.
// 📄 /lib/testOpenAI.js 

import 'dotenv/config';
import fetch from 'node-fetch';

const API_KEY = process.env.OPENAI_API_KEY;

console.log('🔑 API Key:', API_KEY); // ← prueba si se imprime correctamente

async function testGPT() {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Dime un chiste sobre videojuegos.' }],
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      console.error('❌ Error de respuesta:', res.status, res.statusText);
      const error = await res.text();
      console.error(error);
      return;
    }

    const data = await res.json();
    console.log('✅ Respuesta de OpenAI:', data.choices[0].message.content);
  } catch (error) {
    console.error('🔥 Error de red o fetch:', error);
  }
}

testGPT();

//⚡ PROBAR EN TERMINAL: node lib/testOpenAI.mjs