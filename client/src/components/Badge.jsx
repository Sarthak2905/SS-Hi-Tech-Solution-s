import { cn } from '../utils/cn.js';

const tones = {
    neutral: 'border-ink-600 text-paper-muted',
    accent: 'border-accent/40 bg-accent/10 text-accent',
    warning: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
};

export default function Badge({ tone = 'neutral', className, children }) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
                tones[tone],
                className
            )}
        >
            {children}
        </span>
    );
}