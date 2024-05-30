
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimationHeading = () => {
  
  let Scope
  let Triggle
  let ListDom
  let Timeline

  const animateHeading = () => {
    Scope = Array.from(document.querySelectorAll(".project_text"));
 
    Scope.forEach((element) => {
      ListDom = Array.from(element.querySelectorAll(".title-line"));
      Triggle = element.querySelector(".title")
     
  
  
      Timeline = gsap.timeline({
       scrollTrigger: {
        scroller: "#work1page",
        trigger: Triggle,
        start: "top 80%",
        end: "bottom 42%",
  
        scrub: true
       }
      }).to(ListDom, { y: 0, stagger: 0.1 }, 0);
  
   
    })
  }
  const cleanupAnimateHeading = () => {
    Scope = null
    Triggle= null
    ListDom= null
    Timeline.kill()
    Timeline = null
  };

  return { animateHeading, cleanupAnimateHeading };
};
export default useAnimationHeading

