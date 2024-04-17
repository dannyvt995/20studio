"use client"

import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import NavbarSection from '@/components/NavbarSection';
import WorkSection from '@/components/WorkSection';
import Aboutusintro from '@/components/AboutusIntro';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
    return (

        <>
          
            <HeroBanner hero_img={data["homepage"]["hero_image"]} />
            <WorkSection />
            <Aboutusintro backgroundClass={'light_background'} />
            <Aboutusintro backgroundClass={'dark_background'} />
            <FooterSection />
        </>
    )
}