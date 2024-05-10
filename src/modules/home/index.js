"use client"
import AboutContentLarge from '@/components/AboutContentLarge';
import React from 'react'
import styled from 'styled-components';
import bannerHomeImg from '../../../public/home/banner.webp';
import HeroBanner from '@/components/HeroBanner';
import WorkSection from '@/components/WorkSection';
import FooterSection from '@/components/FooterSection';
import FAQSection from '@/components/FAQSection';
import OurPartners from '@/components/OurPartners';
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
      <HomePageStyled id="homepage" style={{filter: 'brightness(100%)'}}>
        <HeroBanner  scroller={"#homepage"} pageName="homepage" hero_img={bannerHomeImg} />
        <WorkSection  scroller={"#homepage"}/>
        <FAQSection backgroundClass={'light_background'} />
        <OurPartners backgroundClass={'light_background'} />
        <FooterSection handleRedirect={handleRedirect} scroller={"#homepage"} backgroundClass={'dark_background'} />
      </HomePageStyled>
    </>

  )
}
