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


function About({wftState}) {
  console.log('============== ABOUT PAGE')
  const propsForGsap = {
    wftState: wftState,
    scrollerRef: "#aboutpage"
  }
  return (
    <>
      <AboutPageStyled id="aboutpage">
        <HeroSection 
          propsForGsap={propsForGsap}
        backgroundImage={"/about/banner.webp"} backgroundSize={{ width: "130%", height: "auto" }}/> 
       
        <Intro/>
        <Advantage />
        <SectionTitleBlend   propsForGsap={propsForGsap}/>
        <Minded/>
        <Us/>
        <FooterSection  propsForGsap={propsForGsap} />

      </AboutPageStyled>

    </>

  )
}


export default About