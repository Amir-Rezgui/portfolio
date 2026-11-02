import { useLang } from './LangContext';

export const Footer = () => {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="py-10 border-t border-border text-center text-ink-faint font-mono text-[.82rem] tracking-wide">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>{typeof f === 'string' ? f : f.text}</span>
        <a
          href="mailto:amir.rezgui.pro@gmail.com"
          className="text-ink-soft hover:text-accent transition-colors font-medium"
        >
          amir.rezgui.pro@gmail.com
        </a>
        <a
          href="#top"
          className="text-accent hover:underline flex items-center gap-1.5 transition-colors font-medium"
        >
          <span>{typeof f === 'string' ? 'Retour en haut' : f.backToTop}</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5m-7 7l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
