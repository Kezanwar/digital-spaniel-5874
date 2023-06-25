import React from 'react';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from '@app/types/store';

const Header: React.FC = (props) => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);
  console.log(mobileNavOpen);
  return <div className="Header"></div>;
};

export default Header;
