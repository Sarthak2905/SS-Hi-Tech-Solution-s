import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Packages() {
    return (
        <>
            <Seo
                title="Packages"
                description="Indicative starting prices for websites, custom applications and business automation. Final quotes depend on scope."
            />
            <PageHero
                eyebrow="Packages"
                title="Clear starting points, quoted to your scope"
                description="Prices shown are indicative starting points. The final quotation depends on requirements, integrations, hosting and complexity."
            />
            <Section>
                <p className="text-paper-muted">Package cards (admin-managed) arrive in Phases 3 and 6.</p>
            </Section>
            <CTASection />
        </>
    );
}