import React from 'react';
import { AnimationDefinition, motion } from 'framer-motion';

interface Props extends React.DOMAttributes<HTMLButtonElement> {
  open: boolean;
}

const straightLine: AnimationDefinition = { rotate: '0deg' };

const bottomLineRotate: AnimationDefinition = { rotate: '-45deg', y: '-100%' };

const topLineRotate: AnimationDefinition = { rotate: '45deg', y: '100%' };

const Hamburger: React.FC<Props> = ({ open, onClick }) => {
  return (
    <button onClick={onClick} className={`hamburger-btn ${open ? 'open' : ''}`}>
      <motion.div animate={open ? topLineRotate : straightLine} />
      <motion.div
        initial={'closed'}
        animate={open ? bottomLineRotate : straightLine}
      />
    </button>
  );
};

export default Hamburger;
