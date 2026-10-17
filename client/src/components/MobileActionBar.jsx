import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import ArrowBadge from './ArrowBadge.jsx';
import { site, isConfigured } from '../config/site.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';

const iconButton =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-ink-600 text-paper active:bg-ink-800';

export default function MobileActionBar() {
    const { pathname } = useLocation();
    if (pathname === '/contact') return null; // the form itself is the action there

    const whatsapp = getWhatsAppLink();
    const phone = isConfigured(site.contact.phone)
        ? `tel:${site.contact.phone.replace(/[^\d+]/g, '')}`
        : null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950 px-4 pt-3 pb-[calc(0.75rem_+_env(safe-area-inset-bottom))] lg:hidden">
            <div className="mx-auto flex max-w-lg items-center gap-3">
                {phone && (
                    <a href={phone} aria-label="Call us" className={iconButton}>
                        <Phone size={20} aria-hidden="true" />
                    </a>
                )}
                {whatsapp && (
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={iconButton}>
                        <MessageCircle size={20} aria-hidden="true" />
                    </a>
                )}
                <Link
                    to="/contact"
                    className="flex h-12 flex-1 items-center justify-center gap-3 rounded-md bg-accent px-4 text-base font-semibold text-black active:bg-accent-strong"
                >
                    Start a Project <ArrowBadge className="bg-black text-white" />
                </Link>
            </div>
        </div>
    );
}