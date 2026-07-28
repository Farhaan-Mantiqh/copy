'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSinit(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      // mirror: true,
      // disable: false,
      // startEvent: 'DOMContentLoaded',
      // offset: 120,
      // useClassNames: false,
    });
  }, []);
  return <></>;
}
