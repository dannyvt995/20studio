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


function Contact({ stateTransitionPage }) {
  console.log('============== CONTACT PAGE')
  const propsForGsap = {
    stateTransitionPage: stateTransitionPage,
    scrollerRef: "#contactpage"
  }
  return (
    <>
      <ContactPageStyled id="contactpage">
        <ContactPageIntro />
        <FooterSection propsForGsap={propsForGsap } />
      </ContactPageStyled>
    </>

  )
}

export default memo(Contact);