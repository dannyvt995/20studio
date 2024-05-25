"use client"
import AboutContentLarge from '@/components/AboutContentLarge';
import React, { Suspense } from 'react'
import styled from 'styled-components';
import bannerHomeImg from '../../../public/home/banner.webp';
import HeroBanner from '@/components/HeroBanner';
import WorkSection from '@/components/WorkSection';
import FAQSection from '@/components/FAQSection';
import OurPartners from '@/components/new/OurPartners';
import FooterSection from '@/components/new/FooterSection'
import HeroSection from '@/components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop';
const HomePageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

`;


export default function Home({handleRedirect}) {
  console.log('============== HOME PAGE')

  return (
    <>
      <HomePageStyled id="homepage" >
     
        <HeroSection/> 
         <div style={{height:"350vh"}}> {/* lazy load and get exacly height dom for lenis */}
         <ServicesSection/>
         </div>
   
        <FooterSection />
      </HomePageStyled>
   
    </>

  )
}
