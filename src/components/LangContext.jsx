import { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../content';

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'en' || saved === 'fr') return saved;
      return 'fr'; // FR default as requested
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-lang', lang);
      document.documentElement.lang = lang;
      if (content[lang]?.meta?.title) {
        document.title = content[lang].meta.title;
      }
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta && content[lang]?.meta?.description) {
        descMeta.setAttribute('content', content[lang].meta.description);
      }
    } catch {
      // ignore
    }
  }, [lang]);

  const t = content[lang];
  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LangContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return ctx;
};
