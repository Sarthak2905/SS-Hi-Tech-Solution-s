import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';

export default function About() {
    return (
        <>
            <Seo title="About" description="About SS Hi-Tech Solution's: a freelance web development and business software studio in Baramati." />
            <PageHero
                eyebrow="About"
                title="Technology that makes running a business easier"
                description="A freelance software studio based in Baramati, building practical digital solutions for small and medium businesses."
            />
            <Section>
                <p className="text-paper-muted">About content arrives in Phase 3.</p>
            </Section>
            <CTASection />
        </>
    );
}