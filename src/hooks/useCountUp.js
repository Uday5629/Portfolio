import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from `start` to `end` once the host element scrolls into
 * view. Returns `[ref, value]` — attach the ref to the element whose entry
 * should trigger the count. Uses an easeOutCubic curve via requestAnimationFrame.
 */
export function useCountUp(end, { duration = 1600, decimals = 0, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const reduceMotion = window.matchMedia?.(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (reduceMotion) {
        setValue(end);
        return;
      }

      let raf;
      let startTs;
      const tick = (ts) => {
        if (startTs === undefined) startTs = ts;
        const p = Math.min((ts - startTs) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(start + (end - start) * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      node._cancel = () => cancelAnimationFrame(raf);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      node._cancel?.();
    };
  }, [end, duration, start]);

  const rounded = Number(value.toFixed(decimals));
  return [ref, rounded];
}
