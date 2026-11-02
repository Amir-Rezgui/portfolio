import { useLang } from './LangContext';
import ProjectCard from './ProjectCard';

export const ProjectsSection = () => {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-12 max-w-[68ch] reveal">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-[.82rem] text-accent-2 font-bold tracking-wider">{p.secnum}</span>
            <span className="font-mono text-[.76rem] font-semibold tracking-[.08em] text-accent uppercase">{p.eyebrow}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight text-ink">{p.title}</h2>
          <p className="text-ink-soft mt-3 text-[1.05rem] leading-relaxed">{p.subtitle}</p>
        </div>

        {/* Groups */}
        {p.groups.map((group, gi) => (
          <div key={gi} className="mb-14 last:mb-0">
            <div className="font-mono text-[.76rem] font-semibold tracking-[.12em] uppercase text-ink-faint mb-6 flex items-center gap-3 reveal">
              <span>{group.label}</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            {/* Grid: 2 columns desktop, 1 mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {group.items.map((project, pi) => (
                <div key={pi} className="reveal flex">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

