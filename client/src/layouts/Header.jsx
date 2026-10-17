import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo.jsx';
import Button from '../components/Button.jsx';
import ArrowBadge from '../components/ArrowBadge.jsx';
import Container from '../components/Container.jsx';
import { navLinks } from '../config/navigation.js';
import { cn } from '../utils/cn.js';

const linkClass = ({ isActive }) =>
    cn(
        'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
        isActive ? 'text-accent' : 'text-paper hover:text-accent'
    );

export default function Header() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const buttonRef = useRef(null);
    const panelRef = useRef(null);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)');
        const onChange = (e) => e.matches && setOpen(false);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    // Open menu: lock page scroll, move focus in, trap Tab, close on Escape
    useEffect(() => {
        if (!open) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const getFocusable = () => panelRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? [];
        getFocusable()[0]?.focus();

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
                buttonRef.current?.focus();
                return;
            }
            if (e.key !== 'Tab') return;
            const items = [buttonRef.current, ...getFocusable()];
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    return (
        // Fully opaque, always separated from the page by a lime hairline
        <header className="sticky top-0 z-50 border-b border-accent/70 bg-ink-950">
            <Container className="flex h-16 items-center justify-between lg:grid lg:h-[72px] lg:grid-cols-[1fr_auto_1fr]">
                <Logo />

                <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center justify-end gap-3">
                    <Link
                        to="/contact"
                        className="hidden items-center gap-2.5 text-sm font-semibold text-paper transition-colors hover:text-accent sm:inline-flex"
                    >
                        Start a Project <ArrowBadge />
                    </Link>
                    <button
                        ref={buttonRef}
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 text-paper hover:border-accent lg:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((o) => !o)}
                    >
                        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                    </button>
                </div>
            </Container>

            {open && (
                <div
                    id="mobile-menu"
                    ref={panelRef}
                    className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink-950 lg:hidden"
                >
                    <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6 sm:px-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className={({ isActive }) =>
                                    cn(
                                        'rounded-lg px-4 py-3.5 text-2xl font-semibold tracking-tight',
                                        isActive ? 'bg-ink-800 text-accent' : 'text-paper hover:bg-ink-900'
                                    )
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Button to="/contact" size="lg" icon className="mt-6">
                            Start a Project
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}