import React from 'react'
import './style.css'
import HeroSection from '@/components/new/HeroSection'
import ServicesSection from '@/components/new/ServicesSection'
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop'
import FooterSection from '@/components/new/FooterSection'
import NavbarModalSection from '@/components/new/NavbarModalSection'
import ButtonMenu from '@/components/new/ButtonMenu'
import LetContact from '@/components/new/LetContact'
import WorkPage from '@/components/new/modules/WorkPage'
import ProjectText from '@/components/new/ProjectText'
import Banner_DetailWorkPage from '@/components/new/DetailWorkPage/components/Banner_DetailWorkPage'
export default function page() {
    return (
        <>  
        <Banner_DetailWorkPage/>
            <ProjectText/>
            <WorkPage/>
            <LetContact/>
            <ButtonMenu/>
            <NavbarModalSection/>
            <NavbarSectionDeskop/>
            <HeroSection/>
            <ServicesSection/>
            <FooterSection/>
        </>
    )
}
