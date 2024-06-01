"use client"
import React from 'react'
import styled from 'styled-components';
import { memo } from 'react';
import HeroSection from '@/components/new/HeroSection'

import FooterSection from '@/components/new/FooterSection'

import Intro from '@/components/new/Aboutus/Intro';
import Advantage from '@/components/new/Aboutus/Advantage';
import Minded from '@/components/new/Aboutus/Minded';
import Us from '@/components/new/Aboutus/Us';
import SectionTitleBlend from '@/components/new/SectionIntractive/SectionTitleBlend';


const AboutPageStyled = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top:0;
left:0;


`;


function About({stateTransitionPage}) {
  console.log('============== ABOUT PAGE',stateTransitionPage)
  const propsForGsap = {
    stateTransitionPage: stateTransitionPage,
    scrollerRef: "#aboutpage"
  }
  const propsHeroSection = {
    backgroundImage:"/about/banner.webp",
    backgroundSize:{ width: "105%", height: "auto" }
  }
  return (
    <>
      <AboutPageStyled id="aboutpage">
        <HeroSection 
          propsForGsap={propsForGsap}
          propsHeroSection={propsHeroSection}/> 
       
        <Intro/>

        {/* lazy load from here */}
        {/* lazy load from here */}
        {/* lazy load from here */}

        <Advantage />
        <SectionTitleBlend   propsForGsap={propsForGsap}/>
        <Minded/>
        <Us/>
        <FooterSection  propsForGsap={propsForGsap} />

      </AboutPageStyled>

    </>

  )
}


export default memo(About)