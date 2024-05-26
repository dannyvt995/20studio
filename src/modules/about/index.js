"use client"
import React from 'react'
import styled from 'styled-components';

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
const AboutPageStyled = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top:0;
left:0;


`;


export default function About({ handleRedirect }) {
  console.log('============== ABOUT PAGE')
  return (
    <>
      <AboutPageStyled id="aboutpage">
        <Banner_DetailWorkPage />
        <DetailWorkPage />
        <ContactPageIntro />

        <ProjectText />
        <WorkPage />
        <LetContact />


        <ServicesSection />
        <FooterSection />

      </AboutPageStyled>

    </>

  )
}
