import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Container from '../components/Container.jsx';
import Logo from '../components/Logo.jsx';
import { site, isConfigured } from '../config/site.js';
import { footerServices, legalLinks, navLinks } from '../config/navigation.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';

function ContactItem({ icon: Icon, label, value, href }) {
    const configured = isConfigured(value);
    // Dev: show a dashed hint so you remember to fill it in. Production: hide.
    if (!configured) {
        return import.meta.env.DEV ? (
            <li className="flex items-center gap-3 rounded border border-dashed border-ink-600 px-2 py-1 text-sm text-paper-muted/70">
                <Icon size={16} aria-hidden="true" /> {label}: set in config/site.js
            </li>
        ) : null;
    }
    return (
        <li>
            <a href={href} className="flex items-center gap-3 text-sm text-paper-muted hover:text-accent">
                <Icon size={16} aria-hidden="true" /> {value}
            </a>
        </li>
    );
}

export default function Footer() {
    const whatsapp = getWhatsAppLink();
    const socials = [
        ['LinkedIn', site.social.linkedin],
        ['Instagram', site.social.instagram],
        ['GitHub', site.social.github],
    ].filter(([, url]) => url);

    return (
        <footer className="border-t border-ink-800 bg-ink-900">
            <Container Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
                <div>
                    <Logo />
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-muted">
                        Practical websites, custom software and business automation for growing businesses.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm text-paper-muted">
                        <MapPin size={16} aria-hidden="true" /> {site.location}
                    </p>
                </div>

                <nav aria-label="Services">
                    <h2 className="font-display text-base font-semibold">Services</h2>
                    <ul className="mt-4 space-y-2.5">
                        {footerServices.map((name) => (
                            <li key={name}>
                                <Link to="/services" className="text-sm text-paper-muted hover:text-accent">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Quick links">
                    <h2 className="font-display text-base font-semibold">Quick links</h2>
                    <ul className="mt-4 space-y-2.5">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="text-sm text-paper-muted hover:text-accent">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="font-display text-base font-semibold">Get in touch</h2>
                    <ul className="mt-4 space-y-3">
                        <ContactItem icon={Mail} label="Email" value={site.contact.email} href={`mailto:${site.contact.email}`} />
                        <ContactItem
                            icon={Phone}
                            label="Phone"
                            value={site.contact.phone}
                            href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}
                        />
                        {whatsapp && (
                            <li>
                                <a
                                    href={whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-paper-muted hover:text-accent"
                                >
                                    <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
                                </a>
                            </li>
                        )}
                    </ul>
                    {socials.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-4">
                            {socials.map(([name, url]) => (
                                <li key={name}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-paper-muted underline-offset-4 hover:text-accent hover:underline"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </Container>

            <div className="border-t border-ink-800">
                <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-paper-muted sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {site.name}. All rights reserved.
                    </p>
                    <ul className="flex gap-5">
                        {legalLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="hover:text-accent">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </footer>
    );
}