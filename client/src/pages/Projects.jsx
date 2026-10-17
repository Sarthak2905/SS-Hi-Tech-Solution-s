import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Projects() {
    return (
        <>
            <Seo title="Projects" description="Selected projects and prototypes built by SS Hi-Tech Solution's." />
            <PageHero
                eyebrow="Projects"
                title="Selected work"
                description="Genuine projects, clearly labeled by status: completed, in progress, or concept."
            />
            <Section>
                <p className="text-paper-muted">Portfolio grid and filters arrive in Phase 3.</p>
            </Section>
            <CTASection />
        </>
    );
}