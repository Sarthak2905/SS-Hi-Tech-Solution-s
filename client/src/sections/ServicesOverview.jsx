import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import Reveal from '../components/Reveal.jsx';
import ArrowBadge from '../components/ArrowBadge.jsx';
import { services } from '../data/services.js';
import { getIcon } from '../utils/icons.js';
import { cn } from '../utils/cn.js';

export function ServiceCard({ service }) {
    const Icon = getIcon(service.icon);
    return (
        <Card interactive className="flex h-full flex-col">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-black">
                <Icon size={22} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-paper-muted">{service.shortDescription}</p>
            <ul className="mt-5 space-y-2 text-sm">
                {service.features.map((f, i) => (
                    <li key={f} className={cn('flex gap-2.5', i > 2 && 'hidden md:flex')}>
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>
            <Link
                to={`/contact?service=${service.slug}`}
                className="mt-auto inline-flex items-center gap-2.5 pt-6 text-sm font-semibold hover:text-accent"
            >
                Discuss Your Project <ArrowBadge />
            </Link>
        </Card>
    );
}

export default function ServicesOverview() {
    return (
        <Section tone="muted">
            <SectionHeading
                eyebrow="Services"
                title="What we can build for your business"
                description="Each project is scoped individually. Not every integration is included in every package."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, i) => (
                    <Reveal key={service.slug} delay={(i % 3) * 0.05}>
                        <ServiceCard service={service} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}