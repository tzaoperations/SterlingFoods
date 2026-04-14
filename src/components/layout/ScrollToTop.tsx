import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // 1. Disable the browser's automatic scroll restoration on route change
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Explicitly command Lenis to reset its internal state instantly
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback in case Lenis hasn't mounted yet
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;