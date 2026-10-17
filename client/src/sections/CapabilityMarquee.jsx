import Container from '../components/Container.jsx';

const items = [
    'Business Websites',
    'E-commerce',
    'Custom Web Apps',
    'CRM Systems',
    'Business Automation',
    'Maintenance & Support',
];

function Row({ hidden }) {
    return (
        <ul aria-hidden={hidden || undefined} className={`flex shrink-0 items-center gap-10 pr-10 ${hidden ? 'motion-reduce:hidden' : ''}`}>
            {items.map((item) => (
                <li key={item} className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold">
                    {item}
                    <span className="h-2 w-2 rotate-45 bg-black" />
                </li>
            ))}
        </ul>
    );
}

export default function CapabilityMarquee() {
    return (
        <section aria-label="What we build" className="overflow-hidden bg-accent py-6 text-black">
            <Container className="flex items-center gap-8">
                <p className="hidden shrink-0 text-sm font-semibold leading-tight lg:block">
                    What we
                    <br />
                    build
                </p>
                <div className="flex min-w-0 flex-1 overflow-hidden">
                    <div className="flex w-max animate-marquee motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
                        <Row />
                        <Row hidden />
                    </div>
                </div>
            </Container>
        </section>
    );
}