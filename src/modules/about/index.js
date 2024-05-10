"use client"
import React from 'react'
import styled from 'styled-components';
import bannerAboutusImg from '../../../public/about/banner.webp';
import HeroBanner from '@/components/HeroBanner';
import AboutContentLarge from '@/components/AboutContentLarge';
import FooterSection from '@/components/FooterSection';
import AboutusDetail from '@/components/AboutusDetail/page';
import Aboutusintro from '@/components/AboutusIntro';


const AboutPageStyled = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top:0;
left:0;


`;


export default function About({handleRedirect}) {
  console.log('============== ABOUT PAGE')
  return (
    <>
      <AboutPageStyled id="aboutpage" style={{filter: 'brightness(100%)'}}>

        <HeroBanner scroller={"#aboutpage"} pageName="aboutpage" hero_img={bannerAboutusImg} />
        <Aboutusintro scroller={'#aboutpage'} backgroundClass={'light_background'}/>
           <AboutusDetail />
        <AboutContentLarge
          backgroundClass1={'light_background'}
          backgroundClass2={'dark_background'}
          backgroundClass3={'light_background'} /> 
   {/* 
   
            
        */}
            <FooterSection handleRedirect={handleRedirect} scroller={'#aboutpage'} backgroundClass={'dark_background'} /> 
      </AboutPageStyled>

    </>

  )
}
