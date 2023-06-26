import { useEffect, useState } from 'react';
import { mediaQueries } from '../constants/responsive.constants';

export function useMediaQuery(queries: string[]): boolean[] {
  const getMatches = (queries: string[]): boolean[] => {
    return queries ? queries.map((q) => window.matchMedia(q).matches) : [];
  };

  const [matches, setMatches] = useState<boolean[]>(getMatches(queries));

  function handleChange() {
    setMatches(getMatches(queries));
  }

  useEffect(() => {
    if (queries?.length) {
      const matchMedias = queries.map((q) => window.matchMedia(q));

      // Triggered at the first client-side load and if query changes
      handleChange();

      // Listen matchMedias
      for (const match of matchMedias) {
        match.addEventListener('change', handleChange);
      }
    }

    return () => {
      const matchMedias = queries?.map((q) => window.matchMedia(q));
      if (matchMedias?.length) {
        for (const match of matchMedias) {
          match.removeEventListener('change', handleChange);
        }
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries?.length]);

  return matches;
}

export function useResponsive(): boolean[] {
  const queries = useMediaQuery([mediaQueries.lgPhone, mediaQueries.lgTablet]);
  return queries;
}
