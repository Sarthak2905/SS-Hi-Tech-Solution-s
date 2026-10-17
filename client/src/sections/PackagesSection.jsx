import { Check, Minus } from 'lucide-react';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import SnapRow, { SnapItem } from '../components/SnapRow.jsx';
import { packages } from '../data/packages.js';
import { formatINR } from '../utils/format.js';
import { cn } from '../utils/cn.js';

export function PackageCard({ pkg }) {
    return (
        <Card className={cn('flex h-full flex-col', pkg.isFeatured && 'border-accent')}>
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                {pkg.isFeatured && <Badge tone="accent">Featured</Badge>}
            </div>
            <p className="mt-5 text-xs text-paper-muted">{pkg.priceLabel}</p>
            <p className="text-4xl font-bold tracking-tight">{formatINR(pkg.startingPrice)}</p>
            <p className="mt-3 text-paper-muted">{pkg.shortDescription}</p>

            <p className="mt-5 text-sm">
                <span className="font-semibold text-accent">Best for: </span>
                {pkg.bestFor}
            </p>

            <h4 className="mt-6 text-sm font-semibold">Included</h4>
            <ul className="mt-3 space-y-2 text-sm">
                {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            <h4 className="mt-6 text-sm font-semibold text-paper-muted">Not included / optional add-ons</h4>
            <ul className="mt-3 space-y-2 text-sm text-paper-muted">
                {pkg.exclusions.map((e) => (
                    <li key={e} className="flex gap-2.5">
                        <Minus size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{e}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-8">
                <Button
                    to={`/contact?package=${pkg.slug}`}
                    variant={pkg.isFeatured ? 'primary' : 'secondary'}
                    icon
                    className="w-full"
                >
                    Get a Custom Quote
                </Button>
            </div>
        </Card>
    );
}

export default function PackagesSection({ showHeading = true }) {
    return (
        <Section tone="muted">
            {showHeading && (
                <SectionHeading
                    eyebrow="Packages"
                    title="Clear starting points, quoted to your scope"
                    description="Prices are indicative starting points, not fixed quotes. The final quotation depends on requirements, integrations, hosting, maintenance and complexity."
                />
            )}
            <SnapRow label="Packages" className="mt-10 md:grid-cols-2 xl:grid-cols-4">
                {packages.map((pkg) => (
                    <SnapItem key={pkg.slug}>
                        <PackageCard pkg={pkg} />
                    </SnapItem>
                ))}
            </SnapRow>
        </Section>
    );
}