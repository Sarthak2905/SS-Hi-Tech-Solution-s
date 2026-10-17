import { cn } from '../utils/cn.js';

const tones = {
    dark: 'border-ink-700 bg-ink-900',
    light: 'border-ink-950/10 bg-white text-ink-950',
    black: 'border-black bg-black text-paper', // on lime sections
};

export default function Card({ tone = 'dark', interactive = false, className, children, ...props }) {
    return (
        <div
            className={cn(
                'rounded-xl border p-6',
                tones[tone],
                interactive && 'transition duration-200 hover:-translate-y-0.5 hover:border-accent/70',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}