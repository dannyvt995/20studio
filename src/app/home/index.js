"use client"
import React from 'react'
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import NavbarSection from '@/components/NavbarSection';
import WorkSection from '@/components/WorkSection';
import Aboutusintro from '@/components/AboutusIntro';
import FooterSection from '@/components/FooterSection';

const HomePage = () => {
    console.log('HomePage RENDER')

   
    return (
        <>
            <HeroBanner   pageName="home"  hero_img={data["homepage"]["hero_image"]} />
            <WorkSection />
            <FooterSection idWrapperScroll="#homescroll" backgroundClass={'dark_background'}/>
        </>
    )
}
export default React.memo(HomePage);