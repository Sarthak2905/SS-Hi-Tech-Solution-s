import { Link } from 'react-router-dom';
import { site } from '../config/site.js';

export default function Logo({ className = '' }) {
    return (
        <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label={`${site.name} home`}>
            <svg viewBox="0 0 32 32" className="h-8 w-8 text-accent" fill="currentColor" aria-hidden="true">
                <rect x="12" y="2" width="8" height="8" rx="1.5" transform="rotate(45 16 6)" />
                <rect x="2" y="12" width="8" height="8" rx="1.5" transform="rotate(45 6 16)" />
                <rect x="22" y="12" width="8" height="8" rx="1.5" transform="rotate(45 26 16)" />
                <rect x="12" y="22" width="8" height="8" rx="1.5" transform="rotate(45 16 26)" />
            </svg>
            <span className="text-lg font-semibold leading-none tracking-tight">{site.name}</span>
        </Link>
    );
}