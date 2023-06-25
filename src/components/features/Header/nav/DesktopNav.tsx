import React from 'react';
import type { NavItem } from '@app/types/nav';

type Props = {
  navItems: NavItem[];
  active: NavItem;
};

const DesktopNav: React.FC<Props> = ({ active, navItems }) => {
  return <div className="nav--desktop">DesktopNav</div>;
};
