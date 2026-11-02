import { useLang } from './LangContext';

const Hero = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <header className="py-16 md:py-20" id="top">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Text side */}
        <div className="reveal max-w-[680px]">
          <span className="inline-block font-mono text-[.76rem] font-medium tracking-[.06em] text-accent uppercase mb-2">
            {h.eyebrow}
          </span>
          <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] font-bold tracking-tight my-2">
            {h.name.first} <span className="text-accent">{h.name.last}</span>
          </h1>
          <p className="text-[clamp(1.1rem,1.8vw,1.3rem)] text-ink font-medium leading-[1.4] mb-3.5 max-w-[42ch] font-display">
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
      </div>
    </header>
  );
};

export default Hero;
