"use client";
import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";

const easing = (x) => {
  return 1 - Math.pow(1 - x, 4);
};

export default function LenisScrolling({ children }) {
  const lenisRef = React.useRef(null);

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: easing,
    });
    lenisRef.current = lenis;
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();  // Clean up Lenis instance
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}