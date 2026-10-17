import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Services() {
    return (
        <>
            <Seo
                title="Services"
                description="Business websites, e-commerce, custom web applications, CRM systems and automation from SS Hi-Tech Solution's."
            />
            <PageHero
                eyebrow="Services"
                title="Practical software for real business needs"
                description="Websites, custom applications and automation, scoped around what your business actually needs."
            />
            <Section>
                <p className="text-paper-muted">Service cards arrive in Phase 3 (data from the API in Phase 4).</p>
            </Section>
            <CTASection />
        </>
    );
}