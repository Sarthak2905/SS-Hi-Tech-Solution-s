import Seo from '../components/Seo.jsx';
import CTASection from '../components/CTASection.jsx';
import Hero from '../sections/Hero.jsx';
import CapabilityMarquee from '../sections/CapabilityMarquee.jsx';
import WhyChoose from '../sections/WhyChoose.jsx';
import ServicesOverview from '../sections/ServicesOverview.jsx';
import ProjectsShowcase from '../sections/ProjectsShowcase.jsx';
import Process from '../sections/Process.jsx';
import Benefits from '../sections/Benefits.jsx';
import PackagesSection from '../sections/PackagesSection.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import FaqSection from '../sections/FaqSection.jsx';

export default function Home() {
    return (
        <>
            <Seo />
            <Hero />
            <CapabilityMarquee />
            <WhyChoose />
            <ServicesOverview />
            <ProjectsShowcase />
            <Process />
            <Benefits />
            <PackagesSection />
            <Testimonials />
            <FaqSection />
            <CTASection />
        </>
    );
}