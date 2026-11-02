import { useLang } from './LangContext';

export const Skills = () => {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-[68ch] reveal">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-[.82rem] text-accent-2 font-bold tracking-wider">{s.secnum}</span>
            <span className="font-mono text-[.76rem] font-semibold tracking-[.08em] text-accent uppercase">{s.eyebrow}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight text-ink">{s.title}</h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {s.groups.map((group, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-[16px] p-6 shadow-sm transition-all duration-200 hover:border-accent hover:-translate-y-0.5"
            >
              <h3 className="font-mono text-[.76rem] font-bold tracking-[.1em] uppercase text-accent mb-4 flex items-center justify-between">
                <span>{group.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-mono text-[.74rem] text-ink-soft bg-bg-alt border border-border px-2.5 py-1 rounded-[8px] font-medium transition-colors hover:text-ink hover:border-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages */}
        <div className="mt-8 p-4.5 rounded-[12px] bg-surface border border-border reveal">
          <p className="font-mono text-[.84rem] text-ink-soft leading-relaxed">
            {s.languages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
