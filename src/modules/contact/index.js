"use client"
import { memo } from 'react';

import ContactPageIntro from '@/components/new/ContactPageIntro';
import FooterSection from '@/components/new/FooterSection'

import React from 'react'
import styled from 'styled-components';



const ContactPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;

  
`;


function Contact({wftState}) {
  console.log('============== CONTACT PAGE')

  return (
    <>
    <ContactPageStyled id="contactpage">
      <ContactPageIntro/>
      <FooterSection wftState={wftState} scrollerRef={"#contactpage"}/>
    </ContactPageStyled>
    </>
   
  )
}

export default Contact;