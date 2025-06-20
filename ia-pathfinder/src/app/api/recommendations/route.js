// ia-pathfinder/src/app/api/recommendations/route.js
import { NextResponse } from 'next/server';
import OpenAI from 'openai'; // Import OpenAI library

// --- OpenAI Client Initialization ---
// The real OpenAI client would be initialized here.
// For production, ensure OPENAI_API_KEY is set in your environment variables.
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// --- Mock OpenAI API Call ---
// This function is used for testing and development without a real API key.
// COMMENT OUT or REMOVE this function and UNCOMMENT the real OpenAI call below for production.
async function mockOpenAICall(prompt) {
  console.log("--- USING MOCK OPENAI CALL ---");
  console.log("Received prompt for OpenAI (mock):", prompt.substring(0, 500) + "..."); // Log a snippet

  await new Promise(resolve => setTimeout(resolve, 500)); // Shorter delay for mock

  let responseData;
  const lowerCasePrompt = prompt.toLowerCase();

  // Profile 1: Tech Student / Developer
  if (lowerCasePrompt.includes("estudiante") || lowerCasePrompt.includes("software") || lowerCasePrompt.includes("desarrollo")) {
    responseData = {
      perfil: "Estudiante de Tecnología / Desarrollador Junior con IA",
      recomendaciones: [
        { nombre: "GitHub Copilot", proposito: "Asistente de codificación IA para autocompletar y sugerir código.", beneficio: "Acelera el desarrollo, aprende nuevas sintaxis y reduce errores comunes." },
        { nombre: "Tabnine", proposito: "Otro asistente de código IA, compatible con más lenguajes y editores.", beneficio: "Mejora la velocidad de codificación y ayuda a mantener la consistencia del código." },
        { nombre: "Figstack", proposito: "Herramienta para entender y documentar código usando IA.", beneficio: "Facilita la comprensión de bases de código complejas y la generación de documentación." }
      ],
      plan: [
        "Semana 1: Instala GitHub Copilot o Tabnine en tu editor. Úsalo para un proyecto pequeño o ejercicios de clase.",
        "Semana 2: Explora Figstack para analizar un fragmento de código que te resulte confuso. Intenta generar explicaciones.",
        "Semana 3: Dedica tiempo a configurar snippets personalizados o aprender atajos de tu asistente de código elegido."
      ]
    };
  }
  // Profile 2: Marketing Professional
  else if (lowerCasePrompt.includes("marketing") || lowerCasePrompt.includes("campañas") || lowerCasePrompt.includes("redes sociales")) {
    responseData = {
      perfil: "Profesional de Marketing Digital con IA",
      recomendaciones: [
        { nombre: "Copy.ai / Jasper", proposito: "Generación de textos para anuncios, emails, blogs y redes sociales.", beneficio: "Supera el bloqueo creativo, produce múltiples versiones de copy y ahorra tiempo." },
        { nombre: "Canva Magic Design", proposito: "Creación rápida de diseños para redes sociales y material de marketing usando IA.", beneficio: "Genera visuales atractivos sin ser diseñador profesional, adaptados a diferentes plataformas." },
        { nombre: "Surfer SEO / MarketMuse", proposito: "Optimización de contenido para SEO basada en IA, análisis de keywords y competidores.", beneficio: "Mejora el ranking en buscadores y asegura que tu contenido sea relevante y completo." }
      ],
      plan: [
        "Semana 1: Prueba Copy.ai o Jasper para generar 3-5 variantes de un post para redes sociales o un email corto.",
        "Semana 2: Utiliza Canva Magic Design para crear las imágenes para esos posts o una cabecera para el email.",
        "Semana 3: Elige un artículo de tu blog y analízalo con Surfer SEO (o su versión gratuita) para identificar mejoras."
      ]
    };
  }
  // Profile 3: Creative Freelancer / Designer
  else if (lowerCasePrompt.includes("diseño") || lowerCasePrompt.includes("freelance") || lowerCasePrompt.includes("creativo")) {
    responseData = {
      perfil: "Freelancer Creativo / Diseñador con IA",
      recomendaciones: [
        { nombre: "Midjourney / Stable Diffusion", proposito: "Generación de imágenes únicas y arte conceptual a partir de prompts de texto.", beneficio: "Crea visuales originales, explora estilos artísticos y genera inspiración para proyectos." },
        { nombre: "Adobe Sensei (en Photoshop/Illustrator)", proposito: "Funciones IA integradas para selección inteligente, relleno generativo, etc.", beneficio: "Optimiza flujos de trabajo de diseño, ahorra tiempo en tareas repetitivas y expande posibilidades creativas." },
        { nombre: "Khroma / Colormind", proposito: "Generación de paletas de colores con IA.", beneficio: "Descubre combinaciones de colores armónicas y accesibles rápidamente." }
      ],
      plan: [
        "Semana 1: Experimenta con Midjourney o Stable Diffusion (puedes usar versiones web gratuitas) para generar 5 imágenes basadas en un concepto.",
        "Semana 2: Si usas Adobe CC, explora 2-3 funciones de Sensei que no hayas usado antes (ej. Relleno Generativo en Photoshop).",
        "Semana 3: Utiliza Khroma o Colormind para generar 3 paletas de colores para un proyecto personal o ficticio."
      ]
    };
  }
  // Profile 4: Small Business Owner
  else if (lowerCasePrompt.includes("negocio") || lowerCasePrompt.includes("tienda") || lowerCasePrompt.includes("emprendedor")) {
    responseData = {
      perfil: "Dueño de Pequeño Negocio / Emprendedor con IA",
      recomendaciones: [
        { nombre: "Chatbot con IA (Tidio, ManyChat)", proposito: "Automatizar respuestas a preguntas frecuentes de clientes en tu web o redes sociales.", beneficio: "Mejora la atención al cliente 24/7, ahorra tiempo y captura leads." },
        { nombre: "Google Analytics con IA Insights", proposito: "Entender mejor el comportamiento de tus visitantes web y obtener sugerencias automáticas.", beneficio: "Toma decisiones basadas en datos sobre tu web y estrategias de marketing sin ser un experto en analítica." },
        { nombre: "Herramientas de Email Marketing con IA (Mailchimp AI, Brevo AI)", proposito: "Optimizar líneas de asunto, segmentar audiencias y predecir mejores horarios de envío.", beneficio: "Aumenta la efectividad de tus campañas de email y mejora la interacción con tus clientes." }
      ],
      plan: [
        "Semana 1: Configura un chatbot básico (Tidio ofrece plan gratuito) con 3-5 preguntas frecuentes de tu negocio.",
        "Semana 2: Revisa las 'Estadísticas inteligentes' en tu Google Analytics o activa las sugerencias si no lo has hecho.",
        "Semana 3: En tu próxima campaña de email, prueba las sugerencias de IA para la línea de asunto o el contenido que ofrezca tu plataforma."
      ]
    };
  }
  // Profile 5: HR / Recruiter
  else if (lowerCasePrompt.includes("recruiter") || lowerCasePrompt.includes("candidatos") || lowerCasePrompt.includes("contratación") || lowerCasePrompt.includes("talento") || lowerCasePrompt.includes("rrhh")) {
    responseData = {
      perfil: "Profesional de RRHH / Reclutador con IA",
      recomendaciones: [
        { nombre: "LinkedIn Recruiter con IA", proposito: "Identificar candidatos pasivos y activos que coincidan mejor con los perfiles de puesto.", beneficio: "Amplía tu pool de talento y reduce el tiempo de búsqueda de candidatos cualificados." },
        { nombre: "Textio / Gender Decoder", proposito: "Analizar y optimizar descripciones de puesto para atraer a un pool de candidatos más diverso e inclusivo.", beneficio: "Mejora la calidad y diversidad de los aplicantes, y reduce sesgos inconscientes." },
        { nombre: "HireVue / Paradox AI", proposito: "Automatizar el agendamiento de entrevistas y realizar pre-screenings con chatbots.", beneficio: "Agiliza el proceso de selección, mejora la experiencia del candidato y libera tiempo del reclutador." }
      ],
      plan: [
        "Semana 1: Utiliza las funciones de búsqueda avanzada y sugerencias IA de LinkedIn Recruiter para una vacante activa.",
        "Semana 2: Pasa una de tus descripciones de puesto actuales por Textio (si hay demo) o Gender Decoder (gratuito) y analiza los resultados.",
        "Semana 3: Investiga demos de Paradox AI o chatbots similares para entender cómo podrían automatizar el agendamiento en tu contexto."
      ]
    };
  }
  // Default Profile
  else {
    responseData = {
      perfil: "Usuario General Explorando IA",
      recomendaciones: [
        { nombre: "ChatGPT / Gemini", proposito: "Asistente conversacional para una amplia gama de tareas: redacción, brainstorming, resumen, aprendizaje.", beneficio: "Acceso versátil a información y generación de texto, útil para múltiples necesidades." },
        { nombre: "Notion AI", proposito: "Integración de IA en la toma de notas y gestión de proyectos para resumir, generar ideas y organizar información.", beneficio: "Mejora la productividad personal y la organización de ideas y documentos." },
        { nombre: "Grammarly", proposito: "Asistente de escritura para mejorar gramática, estilo, tono y claridad en inglés.", beneficio: "Comunicaciones escritas más profesionales y efectivas." }
      ],
      plan: [
        "Semana 1: Usa ChatGPT o Gemini para preguntar sobre un tema que te interese o para ayudarte a redactar un email.",
        "Semana 2: Si usas Notion, explora las funciones de Notion AI (hay créditos gratuitos) para resumir una página o generar ideas.",
        "Semana 3: Instala Grammarly (extensión de navegador gratuita) y úsalo para revisar tus escritos en inglés durante la semana."
      ]
    };
  }

  return {
    choices: [
      {
        message: {
          role: "assistant",
          content: JSON.stringify(mockResponse),
        },
      },
    ],
  };
}
// --- End of Mock OpenAI ---

export async function POST(request) {
  try {
    const requestBody = await request.json();
    console.log('Received data in API:', requestBody);

    if (!requestBody || Object.keys(requestBody).length === 0) {
      return NextResponse.json({ message: 'No data provided in request body.' }, { status: 400 });
    }

    // Construct the prompt for OpenAI
    const { rol, objetivoIA, tareas, herramientasActuales, comodidad, idioma } = requestBody;
    const prompt = `
      Eres un asistente experto en herramientas de IA y productividad. Basado en la siguiente información del usuario, genera un perfil, 3 recomendaciones de herramientas de IA y un plan de implementación semanal de 3 pasos.
      El output DEBE SER UN OBJETO JSON VÁLIDO con la siguiente estructura:
      {
        "perfil": "string", // Describe brevemente el perfil del usuario enfocado a IA.
        "recomendaciones": [ // Exactamente 3 recomendaciones.
          { "nombre": "string", "proposito": "string", "beneficio": "string" },
          { "nombre": "string", "proposito": "string", "beneficio": "string" },
          { "nombre": "string", "proposito": "string", "beneficio": "string" }
        ],
        "plan": [ // Exactamente 3 pasos.
          "string (paso 1)",
          "string (paso 2)",
          "string (paso 3)"
        ]
      }

      Información del usuario:
      - Rol Actual: ${rol || 'No especificado'}
      - Objetivo con IA: ${objetivoIA || 'No especificado'}
      - Tareas que consumen tiempo: ${tareas || 'No especificado'}
      - Herramientas actuales: ${herramientasActuales || 'No especificado'}
      - Comodidad con nuevas herramientas (1-5): ${comodidad || 'No especificado'}
      - Idioma de preferencia para herramientas: ${idioma || 'No especificado'}

      Asegúrate de que el JSON sea sintácticamente correcto y esté listo para ser parseado.
      No incluyas ninguna explicación adicional fuera del objeto JSON.
    `;

    // Call OpenAI API (or its mock)

    // --- REAL OPENAI API CALL (Commented out for mock usage) ---
    /*
    console.log("--- ATTEMPTING REAL OPENAI CALL ---");
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not set. Falling back to mock or error.");
      // In a real scenario without a key, you might throw an error or explicitly call mock.
      // For this example, let's assume if this block is uncommented, the key IS expected.
      return NextResponse.json({ message: 'OPENAI_API_KEY is not configured on the server.' }, { status: 500 });
    }
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // Instantiate client here
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Or your preferred model like "gpt-3.5-turbo"
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });
    const aiResponseContent = completion.choices[0].message.content;
    */
    // --- END OF REAL OPENAI API CALL ---

    // --- MOCK API CALL (Active for development/testing) ---
    // COMMENT OUT this section when using the real OpenAI API call above.
    const mockCompletion = await mockOpenAICall(prompt);
    const aiResponseContent = mockCompletion.choices[0].message.content;
    // --- END OF MOCK API CALL ---

    if (!aiResponseContent) {
      return NextResponse.json({ message: 'No content received from AI model (mock or real).' }, { status: 500 });
    }

    let parsedAiResponse;
    try {
      parsedAiResponse = JSON.parse(aiResponseContent);
    } catch (parseError) {
      console.error('Error parsing AI response JSON:', parseError);
      console.error('Raw AI response content:', aiResponseContent);
      return NextResponse.json({ message: 'Invalid JSON response from AI model.', error: parseError.message, rawResponse: aiResponseContent }, { status: 500 });
    }

    // Basic validation of the parsed AI response structure
    if (!parsedAiResponse.perfil || !parsedAiResponse.recomendaciones || !parsedAiResponse.plan ||
        parsedAiResponse.recomendaciones.length !== 3 || parsedAiResponse.plan.length !== 3) {
      console.error('AI response structure validation failed. Response:', parsedAiResponse);
      return NextResponse.json({ message: 'AI response structure is invalid.', data: parsedAiResponse }, { status: 500 });
    }

    return NextResponse.json(parsedAiResponse, { status: 200 });

  } catch (error) {
    console.error('Error processing API request:', error);
    if (error instanceof SyntaxError) { // Handle JSON parsing errors
      return NextResponse.json({ message: 'Invalid JSON in request body.', error: error.message }, { status: 400 });
    }
    // Check if it's an error from the (mocked) OpenAI call simulation if needed
    // For now, any other error is treated as a generic internal server error.
    return NextResponse.json({ message: 'Internal Server Error while processing AI request.', error: error.message }, { status: 500 });
  }
}

// Optional: Handler for GET or other methods
export async function GET() {
  return NextResponse.json({ message: 'Method GET Not Allowed on /api/recommendations. Use POST.' }, { status: 405 });
}
