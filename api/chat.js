// Vercel Serverless Function: /api/chat
// Supports Mistral AI (default), Google Gemini, or OpenAI via env vars
// Key stays server-side only

// Simple in-memory rate limiting map for basic protection
const ipRequests = new Map();

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic IP rate limiting: max 20 requests per minute per IP
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  const now = Date.now();
  const clientWindow = ipRequests.get(clientIp) || { count: 0, reset: now + 60000 };

  if (now > clientWindow.reset) {
    clientWindow.count = 0;
    clientWindow.reset = now + 60000;
  }

  clientWindow.count += 1;
  ipRequests.set(clientIp, clientWindow);

  if (clientWindow.count > 25) {
    return res.status(429).json({
      error: 'Trop de requêtes. Veuillez patienter une minute.',
    });
  }

  try {
    const { messages = [], lang = 'fr' } = req.body || {};
    const lastUserMessage = messages.filter((m) => m.role === 'user').pop()?.text || '';

    // Grounded knowledge context strictly extracted from Amir Rezgui's verified profile
    const systemPrompt = `
Tu es l'assistant virtuel officiel du portfolio d'Amir Rezgui, élève ingénieur en génie logiciel à l'ISI (UTM).
Règles strictes et non négociables :
1. Tu réponds UNIQUEMENT et EXCLUSIVEMENT à partir des données vérifiées ci-dessous.
2. Si une information n'est pas mentionnée dans cette fiche, tu dis poliment que tu ne sais pas et tu invites à contacter Amir directement par email (amir.rezgui.pro@gmail.com). Tu n'inventes JAMAIS rien.
3. Langue de réponse : ${lang === 'en' ? 'Anglais (English)' : 'Français'}.
4. Reste professionnel, synthétique, humble et précis.

FICHE OFFICIELLE D'AMIR REZGUI :
- Identité : Amir Rezgui, élève ingénieur à l'Institut Supérieur d'Informatique (ISI - Université de Tunis El Manar).
- Localisation : Ariana, Tunisie.
- Disponibilité : Actuellement ouvert à un stage de fin d'études (PFE) et à un premier poste junior en développement Full-Stack & IA.
- Formation :
  * 09/2024 – 2027 : Cycle Ingénieur en Génie Logiciel, ISI Ariana.
  * 10/2021 – 06/2024 : Licence en Génie Logiciel, mention Bien, ISI Ariana.
- Expériences professionnelles :
  1. Linkup Solutions (07/2026 – 08/2026) : Stagiaire IA Générative & Web. Conception de Linkup Recruiting (SaaS de recrutement). Parsing de CV avec LLM (Mistral AI), scoring candidat et files asynchrones BullMQ/Redis. Stack : React, TypeScript, Node.js, Prisma, PostgreSQL, BullMQ, Mistral AI.
  2. Nextira (06/2025 – 08/2025) : Stagiaire d'été en Développement Web. Application de centre d'appels connectée à VICIdial pour superviser les flux d'appels. Requêtes SQL réécrites et optimisées. Stack : PHP, MySQL, REST API, jQuery, Ajax, VICIdial.
  3. Kromberg & Schubert (Kroschu) (02/2024 – 06/2024) : Stagiaire Développeur Mobile. Application mobile Flutter pour le suivi temps réel des workflows de fabrication industrielle. Stack : Flutter, Dart, Firebase, Cloud Firestore.
- Projets notables :
  1. LinkUp Recruiting (SaaS Recrutement & GenAI).
  2. Coordination des Urgences Hospitalières (Spring Boot, Angular, Flutter, Camunda BPMN, Keycloak OAuth2, PostgreSQL).
  3. Quiz Multijoueur en Temps Réel (Flutter, Supabase Realtime WebSockets, questions par IA).
  4. Profilage Démographique Edge AI (Raspberry Pi, MTCNN, Hugging Face Transformers, OpenCV, Firebase).
- Compétences techniques :
  * Frontend : React.js, TypeScript, JavaScript, Tailwind CSS, Angular, Flutter.
  * Backend : Node.js, Express.js, Spring Boot, Microservices, APIs REST, Prisma, Redis, BullMQ.
  * IA & Data : Mistral AI, Ollama, Prompt Engineering, PyTorch, Hugging Face, OpenCV.
  * Bases de données : PostgreSQL, Supabase, MySQL, MongoDB, Firebase.
  * DevOps : Git, GitHub, Docker, Camunda, Jira, Postman, Linux.
  * Langues : Arabe (natif), Français (avancé C1), Anglais (avancé C1).
- Contact :
  * Email : amir.rezgui.pro@gmail.com
  * LinkedIn : linkedin.com/in/amir-rezgui
  * GitHub : github.com/Amir-Rezgui
`;

    // 1. Try Mistral AI API (Configured default)
    if (process.env.MISTRAL_API_KEY) {
      const mistralRes = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'mistral-small-latest',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((m) => ({
              role: m.role === 'user' ? 'user' : 'assistant',
              content: m.text || m.content || '',
            })),
          ],
          temperature: 0.2,
          max_tokens: 450,
        }),
      });

      if (mistralRes.ok) {
        const data = await mistralRes.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply) return res.status(200).json({ reply });
      }
    }

    // 2. Try Google Gemini API
    if (process.env.GEMINI_API_KEY) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
      const geminiRes = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemPrompt}\n\nQuestion de l'utilisateur : ${lastUserMessage}` }],
            },
          ],
          generationConfig: { temperature: 0.2, maxOutputTokens: 450 },
        }),
      });

      if (geminiRes.ok) {
        const data = await geminiRes.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) return res.status(200).json({ reply });
      }
    }

    // 3. Try OpenAI API
    if (process.env.OPENAI_API_KEY) {
      const openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((m) => ({
              role: m.role === 'user' ? 'user' : 'assistant',
              content: m.text || m.content || '',
            })),
          ],
          temperature: 0.2,
          max_tokens: 450,
        }),
      });

      if (openAiRes.ok) {
        const data = await openAiRes.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply) return res.status(200).json({ reply });
      }
    }

    // 4. Grounded local fallback engine if no external API key is set
    const q = lastUserMessage.toLowerCase();
    const isEn = lang === 'en';

    let reply = '';
    if (q.includes('projet') || q.includes('project') || q.includes('marquant') || q.includes('notable')) {
      reply = isEn
        ? "Amir has architected several high-impact projects:\n\n• **LinkUp Recruiting**: SaaS recruitment platform featuring automated LLM CV parsing (Mistral AI), candidate scoring, and BullMQ/Redis queue pipelines.\n• **Hospital Emergency Coordination**: BPMN emergency dispatch system with Camunda, Spring Boot, Angular, and Keycloak.\n• **Real-Time Multiplayer Quiz**: Live mobile quiz with AI question generation and Supabase WebSockets.\n• **Edge AI Demographic Profiler**: Raspberry Pi vision telemetry with MTCNN and Hugging Face Transformers.\n\nExplore code and metrics in the Projects section above!"
        : "Amir a conçu plusieurs projets à fort impact :\n\n• **LinkUp Recruiting** : Plateforme SaaS de recrutement avec analyse de CV par LLM (Mistral AI), scoring automatique et files BullMQ/Redis.\n• **Coordination des Urgences Hospitalières** : Régulation des secours avec Spring Boot, Angular, Flutter, Camunda BPMN et Keycloak.\n• **Quiz Multijoueur en Temps Réel** : Application mobile avec questions générées par IA et latence sous 50ms via Supabase.\n• **Profilage Démographique Edge AI** : Dispositif IoT sur Raspberry Pi avec MTCNN et Hugging Face Transformers.\n\nRetrouvez le code et les métriques dans la section Projets ci-dessus !";
    } else if (q.includes('stack') || q.includes('techno') || q.includes('compétence') || q.includes('skill')) {
      reply = isEn
        ? "Amir's technical stack spans:\n\n• **Frontend**: React.js, TypeScript, JavaScript, Tailwind CSS, Angular, Flutter\n• **Backend**: Node.js, Express.js, Spring Boot, Microservices, REST APIs, Prisma, Redis, BullMQ\n• **AI & Data**: Mistral AI, Ollama, Prompt Engineering, PyTorch, Hugging Face, OpenCV\n• **Databases**: PostgreSQL, Supabase, MySQL, MongoDB, Firebase\n• **DevOps & Tools**: Git, GitHub, Docker, Camunda, Jira, Postman, Linux"
        : "La pile technique d'Amir comprend :\n\n• **Frontend** : React.js, TypeScript, JavaScript, Tailwind CSS, Angular, Flutter\n• **Backend** : Node.js, Express.js, Spring Boot, Microservices, APIs REST, Prisma, Redis, BullMQ\n• **IA & Données** : Mistral AI, Ollama, Prompt Engineering, PyTorch, Hugging Face, OpenCV\n• **Bases de données** : PostgreSQL, Supabase, MySQL, MongoDB, Firebase\n• **DevOps & Outils** : Git, GitHub, Docker, Camunda, Jira, Postman, Linux";
    } else if (q.includes('linkup')) {
      reply = isEn
        ? "At Linkup Solutions (Jul 2026 – Aug 2026), Amir built Linkup Recruiting, a full-stack SaaS platform integrating Mistral AI for automated CV parsing, structured candidate scoring, and an interactive recruiter copilot with BullMQ/Redis asynchronous background queues."
        : "Chez Linkup Solutions (Juil 2026 – Août 2026), Amir a conçu et développé Linkup Recruiting, une plateforme SaaS qui analyse les CV avec Mistral AI, extrait un profil structuré, score automatiquement les candidats et gère les traitements asynchrones avec BullMQ et Redis.";
    } else if (q.includes('stage') || q.includes('intern') || q.includes('pfe') || q.includes('disponible') || q.includes('available') || q.includes('recrut')) {
      reply = isEn
        ? "Yes! Amir is an engineering student at ISI (graduating in 2027) and is actively open to an end-of-studies internship (PFE) as well as junior full-stack & AI engineering roles. Feel free to contact him at amir.rezgui.pro@gmail.com or on LinkedIn!"
        : "Oui ! Amir est élève ingénieur à l'ISI (diplôme prévu en 2027) et recherche activement un stage de fin d'études (PFE) ainsi qu'un premier poste junior en développement full-stack & IA. N'hésitez pas à lui écrire à amir.rezgui.pro@gmail.com ou via LinkedIn !";
    } else {
      reply = isEn
        ? "Thank you for asking! I am Amir Rezgui's AI assistant. Ask me about his projects (LinkUp, Emergency System, IoT), his tech stack (React, Node.js, Spring Boot, Flutter, GenAI), or his availability for a PFE internship!"
        : "Merci pour votre question ! Je suis l'assistant d'Amir Rezgui. N'hésitez pas à me poser des questions sur ses projets (LinkUp, Urgences, IoT), ses compétences techniques ou sa disponibilité pour un stage PFE !";
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat error:', err);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
