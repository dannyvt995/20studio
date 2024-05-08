"use client";
import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";

const easing = (x) => {
  return 1 - Math.pow(1 - x, 4);
};

function LenisScrolling({ children }) {
 
  const lenisRef = React.useRef()

  React.useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 2.5,
      lerp:0.045
    })
 
  },[lenisRef])

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}

export default LenisScrolling;