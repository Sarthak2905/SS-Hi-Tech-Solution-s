import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Reveal from '../components/Reveal.jsx';

export default function DesignSystem() {
    return (
        <>
            <Seo title="Design system" noIndex />
            <Section>
                <SectionHeading as="h1" eyebrow="Dev only" title="Design system" description="Visual check for shared components." />
                <div className="mt-10 flex flex-wrap gap-3">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button disabled>Disabled</Button>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                    <Badge>Neutral</Badge>
                    <Badge tone="accent">Completed</Badge>
                    <Badge tone="warning">Concept</Badge>
                </div>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {[1, 2, 3].map((n) => (
                        <Reveal key={n} delay={n * 0.05}>
                            <Card interactive>
                                <h3 className="text-xl font-semibold">Card {n}</h3>
                                <p className="mt-2 text-paper-muted">Rounded corners, subtle border, restrained hover.</p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeading tone="light" eyebrow="Light section" title="Contrast section" description="Used sparingly to break up long pages." />
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button variant="dark">Dark button</Button>
                    <Button variant="outlineDark">Outline</Button>
                </div>
                <Card tone="light" className="mt-8 max-w-md">
                    <p>Light card on a light section.</p>
                </Card>
            </Section>
        </>
    );
}