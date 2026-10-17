import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';

export default function Privacy() {
    return (
        <>
            <Seo title="Privacy Policy" description="How SS Hi-Tech Solution's collects, uses and protects inquiry information." />
            <PageHero eyebrow="Legal" title="Privacy Policy" />
            <Section>
                <p className="text-paper-muted">Policy text is drafted in Phase 3.</p>
            </Section>
        </>
    );
}