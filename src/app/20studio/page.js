import HeroBanner from '@/modules/HeroBanner';
import React from 'react';
import data from '@/data/data.json'
import Aboutusintro from '@/components/AboutusIntro';
import AboutusDetail from '@/components/AboutusDetail/page';
import FooterSection from '@/components/FooterSection';
const Page = () => {
    return (
        <>
               <HeroBanner hero_img={data["homepage"]["hero_image"]}/>
            <Aboutusintro backgroundClass={'light_background'}/>
            <AboutusDetail/>
            <Aboutusintro backgroundClass={'light_background'}/>
            <Aboutusintro backgroundClass={'dark_background'}/>
            <Aboutusintro backgroundClass={'light_background'}/>
            <FooterSection backgroundClass={'dark_background'} />
        </>
    );
}

export default Page;
