import Container from './Container.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function PageHero({ eyebrow, title, description, children }) {
    return (
        <header className="relative overflow-hidden border-b border-ink-800 bg-ink-950 py-16 sm:py-24">
            <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
            <Container className="relative">
                <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
                {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </Container>
        </header>
    );
}