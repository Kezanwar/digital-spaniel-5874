import { useCallback, useEffect, useRef, useState } from 'react';

type UseHeaderScrollReturn = {
  hide: boolean;
  whiteBG: boolean;
};

function useHeaderScroll(): UseHeaderScrollReturn {
  const [hide, setHide] = useState<boolean>(false);
  const [whiteBG, setWhiteBG] = useState<boolean>(false);

  const lastScrollY = useRef<number>(0);

  const updateScrollInfo = useCallback(() => {
    const scrollY = window.pageYOffset;
    const shouldHide = scrollY > lastScrollY.current ? true : false;
    setHide(shouldHide);
    lastScrollY.current = scrollY > 0 ? scrollY : 0;
    if (scrollY > 20) {
      setWhiteBG(true);
    } else setWhiteBG(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollInfo); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollInfo); // clean up
    };
  }, []);

  return { hide, whiteBG };
}

export default useHeaderScroll;
