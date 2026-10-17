import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { valueProps } from '../data/home.js';
import { getIcon } from '../utils/icons.js';

export default function WhyChoose() {
    return (
        <Section>
            <SectionHeading
                eyebrow="Why SS Hi-Tech Solution's"
                title="Why businesses choose to work with us"
                description="Practical solutions, clear communication, and only the capabilities we can genuinely deliver."
            />
            <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {valueProps.map(({ icon, title, text }, i) => {
                    const Icon = getIcon(icon);
                    return (
                        <li key={title}>
                            <Reveal delay={(i % 3) * 0.05}>
                                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-black">
                                    <Icon size={22} aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                                <p className="mt-2 text-paper-muted">{text}</p>
                            </Reveal>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}