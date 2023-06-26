import React from 'react';
import { motion, easeIn, AnimationDefinition } from 'framer-motion';

import MobileNavItem from './MobileNavItem';

import { navItems } from '@app/constants/nav.constants';

type Props = {
  activePath: string;
  open: boolean;
  scrollUp: boolean;
};

const hiddenAnim: AnimationDefinition = { x: '-100%' };

const openAnim: AnimationDefinition = { x: 0 };

const MobileNav: React.FC<Props> = ({ activePath, open, scrollUp }) => {
  return (
    <motion.nav
      role="navigation"
      initial={{ x: '-100%' }}
      animate={open ? openAnim : hiddenAnim}
      transition={{
        ease: 'easeIn',
        delay: !open ? 0.2 : 0,
        easings: easeIn,
        duration: !open ? 0.1 : 0.3
      }}
      className={`nav--mobile ${scrollUp ? 'scroll-up' : ''}`}
    >
      <ul>
        {navItems.map((item, index) => (
          <MobileNavItem
            open={open}
            key={`mob-${item.label}`}
            index={index}
            {...item}
            active={activePath === item.to}
          />
        ))}
      </ul>
    </motion.nav>
  );
};

export default MobileNav;
