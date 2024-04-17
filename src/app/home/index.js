"use client"
import { useRef, useEffect } from 'react'
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import VirtualScroll from 'virtual-scroll'
import NavbarSection from '@/components/NavbarSection';
import WorkSection from '@/components/WorkSection';
import Aboutusintro from '@/components/AboutusIntro';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
    const scrollPos = useRef(0);
    const previousY = useRef(0);
    const lerpFactor = 0.08; // Adjust this value for the desired smoothness

    /*  useEffect(() => {
         const scroller = new VirtualScroll();
         const heroSection = document.getElementById("hero_banner_section")
         const listSection = document.querySelectorAll('.sametime')
         scroller.on(event => {
             scrollPos.current = Math.abs(event.y);
         });
      
         console.log(listSection)
         function updateScroll() {
             let val = 1
           
             const interpolatedY = previousY.current + (scrollPos.current - previousY.current) * lerpFactor;
            
             previousY.current = interpolatedY  ;
      
             let aa = interpolatedY
             aa /= 100
             console.log(aa)
             if(heroSection  && section1 && previousY.current > 0.0000000001 ) {
                 heroSection.style.transform = `translateY(-${(interpolatedY)}px)`;
                 for (let i = 0; i < listSection.length; i++) {
                     listSection[i].style.transform = `translateY(-${(interpolatedY)}px)`;
                 }
             }
           
 
             requestAnimationFrame(updateScroll);
         }
         
         requestAnimationFrame(updateScroll);
 
         return () => {
             scroller.destroy(); // Cleanup VirtualScroll when component unmounts
         };
     }, []); */


    return (

        <div className="page" id="home" >

            <NavbarSection />

            <HeroBanner hero_img={data["homepage"]["hero_image"]} />
            <WorkSection/>
            <Aboutusintro backgroundClass={'light_background'} />
            <Aboutusintro backgroundClass={'dark_background'} />
        </div>
    )
}