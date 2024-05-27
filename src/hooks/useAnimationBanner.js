

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const useAnimationBanner = ({scrollerRef,triggleSection, background}) => {
  /*   if (!triggerRef || !targetBg || !targetHead) {
        console.warn("Missing triggerRef || targetBg || targetHead  missing in useAnimationBanner");
        return;
    }
    const timelineSection = gsap.timeline({
        scrollTrigger: {
            trigger: targetBg,
            start: 'top top',
            end: 'bottom top',
           // markers: true,
            scrub: true,
        }
    });

    timelineSection.to(targetBg, {
        backgroundPositionY: '120%'
    }).to(targetHead, {
        y:-400
    }, '<');
 */
    const ctx = gsap.context(() => {
        gsap.from(background, {
          y: -1000,
          scrollTrigger: {
            scroller: scrollerRef,
            trigger: triggleSection,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers:true,
            
          }
        });
        return () => ctx.revert();
      });

};

export default useAnimationBanner;
