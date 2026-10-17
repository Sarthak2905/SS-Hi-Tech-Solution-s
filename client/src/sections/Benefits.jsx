import { Check } from 'lucide-react';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { benefits } from '../data/home.js';

export default function Benefits() {
    return (
        <Section>
            <div className="grid items-start gap-12 lg:grid-cols-2">
                <SectionHeading
                    eyebrow="Business benefits"
                    title="Technology Should Make Running Your Business Easier."
                    description="Practical improvements to how you work and how customers find and reach you."
                />
                <div>
                    <ul className="space-y-4">
                        {benefits.map((b) => (
                            <li key={b} className="flex items-start gap-4 rounded-xl border border-ink-700 bg-ink-900 p-5">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-black">
                                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                                </span>
                                <span className="text-lg font-medium">{b}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-5 text-sm text-paper-muted">
                        Results depend on each business and project. We don&rsquo;t promise specific savings or outcomes.
                    </p>
                </div>
            </div>
        </Section>
    );
}