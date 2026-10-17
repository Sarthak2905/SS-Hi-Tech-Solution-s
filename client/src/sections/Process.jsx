import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import { processSteps } from '../data/home.js';

export default function Process() {
    return (
        <Section tone="lime">
            <SectionHeading
                tone="lime"
                eyebrow="How we work"
                title="A simple five-step process"
                description="Timelines and pricing depend on the scope of each project."
            />
            <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {processSteps.map((step, i) => (
                    <li key={step.title}>
                        <Card tone="black" className="h-full">
                            <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                            <p className="mt-2 text-sm text-paper-muted">{step.text}</p>
                        </Card>
                    </li>
                ))}
            </ol>
        </Section>
    );
}