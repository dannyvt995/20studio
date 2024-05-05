"use client"
import React from 'react'
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import NavbarSection from '@/components/NavbarSection';
import WorkSection from '@/components/WorkSection';
import Aboutusintro from '@/components/AboutusIntro';
import FooterSection from '@/components/FooterSection';

const HomePage = ({heroImg , handleRedirect}) => {
    console.log('HomePage RENDER')

   
    return (
        <>
            <HeroBanner handleRedirect={handleRedirect}  pageName="home"  hero_img={heroImg} />
            <WorkSection />
            <FooterSection handleRedirect={handleRedirect} idWrapperScroll="#homescroll" backgroundClass={'dark_background'}/>
        </>
    )
}
export default HomePage;