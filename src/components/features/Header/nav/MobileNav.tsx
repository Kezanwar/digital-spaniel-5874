import React from 'react';
import { motion, easeIn } from 'framer-motion';
import { navItems } from '@app/constants/nav.constants';
import MobileNavItem from './MobileNavItem';

type Props = {
  activePath: string;
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const MobileNav: React.FC<Props> = ({ activePath }) => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        staggerChildren: 0.2,
        duration: 0.3,
        ease: 'easeIn',
        easings: easeIn
      }}
      className="nav--desktop"
    >
      {navItems.map((item, index) => (
        <MobileNavItem
          index={index}
          to={item.to}
          active={activePath === item.to}
          label={item.label}
        />
      ))}
    </motion.ul>
  );
};

export default MobileNav;
