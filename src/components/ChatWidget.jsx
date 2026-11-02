import { useState, useRef, useEffect } from 'react';
import { useLang } from './LangContext';

const SparkleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const ChatWidget = () => {
  const { t, lang } = useLang();
  const c = t.chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize or reset welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        text: c.welcome,
        suggestions: c.suggestions,
      },
    ]);
  }, [lang, c.welcome, c.suggestions]);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, open]);

  // Client-side grounded fallback engine
  const getLocalAnswer = (query) => {
    const q = query.toLowerCase();
    const isFr = lang === 'fr';

    if (q.includes('projet') || q.includes('project') || q.includes('linkup') || q.includes('work')) {
      return isFr
        ? "Amir a développé plusieurs projets complets et innovants :\n\n• **LinkUp Recruiting** : Plateforme SaaS de recrutement par IA générative (React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Redis, BullMQ, Mistral AI, Ollama).\n• **Gestion des Urgences Hospitalières** : Coordination des urgences avec Spring Boot, Angular, Flutter, Camunda BPMN, Keycloak et PostgreSQL.\n• **Quiz Mobile Multijoueur** : Application Flutter avec génération de questions par IA et synchro temps réel Supabase.\n• **Profilage Démographique IoT Edge AI** : Inférence faciale sur Raspberry Pi avec MTCNN et Hugging Face Transformers.\n\nConsultez la section Projets pour tous les détails !"
        : "Amir has architected several high-impact projects:\n\n• **LinkUp Recruiting**: End-to-end GenAI recruitment platform (React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Redis, BullMQ, Mistral AI, Ollama).\n• **Hospital Emergency Coordination**: BPMN system using Spring Boot, Angular, Flutter, Camunda, Keycloak, and PostgreSQL.\n• **Real-Time AI Quiz Arena**: Flutter app featuring generative questions and live Supabase synchronization.\n• **Edge AI Demographic Profiler**: Raspberry Pi IoT computer vision running MTCNN and Hugging Face Transformers.\n\nCheck out the full metrics in the Projects section above!";
    }

    if (q.includes('stack') || q.includes('techno') || q.includes('tech') || q.includes('compétence') || q.includes('skill')) {
      return isFr
        ? "La pile technique d'Amir Rezgui s'articule autour de :\n\n• **Frontend** : React, TypeScript, Tailwind CSS, Angular, Flutter, JavaScript (ES6+)\n• **Backend** : Node.js, Express, Spring Boot, Microservices, APIs REST, Prisma, Redis, BullMQ\n• **IA & Data** : Mistral AI, Ollama, Prompt Engineering, PyTorch, Hugging Face, OpenCV\n• **Bases de données** : PostgreSQL, Supabase, MySQL, MongoDB, Firebase\n• **DevOps & Outils** : Docker, Git, GitHub, Camunda, Jira, Postman, Linux"
        : "Amir's technical toolkit comprises:\n\n• **Frontend**: React, TypeScript, Tailwind CSS, Angular, Flutter, JavaScript (ES6+)\n• **Backend**: Node.js, Express, Spring Boot, Microservices, REST APIs, Prisma, Redis, BullMQ\n• **AI & Data**: Mistral AI, Ollama, Prompt Engineering, PyTorch, Hugging Face, OpenCV\n• **Databases**: PostgreSQL, Supabase, MySQL, MongoDB, Firebase\n• **DevOps & Tools**: Docker, Git, GitHub, Camunda, Jira, Postman, Linux";
    }

    if (q.includes('stage') || q.includes('intern') || q.includes('disponible') || q.includes('available') || q.includes('recrut') || q.includes('hire') || q.includes('pfe') || q.includes('opportunit')) {
      return isFr
        ? "Absolument ! Amir est actuellement élève ingénieur à l'ISI (diplôme prévu en 2027) et recherche activement un stage de fin d'études (PFE) ou un poste junior en développement full-stack et ingénierie logicielle / IA. Vous pouvez le contacter directement par email (amir.rezgui.pro@gmail.com) ou sur LinkedIn !"
        : "Yes! Amir is an engineering student at ISI Ariana (graduating in 2027) and is actively open to graduation internship (PFE) and junior full-stack / AI engineering roles. Feel free to contact him at amir.rezgui.pro@gmail.com or via LinkedIn!";
    }

    if (q.includes('isi') || q.includes('etude') || q.includes('études') || q.includes('education') || q.includes('diplome') || q.includes('diplôme') || q.includes('formation')) {
      return isFr
        ? "Amir prépare son diplôme national d'ingénieur en développement logiciel à l'ISI (Institut Supérieur d'Informatique - Université de Tunis El Manar). Auparavant, il y a validé sa Licence en Génie Logiciel avec la Mention Bien."
        : "Amir is completing his Software Engineering Degree at the Higher Institute of Computer Science (ISI - UTM). He previously graduated with a Bachelor's Degree in Software Engineering with Honors (Bien).";
    }

    if (q.includes('linkup')) {
      return isFr
        ? "Chez Linkup Solutions (07/2026 - 08/2026), Amir a conçu et développé la plateforme SaaS Linkup Recruiting. Elle intègre l'analyse automatique de CV via LLM (Mistral AI / Ollama), l'évaluation intelligente des candidats, et des files d'attente asynchrones BullMQ / Redis avec un backend Node.js / Express / Prisma."
        : "At Linkup Solutions (07/2026 - 08/2026), Amir built Linkup Recruiting, a full-stack SaaS platform integrating LLM resume parsing (Mistral AI / Ollama), automated candidate scoring, and asynchronous BullMQ / Redis queues with Node.js, Express, and Prisma.";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('mail') || q.includes('linkedin') || q.includes('cv')) {
      return isFr
        ? "Vous pouvez joindre Amir directement :\n\n• **Email** : amir.rezgui.pro@gmail.com\n• **LinkedIn** : linkedin.com/in/amir-rezgui\n• **GitHub** : github.com/Amir-Rezgui\n• **CV** : Téléchargeable depuis la barre de navigation ou la section Contact !"
        : "You can connect with Amir directly:\n\n• **Email**: amir.rezgui.pro@gmail.com\n• **LinkedIn**: linkedin.com/in/amir-rezgui\n• **GitHub**: github.com/Amir-Rezgui\n• **CV**: Downloadable directly from the top navigation bar or Contact section!";
    }

    return isFr
      ? "Merci pour votre question ! Je suis l'assistant d'Amir Rezgui (génie logiciel, React, Node.js, Spring Boot, Flutter, IA générative). Posez-moi des questions sur ses réalisations, ses stages ou sa disponibilité !"
      : "Thank you for asking! I'm Amir Rezgui's AI assistant (Software Engineering, React, Node.js, Spring Boot, Flutter, GenAI). Feel free to ask about his builds, background, or availability!";
  };

  const handleSend = async (textToSend) => {
    const q = (textToSend || input).trim();
    if (!q) return;

    const newMessages = [...messages, { role: 'user', text: q }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Try calling serverless API route first
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, lang }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.reply) {
          setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
          setIsTyping(false);
          return;
        }
      }
    } catch {
      // Continue to local fallback
    }

    // Fallback to grounded local assistant
    setTimeout(() => {
      const answer = getLocalAnswer(q);
      setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-surface border border-border text-ink font-mono text-[.82rem] font-semibold transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent cursor-pointer shadow-md"
        style={{ boxShadow: 'var(--shadow-card)' }}
        aria-label={c.fabLabel}
        aria-expanded={open}
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-display font-bold text-accent text-xs tracking-tight bg-accent-soft px-1.5 py-0.5 rounded">
          {c.monogram}
        </span>
        <SparkleIcon />
        <span>{c.fabLabel}</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-[390px] max-w-[calc(100vw-2.5rem)] h-[540px] max-h-[calc(100vh-6.5rem)] bg-surface border border-border rounded-[22px] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          style={{ boxShadow: 'var(--shadow-lg)' }}
          role="dialog"
          aria-label={c.headerTitle}
        >
          {/* Header */}
          <div className="px-5 py-3.5 border-b border-border bg-bg-alt flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[.85rem] text-accent bg-accent-soft border border-accent/20">
                {c.monogram}
              </div>
              <div>
                <div className="font-display font-bold text-[.94rem] text-ink leading-tight">
                  {c.headerTitle}
                </div>
                <div className="font-mono text-[.68rem] text-accent flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {c.headerSub}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-ink-soft hover:text-ink hover:bg-surface border border-transparent hover:border-border transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-[16px] px-4 py-2.5 text-[.88rem] leading-[1.55] ${
                    m.role === 'user'
                      ? 'bg-accent text-on-accent rounded-br-[4px]'
                      : 'bg-bg-alt text-ink border border-border rounded-bl-[4px]'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {m.text}
                </div>

                {/* Suggested prompt chips */}
                {m.suggestions && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {m.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSend(sug)}
                        className="font-mono text-[.72rem] text-ink-soft bg-surface border border-border hover:border-accent hover:text-accent rounded-full px-3 py-1.5 transition-colors cursor-pointer text-left leading-normal"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="bg-bg-alt text-ink border border-border rounded-[16px] rounded-bl-[4px] px-4 py-2.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-border bg-bg-alt"
          >
            <div className="flex items-center gap-2 bg-surface border border-border rounded-full px-3.5 py-1.5 focus-within:border-accent transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={c.placeholder}
                className="flex-1 bg-transparent border-none outline-none text-[.88rem] text-ink placeholder:text-ink-faint font-sans"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-7 h-7 rounded-full bg-accent text-on-accent flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity cursor-pointer"
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
            <div className="text-[.68rem] text-ink-faint font-mono text-center mt-2 px-2 leading-tight">
              {c.disclaimer}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

