// 📄 Este archivo se encarga de transformar cualquier texto de RAWG (o de otra fuente) para que sea original y legalmente más seguro para monetizar.
// 📄 lib/gptRewriteServer.js
// ← Endpoint que reescribe texto usando OpenAI ✅
const API_KEY = process.env.OPENAI_API_KEY;

// función que usa la API de OpenAI para transformar el texto.
export async function rewriteTextWithGPT(originalText) {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Eres un redactor profesional de videojuegos. Reescribe este texto para que sea original, entretenido y libre de problemas de copyright. Evita repetir frases textuales del original y usa un estilo claro y natural, si el texto está en inglés traducelo al Español.',
          },
          {
            role: 'user',
            content: `Reescribe este texto: ${originalText}`,
          }
        ],
        temperature: 0.7,
      })
    });

    if (!res.ok) throw new Error('Error en la llamada a OpenAI');

    const data = await res.json();
    return data.choices[0].message.content.trim();
  } catch (err) {
    console.error('GPT ERROR:', err);
    return originalText;
  }
}
