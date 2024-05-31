"use client"
import { memo } from 'react';
import React from 'react'
import styled from 'styled-components';
import WorkPage from '@/components/new/modules/WorkPage';
import FAQSection from '@/components/new/FAQSection';
const WorkPageStyled = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top:0;
left:0;


`;


function Work() {
  console.log('============== WORK PAGE')

  return (
    <>
    <WorkPageStyled id="workpage" >
   {/*    <ProjectsSection /> */}

      <WorkPage/>
    </WorkPageStyled>
    </>

  )
}

export default memo(Work);