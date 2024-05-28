"use client"
import React, { useRef } from 'react'
import styled from 'styled-components';
import { memo } from 'react';
import HeroSection from '@/components/new/HeroSection'
import ServicesSection from '@/components/new/ServicesSection'
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop'
import FooterSection from '@/components/new/FooterSection'
import NavbarModalSection from '@/components/new/NavbarModalSection'
import ButtonMenu from '@/components/new/ButtonMenu'
import LetContact from '@/components/new/LetContact'
import WorkPage from '@/components/new/modules/WorkPage'
import DetailWorkPage from '@/components/new/modules/DetailWorkPage'
import ProjectText from '@/components/new/ProjectText'
import Banner_DetailWorkPage from '@/components/new/DetailWorkPage/components/Banner_DetailWorkPage'
import ContactPageIntro from '@/components/new/ContactPageIntro'
import Aboutusintro from '@/components/old/AboutusIntro';
import Intro from '@/components/new/Aboutus/Intro';
import Advantage from '@/components/new/Aboutus/Advantage';
import Minded from '@/components/new/Aboutus/Minded';
import Us from '@/components/new/Aboutus/Us';
const AboutPageStyled = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top:0;
left:0;


`;


function About({ handleRedirect }) {
  console.log('============== ABOUT PAGE')
  const scrollerRef = useRef()
  return (
    <>
      <AboutPageStyled id="aboutpage">
        <HeroSection backgroundImage={"/about/banner.webp"} backgroundSize={{ width: "130%", height: "auto" }}/> 
       
        <Intro/>
        <Advantage/>
        <Minded/>
        <Us/>
        <FooterSection scrollerRef={scrollerRef.current}/>

      </AboutPageStyled>

    </>

  )
}


export default memo(About);