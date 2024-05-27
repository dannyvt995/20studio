"use client"

import { memo } from 'react';
import AboutContentLarge from '@/components/old/AboutContentLarge';
import React, { Suspense } from 'react'
import styled from 'styled-components';
import bannerHomeImg from '../../../public/home/banner.webp';
import HeroBanner from '@/components/old/HeroBanner';
import WorkSection from '@/components/old/WorkSection';
import FAQSection from '@/components/old/FAQSection';
import OurPartners from '@/components/new/OurPartners';
import FooterSection from '@/components/new/FooterSection'
import HeroSection from '@/components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop';
import ContactPageIntro from '@/components/new/ContactPageIntro';
import LetContact from '@/components/new/LetContact';
const HomePageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

`;


function Home() {
  console.log('============== HOME PAGE')

  return (
    <>
      <HomePageStyled id="homepage" >
     
        <HeroSection backgroundImage={"/home/banner.png"} backgroundSize={{ width: "auto", height: "100%" }}/> 
         <div style={{height:"350vh"}}> {/* lazy load and get exacly height dom for lenis */}
         <ServicesSection/>
         </div>
      <LetContact/>
        <FooterSection />
      </HomePageStyled>
   
    </>

  )
}



export default memo(Home);