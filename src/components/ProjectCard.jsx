import React from 'react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
    <path d="M12 .5A11.5 11.5 0 008.4 22.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0012 .5z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

export const ProjectCard = ({ project }) => {
  return (
    <article
      className="bg-surface border border-border rounded-[16px] p-5.5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md h-full"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <div>
        <span className="inline-block font-mono text-[.7rem] font-semibold text-accent tracking-[.05em] uppercase mb-1.5">
          {project.context}
        </span>
        <h3 className="text-[1.18rem] font-bold tracking-tight mb-2 text-ink">
          {project.title}
        </h3>
        <p className="text-[.91rem] text-ink-soft mb-3.5 leading-relaxed">
          {project.description}
        </p>

        {project.metric && (
          <div
            className="font-mono text-[.74rem] text-ink border-l-2 border-accent pl-3 py-1 mb-3.5 leading-relaxed bg-bg-alt/30 rounded-r"
            dangerouslySetInnerHTML={{ __html: project.metric }}
          />
        )}
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="font-mono text-[.68rem] text-ink-soft bg-bg-alt border border-border px-2 py-0.5 rounded-[6px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60 items-center">
          {project.links.map((link, i) =>
            link.type === 'private' ? (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 font-mono text-[.71rem] font-medium text-ink-faint border border-border px-3 py-1 rounded-full bg-bg-alt/40 cursor-default"
                title="Private / Proprietary"
              >
                <LockIcon />
                {link.label}
              </span>
            ) : (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[.71rem] font-semibold text-accent border border-border px-3.5 py-1 rounded-full transition-all duration-200 hover:border-accent hover:bg-accent-soft hover:-translate-y-0.5"
              >
                {link.type === 'github' ? <GithubIcon /> : <ExternalIcon />}
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
