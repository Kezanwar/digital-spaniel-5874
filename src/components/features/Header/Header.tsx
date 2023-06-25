import React from 'react';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from '@app/types/store';

const Header: React.FC = () => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);

  return <div className="Header"></div>;
};

export default Header;
