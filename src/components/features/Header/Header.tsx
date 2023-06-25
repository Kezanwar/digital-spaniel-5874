import React from 'react';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from '@app/types/store';

// hooks
import { useLocation } from 'react-router';
import { useMediaQuery } from '@app/hooks/useResponsive';
import useHeaderScroll from '../../../hooks/useHeaderScroll';

// config
import { mediaQueries } from '@app/constants/responsive.constants';

// components
import { Logo } from '@app/components/elements/Logo';

import { Hamburger } from '../../buttons/Hamburger';
import { DesktopNav } from './nav';

const Header: React.FC = () => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);
  const { pathname } = useLocation();
  const [isTablet] = useMediaQuery([mediaQueries.lgTablet]);

  const { hide, whiteBG } = useHeaderScroll();

  const hideClass = hide ? 'scroll-hide' : '';
  const whiteBgClass = whiteBG ? 'white-bg' : '';

  return (
    <>
      <header className={`header__wrapper ${hideClass} ${whiteBgClass} `}>
        <div className="header__content">
          <Logo />
          {!isTablet ? (
            <DesktopNav activePath={pathname} />
          ) : (
            <Hamburger
              onClick={() => {
                console.log('hello');
              }}
              open={mobileNavOpen}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
