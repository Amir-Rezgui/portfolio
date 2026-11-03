import { useState } from 'react';
import { useLang } from './LangContext';

const EmailIcon = () => (
  <svg className="w-[1.1em] h-[1.1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-[1.1em] h-[1.1em]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-[1.1em] h-[1.1em]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5A11.5 11.5 0 008.4 22.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0012 .5z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-[1.1em] h-[1.1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
  </svg>
);

const iconMap = {
  email: EmailIcon,
  linkedin: LinkedInIcon,
  github: GithubIcon,
  cv: DownloadIcon,
};

export const Contact = () => {
  const { t, lang } = useLang();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('amir.rezgui.pro@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div
          className="rounded-[28px] px-6 py-12 sm:px-12 sm:py-16 text-center text-white relative overflow-hidden reveal"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent-deep) 0%, var(--color-accent) 100%)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Subtle decorative circles */}
          <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-white/10 pointer-events-none blur-2xl" />
          <div className="absolute -top-20 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none blur-xl" />

          <span className="inline-block font-mono text-[.78rem] font-semibold tracking-[.1em] uppercase text-white/90 mb-2">
            {c.eyebrow}
          </span>
          <h2 className="text-white text-[clamp(2rem,4.2vw,3rem)] font-bold tracking-tight mt-1 mb-4">
            {c.title}
          </h2>
          <p className="text-white/90 max-w-[50ch] mx-auto mb-8 text-[1.05rem] leading-relaxed">
            {c.paragraph || c.subtitle}
          </p>

          <div className="flex gap-3.5 justify-center flex-wrap relative z-10">
            {c.links.map((link, i) => {
              const Icon = iconMap[link.type];
              const isSolid = link.type === 'email';
              return (
                <a
                  key={i}
                  href={link.url}
                  target={link.type !== 'email' && link.type !== 'cv' ? '_blank' : undefined}
                  rel={link.type !== 'email' && link.type !== 'cv' ? 'noopener noreferrer' : undefined}
                  download={link.type === 'cv' ? true : undefined}
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-[.92rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                    isSolid
                      ? 'bg-white hover:bg-white/95'
                      : 'bg-white/15 border border-white/30 hover:bg-white/25 backdrop-blur-sm'
                  }`}
                  style={
                    isSolid
                      ? { backgroundColor: '#ffffff', color: 'var(--color-accent-deep)' }
                      : { color: '#ffffff' }
                  }
                >
                  {Icon && <Icon />}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Visible email address with 1-click copy */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 relative z-10 text-[.88rem]">
            <span className="text-white/80 font-mono text-[.78rem] uppercase tracking-wider">
              {lang === 'fr' ? 'Adresse e-mail :' : 'Direct email:'}
            </span>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-3.5 py-1.5 rounded-full">
              <span className="font-mono text-white text-[.86rem] select-all font-medium">
                amir.rezgui.pro@gmail.com
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-[.72rem] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-white text-[var(--color-accent-deep)] hover:bg-white/90 transition-all cursor-pointer shadow-sm active:scale-95"
                title={lang === 'fr' ? 'Copier dans le presse-papiers' : 'Copy to clipboard'}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <svg className="w-3 h-3 text-[var(--color-accent-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{lang === 'fr' ? 'Copié !' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3 text-[var(--color-accent-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                    <span>{lang === 'fr' ? 'Copier' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
