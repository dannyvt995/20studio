"use client"
import {useRef,useEffect} from 'react'
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import VirtualScroll from 'virtual-scroll'
import NavbarSection from '@/components/NavbarSection';
import WorkSection from '@/components/WorkSection';

export default function HomePage() {
    // const scrollPos = useRef(0);
    // const previousY = useRef(0);
    // const lerpFactor = 0.1; // Adjust this value for the desired smoothness

    // useEffect(() => {
    //     const scroller = new VirtualScroll();
    //     const heroSection = document.getElementById("hero_banner_section")

    //     scroller.on(event => {
    //         scrollPos.current = Math.abs(event.y);
    //     });

    //     console.log(scroller)

    //     function updateScroll() {

    //         const interpolatedY = previousY.current + (scrollPos.current - previousY.current) * lerpFactor;
    //         previousY.current = interpolatedY ;
    //         if(heroSection && previousY.current > 0.0000000001 ) heroSection.style.transform = `translateY(${-(interpolatedY)}px)`;
          

    //         requestAnimationFrame(updateScroll);
    //     }
        
    //     requestAnimationFrame(updateScroll);

    //     return () => {
    //         scroller.destroy(); // Cleanup VirtualScroll when component unmounts
    //     };
    // }, []);
    return (

        <div className="page" id="home">
            <div className='scroll'>
                <NavbarSection />
                <HeroBanner hero_img={data["homepage"]["hero_image"]}/>
                <WorkSection/>
            </div>
        </div>
    )
}