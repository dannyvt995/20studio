"use client"
import { memo } from 'react';
import ContactSection from '@/components/old/ContactSection';
import ContactPageIntro from '@/components/new/ContactPageIntro';
import FooterSection from '@/components/new/FooterSection'
import LetContact from '@/components/new/LetContact';
import React from 'react'
import styled from 'styled-components';


const ContactPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

  
`;


function Contact({handleRedirect}) {
  
  return (
    <>
    <ContactPageStyled id="contactpage" >
      <ContactPageIntro/>
      <LetContact/>
      <FooterSection/>
    </ContactPageStyled>
    </>
   
  )
}

export default memo(Contact);