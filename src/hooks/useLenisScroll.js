"use client"
import { useEffect, memo } from 'react';
import Lenis from "@studio-freight/lenis";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenisScroll(pathName, lenisRef) {


  useEffect(() => {
    if (pathName === '/work') return;

    console.log("useLenisScroll hooks----", pathName);
    const pathNameFormat = pathName.replace('/', ''); // Assuming you need to format pathName
    const navbarModal = document.getElementById('navbar');
    const buttonNavbar = document.getElementById('button_menu');
    const target = window.innerHeight * 1.5;
    const domScroll = document.getElementById(`${pathNameFormat}page`);

    const lenis = new Lenis({
      syncTouch: true,
      wrapper: domScroll,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3.5)
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      ScrollTrigger.update();
      if (scroll > target && scroll < target * 2) {
        navbarModal.style.display = 'none';
        buttonNavbar.style.display = 'flex';
      } else if (scroll < target) {
        navbarModal.style.display = 'block';
        buttonNavbar.style.display = 'none';
      }
    });

    ScrollTrigger.defaults({ scroller: domScroll });

    const update = (time) => {
      lenisRef.current?.raf(time * 1300);
    };

    gsap.ticker.add(update);

    return () => {
      if (lenisRef.current) lenisRef.current.destroy();
      gsap.ticker.remove(update);
    };
  }, [pathName]);
};


