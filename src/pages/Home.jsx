import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../sections/home/HeroSection';
import IntroSection from '../sections/home/IntroSection';
import SignatureServicesSection from '../sections/home/SignatureServicesSection';
import GroomPackagesSection from '../sections/home/GroomPackagesSection';
import VisitSection from '../sections/home/VisitSection';
import BookingCTASection from '../sections/home/BookingCTASection';

export const Home = () => {
  return (
    <PageTransition>
      {/* 1. Cinematic Redesigned Hero */}
      <HeroSection />

      {/* 2. Aaura Experience */}
      <IntroSection />

      {/* 3. Signature Services */}
      <SignatureServicesSection />

      {/* 4. Groom Packages */}
      <GroomPackagesSection />

      {/* 5. Visit Aaura / Location */}
      <VisitSection />

      {/* 6. Book Appointment CTA */}
      <BookingCTASection />
    </PageTransition>
  );
};

export default Home;
