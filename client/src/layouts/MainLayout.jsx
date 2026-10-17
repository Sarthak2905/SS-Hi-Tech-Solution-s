import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PageLoader from '../components/PageLoader.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import MobileActionBar from '../components/MobileActionBar.jsx';

export default function MainLayout() {
    return (
        <div className="flex min-h-dvh flex-col">
            <ScrollToTop />
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-ink-950"
            >
                Skip to content
            </a>
            <Header />
            <main id="main" tabIndex={-1} className="flex-1 outline-none">
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <MobileActionBar />
        </div>
    );
}