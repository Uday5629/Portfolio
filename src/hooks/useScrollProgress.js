import { useEffect, useState } from 'react';

/**
 * Tracks page scroll and reports:
 *  - `progress`: 0..1 fraction of the page scrolled (for the reading bar)
 *  - `active`: id of the section currently in view (for nav highlighting)
 *  - `scrolled`: whether the page has moved past the top (header shadow)
 *  - `showTop`: whether the back-to-top button should appear
 */
export function useScrollProgress(sectionIds, offset = 100) {
  const [state, setState] = useState({
    progress: 0,
    active: sectionIds[0] ?? '',
    scrolled: false,
    showTop: false,
  });

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      const probe = scrollTop + offset;
      let active = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) active = id;
      }

      setState({
        progress,
        active,
        scrolled: scrollTop > 8,
        showTop: scrollTop > 600,
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, offset]);

  return state;
}
