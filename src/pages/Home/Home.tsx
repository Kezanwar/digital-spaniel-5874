import React from 'react';
import { HeroSection } from '@app/components/sections/HeroSection';
import { CapableSection } from '@app/components/sections/CapableSection';

const Home: React.FC = () => {
  return (
    <main className="Home">
      <HeroSection />
      <CapableSection />
    </main>
  );
};

export default Home;
