import { useLocation } from 'react-router-dom';
import { site } from '../config/site.js';

const DEFAULT_TITLE = `${site.name} | Websites, Business Software & Automation`;

export default function Seo({ title, description = site.description, noIndex = false }) {
    const { pathname } = useLocation();
    const fullTitle = title ? `${title} | ${site.name}` : DEFAULT_TITLE;
    const canonical = site.url ? `${site.url}${pathname === '/' ? '' : pathname}` : null;

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex" />}
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={site.name} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta name="twitter:card" content="summary" />
        </>
    );
}