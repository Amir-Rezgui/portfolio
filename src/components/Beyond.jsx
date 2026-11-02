import { useLang } from './LangContext';
import ImageCard from './ImageCard';

export const Beyond = () => {
  const { t } = useLang();
  const b = t.beyond;

  return (
    <section id="beyond" className="py-16 md:py-24" style={{ background: 'var(--color-bg-alt)' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-[68ch] reveal">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-[.82rem] text-accent-2 font-bold tracking-wider">{b.secnum}</span>
            <span className="font-mono text-[.76rem] font-semibold tracking-[.08em] text-accent uppercase">{b.eyebrow}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight text-ink">{b.title}</h2>
        </div>

        {/* Narrative + Lifestyle photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16">
          <div className="reveal space-y-4">
            {b.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-soft text-[.96rem] leading-[1.65]">
                {p}
              </p>
            ))}
          </div>

          <div className="reveal max-w-[460px] md:max-w-none mx-auto md:mx-0 w-full">
            <div
              className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-border bg-surface"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <picture>
                <source srcSet="/assets/beyond.webp" type="image/webp" />
                <img
                  src="/assets/beyond.jpg"
                  alt="Beyond the code - Lifestyle and inspiration"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 40%' }}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.closest('.rounded-\\[20px\\]')?.querySelector('.fallback-frame');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
              </picture>

              <div
                className="fallback-frame w-full h-full flex flex-col items-center justify-center gap-3 hidden p-6 text-center absolute inset-0"
                style={{
                  background: 'linear-gradient(150deg, var(--color-accent-soft), var(--color-bg-alt))',
                  color: 'var(--color-accent)',
                }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center font-display font-bold text-2xl bg-surface">
                  AR
                </div>
                <span className="font-mono text-[.75rem] text-ink-faint tracking-wider uppercase">
                  Community & Innovation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Community */}
        <div className="mb-14">
          <div className="font-mono text-[.76rem] font-semibold tracking-[.12em] uppercase text-ink-faint mb-6 flex items-center gap-3 reveal">
            <span>{b.leadershipLabel}</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
            {b.leadershipItems.map((item, i) => (
              <ImageCard
                key={i}
                title={item.title}
                years={item.years}
                role={item.role}
                description={item.description}
                category={item.category}
                fallbackIcon={item.category?.substring(0, 2).toUpperCase() || 'AR'}
              />
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div>
          <div className="font-mono text-[.76rem] font-semibold tracking-[.12em] uppercase text-ink-faint mb-6 flex items-center gap-3 reveal">
            <span>{b.certificationsLabel}</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
            {b.certificationsItems.map((cert, i) => {
              const CardTag = cert.url ? 'a' : 'div';
              return (
                <CardTag
                  key={i}
                  href={cert.url}
                  target={cert.url ? '_blank' : undefined}
                  rel={cert.url ? 'noopener noreferrer' : undefined}
                  className="flex gap-4 bg-surface border border-border rounded-[14px] p-4.5 transition-all duration-200 hover:border-accent hover:-translate-y-0.5 shadow-sm group"
                >
                  <div
                    className="w-12 h-12 rounded-[10px] flex-none flex items-center justify-center font-mono font-bold text-[.76rem] tracking-wider"
                    style={{
                      background: 'linear-gradient(145deg, var(--color-accent-soft), var(--color-bg-alt))',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {cert.badge || cert.role.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-0.5">
                      <h3 className="font-display text-[.98rem] font-bold text-ink truncate group-hover:text-accent transition-colors flex items-center gap-1.5">
                        <span>{cert.title}</span>
                        {cert.url && (
                          <svg
                            className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-none"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        )}
                      </h3>
                      <span className="font-mono text-[.68rem] text-ink-faint whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>
                    <div className="text-accent text-[.82rem] font-semibold mb-1">
                      {cert.role}
                    </div>
                    <p className="text-[.84rem] text-ink-soft leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beyond;
