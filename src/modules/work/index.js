"use client"
import React from 'react'
import styled from 'styled-components';
import ProjectsSection from '@/components/ProjectsSection';
import WorkPage from '@/components/new/modules/WorkPage';
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop';

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
    <WorkPageStyled id="workpage" >
   {/*    <ProjectsSection /> */}
  
      <WorkPage/>
    </WorkPageStyled>
    </>

  )
}
