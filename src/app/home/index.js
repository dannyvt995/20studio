"use client"
import {useRef,useEffect} from 'react'
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

    useEffect(() => {
        const scroller = new VirtualScroll();
        const heroSection = document.getElementById("hero_banner_section")
        const section1 = document.getElementById("section1")
        const section2 = document.getElementById("section2")
        scroller.on(event => {
            scrollPos.current = Math.abs(event.y);
        });

     

        function updateScroll() {

            const interpolatedY = previousY.current + (scrollPos.current - previousY.current) * lerpFactor;
            previousY.current = interpolatedY ;


            console.log(interpolatedY)
            if(heroSection  && section1 && previousY.current > 0.0000000001 ) {
                heroSection.style.transform = `translateY(${(-interpolatedY)}px)`;
                section1.style.transform = `translateY(${(-interpolatedY)}px)`;
                section2.style.transform = `translateY(${(-interpolatedY)}px)`;
            }
          

            requestAnimationFrame(updateScroll);
        }
        
        requestAnimationFrame(updateScroll);

        return () => {
            scroller.destroy(); // Cleanup VirtualScroll when component unmounts
        };
    }, []);
    return (

        <div className="page" id="home">
            <div className='scroll'>
                <NavbarSection />
               
                <HeroBanner hero_img={data["homepage"]["hero_image"]}/>
                <section className='section1' id="section1">
                    Section1
                </section>
                <section className='section2' id="section2">
                    Section2
                </section>
             
                <WorkSection/>
            </div>
        </div>
    )
}