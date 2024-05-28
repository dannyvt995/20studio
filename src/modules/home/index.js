"use client"

import { memo, useEffect, useRef } from 'react';
import React from 'react'
import styled from 'styled-components';
import FooterSection from '@/components/new/FooterSection'
import HeroSection from '@/components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
import LetContact from '@/components/new/LetContact';
import FAQSection from '@/components/new/FAQSection';
import PartnersSection from '@/components/new/PartnersSection';



const HomePageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

`;
const Triggle = styled.div`
 position:relative;
 width:100%;
 height:100vh;


`;
const Span = styled.div`
 position:absolute;
 width:200px;
 height:200px;
 top:70%;
 transform:translateY(-50%);
  left:200px;
  background:blue;
  border: 2px solid green;
 
`;
function Home() {
  console.log('============== HOME PAGE')
  const scrollerRef = useRef(null)
  return (
    <>
      <HomePageStyled id="homepage" ref={scrollerRef}>
       
        <HeroSection scrollerRef={scrollerRef.current} backgroundImage={"/home/banner.png"} backgroundSize={{ width: "auto", height: "100%" }} />
        <div className="white_bg" style={{ height: "200vw" }}> {/* lazy load and get exacly height dom for lenis */}
          <ServicesSection />
        </div>
        <FAQSection/>
        <PartnersSection/>
        <LetContact />
        <FooterSection scrollerRef={scrollerRef.current}/>
      </HomePageStyled>

    </>

  )
}




export default memo(Home);