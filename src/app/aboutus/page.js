import HeroBanner from '@/modules/HeroBanner';
import React from 'react';
import data from '@/data/data.json'
import Aboutusintro from '@/components/AboutusIntro';
import AboutusDetail from '@/components/AboutusDetail/page';
import FooterSection from '@/components/FooterSection';

const AboutUs = () => {
  
    return (
        <>
            <HeroBanner pageName="aboutus" hero_img={data["page1"]["hero_image"]}/>
            <Aboutusintro backgroundClass={'light_background'}/>
            
            <FooterSection idWrapperScroll="#page2scroll" backgroundClass={'dark_background'} />
        </>
          
     
    );
}
export default React.memo(AboutUs);

