import React from 'react';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header: React.FC = (props) => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);
  console.log(mobileNavOpen);
  return <div className="Header">Header</div>;
};

export default Header;
