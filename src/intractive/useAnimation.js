import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useRef } from 'react';


export default function useAnimation({
  trigger,
  initAnimation,
  playAnimation,
  start,
  horizontal,
  markers,
}) {
  

let trl
  const onHandleAnimation = contextSafe(() => {
    trl = ScrollTrigger.create({
        trigger: trigger.current,
        onEnter: () => playAnimation(),
        start: start || `top+=${calcTheshold}% bottom`,
        horizontal,
        once: true,
        markers,
      });

    return () => {
      if (trl) {
        trl.kill();
      } 
    };
  });
  onHandleAnimation()
}
