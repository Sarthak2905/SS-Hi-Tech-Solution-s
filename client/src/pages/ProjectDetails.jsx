import { useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

export default function ProjectDetails() {
    const { slug } = useParams();
    return (
        <>
            <Seo title="Project details" />
            <PageHero eyebrow="Project" title={slug} description="Project details load from the API in Phase 4.">
                <Button to="/projects" variant="secondary">
                    Back to projects
                </Button>
            </PageHero>
            <Section>
                <p className="text-paper-muted">Details template arrives in Phase 3.</p>
            </Section>
        </>
    );
}