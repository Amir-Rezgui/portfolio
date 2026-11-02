import { useLang } from './LangContext';

export const Timeline = () => {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="py-16 md:py-24" style={{ background: 'var(--color-bg-alt)' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-[68ch] reveal">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-[.82rem] text-accent-2 font-bold tracking-wider">{e.secnum}</span>
            <span className="font-mono text-[.76rem] font-semibold tracking-[.08em] text-accent uppercase">{e.eyebrow}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight text-ink">{e.title}</h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-border ml-2.5 md:ml-4 pl-6 md:pl-8 space-y-10">
          {e.items.map((item, i) => (
            <div key={i} className="relative reveal">
              {/* Dot on the timeline */}
              <div
                className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-3 border-accent transition-transform duration-200 hover:scale-125"
                style={{ boxShadow: '0 0 0 4px var(--color-bg-alt)' }}
              />

              <div className="bg-surface border border-border rounded-[16px] p-6 shadow-sm transition-all duration-200 hover:border-accent">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-display text-[1.2rem] font-bold text-ink">{item.role}</h3>
                    <div className="text-accent font-semibold text-[.98rem]">{item.org}</div>
                  </div>
                  <span className="font-mono text-[.76rem] font-medium text-ink-faint bg-bg-alt px-2.5 py-1 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>

                {item.description && (
                  <p
                    className="text-ink-soft mt-2.5 text-[.91rem] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/60">
                    {item.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="font-mono text-[.68rem] text-ink-soft bg-bg-alt border border-border px-2 py-0.5 rounded-[6px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

