"use client"
import React from 'react'
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import NavbarSection from '@/components/NavbarSection';
import WorkSection from '@/components/WorkSection';
import Aboutusintro from '@/components/AboutusIntro';
import FooterSection from '@/components/FooterSection';
import FAQSection from '@/components/FAQSection';
import OurPartners from '@/components/OurPartners';

const HomePage = ({heroImg , handleRedirect}) => {
    console.log('HomePage RENDER')

   
    return (
        <>
            <HeroBanner handleRedirect={handleRedirect}  pageName="home"  hero_img={heroImg} />
            <WorkSection />
            <FAQSection backgroundClass={'light_background'}/>
            <OurPartners backgroundClass={'light_background'}/>
            <FooterSection handleRedirect={handleRedirect} idWrapperScroll="#homescroll" backgroundClass={'dark_background'}/>
        </>
    )
}
export default HomePage;