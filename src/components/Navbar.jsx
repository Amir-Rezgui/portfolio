import { useState, useEffect } from 'react';
import { useLang } from './LangContext';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-[border-color,background-color] duration-300 ${
        scrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent'
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'color-mix(in srgb, var(--color-bg) 84%, transparent)',
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#top"
          className="font-mono font-semibold text-base tracking-tight hover:opacity-85 transition-opacity"
          aria-label="Amir Rezgui Home"
        >
          {t.nav.brand.first}
          <span className="text-accent font-bold">{t.nav.brand.last}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-mono text-[.82rem] text-ink-soft font-medium transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2.5 items-center">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-ink font-mono font-semibold text-[.74rem] tracking-wide cursor-pointer transition-colors duration-200 hover:text-accent hover:border-accent"
            aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
            title={lang === 'en' ? 'Version française' : 'English version'}
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-ink cursor-pointer transition-colors duration-200 hover:text-accent hover:border-accent"
            aria-label="Toggle theme"
            title="Toggle light / dark mode"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M3 12h1M20 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </button>

          {/* CV Button */}
          <a
            href={t.nav.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 font-sans font-semibold text-[.88rem] px-4 py-2 rounded-full bg-accent text-on-accent cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              boxShadow: 'var(--shadow-card)',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-on-accent)',
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            <span className="hidden sm:inline">{t.nav.cvLabel}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-ink cursor-pointer"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-2"
          style={{ background: 'var(--color-bg-alt)' }}
        >
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[.9rem] text-ink-soft font-medium py-2 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
