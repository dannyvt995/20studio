import HeroBanner from '@/modules/HeroBanner';
import React from 'react';
import data from '@/data/data.json'
import Aboutusintro from '@/components/AboutusIntro';
import AboutContentLarge from '@/components/AboutContentLarge';
import AboutusDetail from '@/components/AboutusDetail/page';
import FooterSection from '@/components/FooterSection';

const AboutUs = () => {
  
    return (
        <>
            <HeroBanner pageName="aboutus" hero_img={data["page1"]["hero_image"]}/>
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
export default React.memo(AboutUs);

