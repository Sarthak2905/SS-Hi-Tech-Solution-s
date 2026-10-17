import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';

export default function Terms() {
    return (
        <>
            <Seo title="Terms & Conditions" description="Terms and conditions for working with SS Hi-Tech Solution's." />
            <PageHero eyebrow="Legal" title="Terms & Conditions" />
            <Section>
                <p className="text-paper-muted">Terms text is drafted in Phase 3.</p>
            </Section>
        </>
    );
}