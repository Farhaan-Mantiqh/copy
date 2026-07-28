'use client';

import Lenis from 'lenis';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Define TypeScript interface for Lenis instance
interface LenisInstance {
  scrollTo: (target: number, options?: { immediate?: boolean }) => void;
  raf: (time: number) => void;
  destroy: () => void;
}

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const lenis = useRef<LenisInstance | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Scroll to top if the dependencies change
  useEffect(() => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Initialize Lenis with proper typing
    lenis.current = new Lenis() as LenisInstance;

    function raf(time: number): void {
      if (lenis.current) {
        lenis.current.raf(time);
        requestAnimationFrame(raf);
      }
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenis.current) {
        lenis.current.destroy();
        lenis.current = null;
      }
    };
  }, []);

  // Use a div with proper ref typing
  return <div ref={(el) => el}>{children}</div>;
}
