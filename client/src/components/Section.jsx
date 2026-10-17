import { cn } from '../utils/cn.js';
import Container from './Container.jsx';

const tones = {
    dark: 'bg-ink-950 text-paper',
    muted: 'bg-ink-900 text-paper',
    light: 'bg-paper text-ink-950',
    lime: 'bg-accent text-black',
};

export default function Section({ tone = 'dark', id, className, containerClassName, children, ...props }) {
    return (
        <section id={id} className={cn('py-16 sm:py-24', tones[tone], className)} {...props}>
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}