"use client"
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import React from 'react'
import styled from 'styled-components';


const ContactPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

  
`;


export default function Contact({handleRedirect}) {
  
  return (
    <>
    <ContactPageStyled id="contactpage" style={{filter: 'brightness(100%)'}}>
      <ContactSection />

      <FooterSection handleRedirect={handleRedirect}  scroller={"#contactpage"} backgroundClass={'dark_background'}/>
    </ContactPageStyled>
    </>
   
  )
}
