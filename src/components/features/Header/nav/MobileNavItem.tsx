import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimationDefinition, motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/types/store';
import { close } from '@app/store/slices/nav/nav.slice';

import { navItems } from '@app/constants/nav.constants';

interface Props {
  active: boolean;
  label: string;
  index: number;
  open: boolean;
  to: string;
}

interface Delay {
  to: number;
  from: number;
}

type Delays = Delay[];

const closedAnim: AnimationDefinition = { opacity: 0 };
const openAnim: AnimationDefinition = { opacity: 1 };

const delays: Delays = navItems.map((_, i) => ({
  from: 0.2 * i + 0.4,
  to: 0
}));

const MobileNavItem: React.FC<Props> = ({ active, to, label, index, open }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    dispatch(close());
    navigate(to);
  };
  return (
    <motion.li
      animate={open ? openAnim : closedAnim}
      transition={{
        delay: open ? delays[index].from : delays[index].to,
        duration: !open ? 0.2 : 0.3
      }}
    >
      <button
        onClick={handleNavigate}
        className={`nav-item ${active ? 'active' : ''}`}
      >
        {label}
      </button>
    </motion.li>
  );
};

export default MobileNavItem;
