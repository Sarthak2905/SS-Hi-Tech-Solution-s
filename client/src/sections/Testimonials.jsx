import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import { testimonials } from '../data/testimonials.js';
import { approach } from '../data/home.js';
import { getIcon } from '../utils/icons.js';

export default function Testimonials() {
    if (testimonials.length) {
        return (
            <Section>
                <SectionHeading eyebrow="Testimonials" title="What clients say" />
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <Card key={t.name}>
                            <blockquote className="text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
                            <figcaption className="mt-5 text-sm text-paper-muted">
                                <span className="font-semibold text-paper">{t.name}</span>, {t.role}
                                {t.company ? `, ${t.company}` : ''}
                            </figcaption>
                        </Card>
                    ))}
                </div>
            </Section>
        );
    }

    return (
        <Section>
            <SectionHeading
                eyebrow="Approach"
                title="Our Approach to Every Project"
                description="How we work, whatever the size of the project."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
                {approach.map(({ icon, title, text }) => {
                    const Icon = getIcon(icon);
                    return (
                        <Card key={title}>
                            <Icon size={26} className="text-accent" aria-hidden="true" />
                            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                            <p className="mt-2 text-paper-muted">{text}</p>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}