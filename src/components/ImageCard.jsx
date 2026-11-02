import React from 'react';

export const ImageCard = ({ title, years, role, description, category, imageSrc, fallbackIcon }) => {
  return (
    <div className="bg-surface border border-border rounded-[16px] overflow-hidden shadow-sm transition-all duration-200 hover:border-accent hover:-translate-y-1 flex flex-col justify-between">
      {imageSrc ? (
        <div className="relative aspect-[16/10] bg-bg-alt overflow-hidden border-b border-border">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fb = e.currentTarget.nextElementSibling;
              if (fb) fb.classList.remove('hidden');
            }}
          />
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2 hidden p-4"
            style={{
              background: 'linear-gradient(145deg, var(--color-accent-soft), var(--color-bg-alt))',
              color: 'var(--color-accent)',
            }}
          >
            <span className="font-mono text-xl font-bold tracking-tight">{fallbackIcon || 'AR'}</span>
            <span className="font-mono text-[.7rem] uppercase tracking-wider text-ink-faint">{category || 'Activity'}</span>
          </div>
        </div>
      ) : null}

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-[.72rem] font-semibold text-accent uppercase tracking-wider">
              {category || 'Community'}
            </span>
            <span className="font-mono text-[.72rem] text-ink-faint font-medium">
              {years}
            </span>
          </div>
          <h3 className="font-display text-[1.08rem] font-bold text-ink mb-1">
            {title}
          </h3>
          <div className="text-[.85rem] font-semibold text-accent mb-2.5">
            {role}
          </div>
          <p
            className="text-[.88rem] text-ink-soft leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

