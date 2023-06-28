import React from 'react';

import { motion } from 'framer-motion';

import { HeroSection } from '@app/components/sections/HeroSection';
import { CapableSection } from '@app/components/sections/CapableSection';
import { RecentProjectsSection } from '../../components/sections/RecentProjectsSection';

const Home: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Home"
    >
      <HeroSection />
      <CapableSection />
      <RecentProjectsSection />
    </motion.main>
  );
};

export default Home;
