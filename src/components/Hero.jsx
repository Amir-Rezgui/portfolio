import { useLang } from './LangContext';

const Hero = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <header className="py-16 md:py-20" id="top">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 items-center">
          {/* Text side */}
          <div className="reveal max-w-[640px]">
            <span className="inline-block font-mono text-[.76rem] font-medium tracking-[.06em] text-accent uppercase mb-2">
              {h.eyebrow}
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight my-2">
              {h.name.first} <span className="text-accent">{h.name.last}</span>
            </h1>
            <p className="text-[clamp(1.08rem,1.75vw,1.25rem)] text-ink font-medium leading-[1.4] mb-3.5 max-w-[42ch] font-display">
              {h.tagline}
            </p>
            <p className="text-[.96rem] text-ink-soft max-w-[48ch] mb-6 leading-[1.6]">
              {h.paragraph}
            </p>

            {/* Facts box */}
            <div className="border border-border rounded-[12px] bg-surface px-4.5 py-3 mb-7 max-w-[460px] shadow-sm">
              {h.facts.map((fact, i) => (
                <div
                  key={i}
                  className={`flex gap-3 font-mono text-[.82rem] py-2 items-baseline ${
                    i < h.facts.length - 1 ? 'border-b border-dashed border-border' : ''
                  }`}
                >
                  <span className="text-accent min-w-[75px] font-semibold uppercase text-[.74rem] tracking-wider">
                    {fact.key}
                  </span>
                  <span className="text-ink-soft flex-1">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3.5 flex-wrap items-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[.92rem] px-5 py-2.5 rounded-full bg-accent text-on-accent cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  boxShadow: 'var(--shadow-card)',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-on-accent)',
                }}
              >
                {h.ctaPrimary}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[.92rem] px-5 py-2.5 rounded-full bg-transparent text-ink border border-border cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {h.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div className="hero-photo reveal max-w-[460px] lg:max-w-none mx-auto lg:mx-0 w-full relative">
            <div
              className="relative aspect-[4/3.8] sm:aspect-[4/3.2] lg:aspect-[4/3.8] rounded-[24px] overflow-hidden border border-border bg-surface"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <img
                src="/assets/hero.jpg"
                alt={h.photoAlt || `${h.name.first} ${h.name.last}`}
                className="w-full h-full object-cover object-center"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div
                className="hidden w-full h-full flex flex-col items-center justify-center gap-3 p-6"
                style={{
                  background: 'linear-gradient(145deg, var(--color-accent-soft), var(--color-bg-alt))',
                }}
              >
                <span className="font-mono text-3xl font-bold tracking-tight text-accent">
                  {h.monogram || 'AR'}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {h.photoFallback || 'Amir Rezgui'}
                </span>
              </div>
            </div>
            {/* Subtle decorative glow circle */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full pointer-events-none blur-2xl opacity-40 -z-10"
              style={{ background: 'var(--color-accent)' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
