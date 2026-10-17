import { Link } from 'react-router-dom';
import { cn } from '../utils/cn.js';
import ArrowBadge from './ArrowBadge.jsx';

const base =
    'group inline-flex items-center justify-center gap-3 rounded-md font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
    primary: 'bg-accent text-black hover:bg-accent-strong',
    secondary: 'border border-white/70 text-paper hover:bg-white hover:text-black',
    ghost: 'text-paper hover:text-accent',
    dark: 'bg-black text-white hover:bg-ink-800', // on lime/light sections
    outlineDark: 'border border-black/70 text-black hover:bg-black hover:text-white', // on lime/light sections
};

const badgeStyles = {
    primary: 'bg-black text-white',
    secondary: 'bg-white text-black group-hover:bg-black group-hover:text-white',
    ghost: 'bg-accent text-black',
    dark: 'bg-accent text-black',
    outlineDark: 'bg-black text-white group-hover:bg-accent group-hover:text-black',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
};

export default function Button({
    to,
    href,
    variant = 'primary',
    size = 'md',
    icon = false,
    className,
    children,
    ...props
}) {
    const classes = cn(base, variants[variant], sizes[size], icon && 'pr-3.5', className);
    const content = (
        <>
            {children}
            {icon && <ArrowBadge className={badgeStyles[variant]} />}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {content}
            </Link>
        );
    }
    if (href) {
        const external = /^https?:\/\//.test(href);
        return (
            <a
                href={href}
                className={classes}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                {...props}
            >
                {content}
            </a>
        );
    }
    return (
        <button type="button" className={classes} {...props}>
            {content}
        </button>
    );
}