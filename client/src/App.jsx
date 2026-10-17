import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));
const Packages = lazy(() => import('./pages/Packages.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const DesignSystem = import.meta.env.DEV ? lazy(() => import('./pages/DesignSystem.jsx')) : null;

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="packages" element={<Packages />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        {DesignSystem && <Route path="design-system" element={<DesignSystem />} />}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}