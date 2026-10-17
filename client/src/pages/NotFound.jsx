import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
    return (
        <>
            <Seo title="Page not found" noIndex />
            <Section className="py-24 sm:py-32">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">Error 404</p>
                <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">This page doesn’t exist.</h1>
                <p className="mt-4 max-w-xl text-lg text-paper-muted">
                    The link may be broken or the page may have moved. Head back home or tell us what you need.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button to="/" size="lg" icon>Back to Home</Button>
                    <Button to="/contact" variant="secondary" size="lg" icon>Start a Project</Button>
                </div>
            </Section>
        </>
    );
}