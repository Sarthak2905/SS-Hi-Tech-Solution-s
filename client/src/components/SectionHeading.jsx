import { cn } from '../utils/cn.js';

const eyebrowTone = { dark: 'text-accent', light: 'text-ink-600', lime: 'text-black/70' };
const descTone = { dark: 'text-paper-muted', light: 'text-ink-700', lime: 'text-black/75' };

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
    tone = 'dark',
    as: Tag = 'h2',
    className,
}) {
    const centered = align === 'center';
    return (
        <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
            {eyebrow && (
                <p className={cn('mb-3 flex items-center gap-2 text-sm font-semibold', centered && 'justify-center', eyebrowTone[tone])}>
                    <span className={cn('h-1.5 w-1.5 rounded-full', tone === 'lime' ? 'bg-black' : 'bg-accent')} aria-hidden="true" />
                    {eyebrow}
                </p>
            )}
            <Tag className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-5xl">{title}</Tag>
            {description && <p className={cn('mt-4 text-lg', descTone[tone])}>{description}</p>}
        </div>
    );
}