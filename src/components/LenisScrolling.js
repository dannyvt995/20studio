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
    console.log(lenisRef.current)
    function update(time) {
    
      lenisRef.current.raf(time * 1000);
      
    }
  
    window.lenis = lenisRef.current
    gsap.ticker.add(update)

    setTimeout(() => {
      window.lenis = lenisRef.current
      
     }, 2000);
    return  () => {
      gsap.ticker.remove(update)
      //  lenisRef.current.Lenis.destroy()
     
    }
  },[lenisRef])

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}

export default LenisScrolling;