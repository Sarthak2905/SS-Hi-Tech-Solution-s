import { ChevronDown } from 'lucide-react';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { faqs } from '../data/faqs.js';

export default function FaqSection() {
    return (
        <Section tone="muted">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Questions businesses ask before starting"
                    description="Answers depend on your project scope, so if yours isn't covered, just ask."
                    className="lg:sticky lg:top-28 lg:self-start"
                />
                <div className="border-t border-ink-700">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group border-b border-ink-700 py-5">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                                {faq.question}
                                <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={20} aria-hidden="true" />
                            </summary>
                            <p className="mt-3 text-paper-muted">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </Section>
    );
}