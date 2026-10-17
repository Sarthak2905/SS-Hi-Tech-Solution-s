import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';

export default function Contact() {
    return (
        <>
            <Seo
                title="Start a Project"
                description="Tell SS Hi-Tech Solution's what you want to build, improve or automate and get a response with next steps."
            />
            <PageHero
                eyebrow="Contact"
                title="Start a project"
                description="Tell us what you want to build, improve, or automate. We'll review your requirements and discuss the next steps."
            />
            <Section>
                <p className="text-paper-muted">The inquiry form UI arrives in Phase 3 and is connected to the API in Phase 4.</p>
            </Section>
        </>
    );
}