"use client"
import React from 'react'
import styled from 'styled-components';
import ProjectsSection from '@/components/ProjectsSection';

const WorkPageStyled = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top:0;
left:0;


`;


export default function Work({handleRedirect}) {
  console.log('============== WORK PAGE')
  return (
    <>
    <WorkPageStyled id="workpage" style={{filter: 'brightness(100%)'}}>
      <ProjectsSection />
    </WorkPageStyled>
    </>

  )
}
