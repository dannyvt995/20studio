import HeroBanner from '@/modules/HeroBanner';
import React from 'react';
import data from '@/data/data.json'
import Aboutusintro from '@/components/AboutusIntro';
import AboutContentLarge from '@/components/AboutContentLarge';
import AboutusDetail from '@/components/AboutusDetail/page';
import FooterSection from '@/components/FooterSection';

const AboutUs = ({heroImg}) => {
  
    return (
        <>
            {/* HOW CACHE IT? */}
            <HeroBanner pageName="aboutus" hero_img={heroImg}/>


            {/* NEED  RENDER LAZY */}
            <Aboutusintro backgroundClass={'light_background'}/>
            <AboutusDetail />
            <AboutContentLarge 
            backgroundClass1={'light_background'}
            backgroundClass2={'dark_background'}
            backgroundClass3={'light_background'}
            />
            <FooterSection idWrapperScroll="#page2scroll" backgroundClass={'dark_background'} />
        </>
          
     
    );
}
export default AboutUs

