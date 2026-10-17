import { MessageCircle } from 'lucide-react';
import Button from './Button.jsx';
import Section from './Section.jsx';
import { getWhatsAppLink } from '../utils/whatsapp.js';

export default function CTASection({
    title = 'Your Next Business Improvement Starts With a Conversation.',
    description = "Tell us what you want to build, improve, or automate. We'll review your requirements and discuss the next steps.",
}) {
    const whatsappLink = getWhatsAppLink();

    return (
        <Section tone="lime" aria-labelledby="cta-heading">
            <div className="mx-auto max-w-3xl text-center">
                <h2 id="cta-heading" className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-5xl">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-black/75">{description}</p>
                <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                    <Button to="/contact" variant="dark" size="lg" icon>
                        Start Your Project
                    </Button>
                    {whatsappLink && (
                        <Button href={whatsappLink} variant="outlineDark" size="lg">
                            <MessageCircle size={18} aria-hidden="true" /> Contact on WhatsApp
                        </Button>
                    )}
                </div>
            </div>
        </Section>
    );
}