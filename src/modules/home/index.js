"use client"

import { memo, useRef } from 'react';
import React from 'react'
import styled from 'styled-components';
import FooterSection from '@/components/new/FooterSection'
import HeroSection from '@/components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
import LetContact from '@/components/new/LetContact';
import FAQSection from '@/components/new/FAQSection';




const HomePageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

`;



function Home({ wftState }) {
  console.log('============== HOME PAGE')

  const propsForGsap = {
    wftState: wftState,
    scrollerRef: "#homepage"
  }
  return (
    <>
      <HomePageStyled id="homepage" >
       
        <HeroSection
          propsForGsap={propsForGsap}
          backgroundImage={"/home/banner.png"} backgroundSize={{ width: "auto", height: "100%" }} />
      
  <ServicesSection />
        <FAQSection />
        <LetContact  propsForGsap={propsForGsap} />
        
        <FooterSection   propsForGsap={propsForGsap} />
      </HomePageStyled>

    </>

  )
}




export default Home;