import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CursorGlow from './components/ui/CursorGlow';

import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
const Packages = lazy(() => import('./pages/Packages'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Book = lazy(() => import('./pages/Book'));

// Helper component to reset scroll position on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-obsidian">
    <div className="w-12 h-12 border-2 border-champagne/20 border-t-champagne rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorGlow />
      <div className="flex flex-col min-h-screen bg-obsidian text-ivory antialiased selection:bg-champagne selection:text-obsidian">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
