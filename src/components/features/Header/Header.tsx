import React from 'react';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from '@app/types/store';

// components
import { Logo } from '@app/components/elements/Logo';
import { useResponsive } from '../../../hooks/useResponsive';

const Header: React.FC = () => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);

  const [isMobile, isTablet] = useResponsive();

  return (
    <header className="header__wrapper">
      <div className="header__content">
        <Logo />
        {/* <DesktopNav /> */}
      </div>
    </header>
  );
};

export default Header;
