import React from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@app/types/store';
import { toggle } from '@app/store/slices/nav/nav.slice';

// hooks
import { useLocation } from 'react-router';
import { useMediaQuery } from '@app/hooks/useResponsive';
import useHeaderScroll from '@app/hooks/useHeaderScroll';

// config
import { mediaQueries } from '@app/constants/responsive.constants';

// components
import { Logo } from '@app/components/elements/Logo';
import { Hamburger } from '@app/components/buttons/Hamburger';
import { DesktopNav } from './nav';

const Header: React.FC = () => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();
  const [isTablet] = useMediaQuery([mediaQueries.lgTablet]);
  const { hide, whiteBG } = useHeaderScroll();

  const hideClass = hide ? 'scroll-hide' : '';
  const whiteBgClass = whiteBG ? 'white-bg' : '';

  const toggleMobileNav = () => dispatch(toggle());

  return (
    <>
      <header className={`header__wrapper ${hideClass} ${whiteBgClass} `}>
        <div className="header__content">
          <Logo />
          {!isTablet ? (
            <DesktopNav activePath={pathname} />
          ) : (
            <Hamburger onClick={toggleMobileNav} open={mobileNavOpen} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
