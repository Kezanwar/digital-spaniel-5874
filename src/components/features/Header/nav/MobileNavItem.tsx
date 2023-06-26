import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props extends LinkProps {
  active: boolean;
  label: string;
  index: number;
}

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -5 }
};

const MobileNavItem: React.FC<Props> = (props) => {
  const { active, to, label, index } = props;
  return (
    <motion.li variants={variants}>
      <Link to={to} className={`nav-item ${active ? 'active' : ''}`}>
        {label}
      </Link>
    </motion.li>
  );
};

export default MobileNavItem;
