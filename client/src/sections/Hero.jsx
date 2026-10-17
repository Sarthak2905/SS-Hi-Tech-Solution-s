import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';

function HeroVisual() {
    const bar = (w) => <div className={`h-2 rounded bg-ink-700 ${w}`} />;
    return (
        <div
            aria-hidden="true"
            className="relative mx-auto mt-14 max-w-5xl text-left mask-[linear-gradient(to_bottom,black_55%,transparent)]"
        >
            <div className="rounded-t-2xl border border-b-0 border-ink-700 bg-ink-900 p-3 sm:p-4">
                <div className="flex items-center gap-1.5 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                    <span className="ml-3 h-5 flex-1 rounded bg-ink-800" />
                </div>
                <div className="grid gap-3 sm:grid-cols-[170px_1fr]">
                    <div className="hidden space-y-3 rounded-xl bg-ink-950 p-4 sm:block">
                        <div className="h-2 w-2/3 rounded bg-accent" />
                        {bar('w-full')}
                        {bar('w-4/5')}
                        {bar('w-3/5')}
                        {bar('w-2/3')}
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-3">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="space-y-3 rounded-xl bg-ink-950 p-4">
                                    {bar('w-1/2')}
                                    <div className={`h-5 rounded ${i === 0 ? 'bg-accent/80' : 'bg-ink-700'} w-3/4`} />
                                </div>
                            ))}
                        </div>
                        <div className="rounded-xl bg-ink-950 p-4">
                            <svg viewBox="0 0 400 110" className="h-24 w-full text-accent sm:h-32" preserveAspectRatio="none">
                                <path d="M0 95 C 60 85, 90 55, 150 65 S 250 25, 310 35 S 370 8, 400 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                <path d="M0 105 H400" stroke="#262626" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-ink-950">
            <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[680px] max-w-full -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl"
            />
            <Container className="relative pt-12 text-center sm:pt-24">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Websites, Software &amp; Automation
                </p>
                <h1 className="mx-auto mt-5 max-w-5xl text-[clamp(2.25rem,10vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em]">
                    We Build Digital Solutions That Grow Your Business.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base text-paper-muted sm:text-lg">
                    From professional websites to custom business management systems, SS Hi-Tech Solution's helps you
                    simplify operations, reach more customers, and turn your ideas into practical digital solutions.
                </p>
                <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                    <Button to="/contact" size="lg" icon>
                        Start Your Project
                    </Button>
                    <Button to="/projects" variant="secondary" size="lg" icon>
                        Explore Our Work
                    </Button>
                </div>
                <HeroVisual />
            </Container>
        </section>
    );
}