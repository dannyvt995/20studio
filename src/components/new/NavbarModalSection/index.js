"use client"
import Image from 'next/image'
import React from 'react'
import './style.css'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';
export default function NavbarModalSection({handleRedirect}) {
    console.log("NavbarModalSection")
    const handleClick = (e) => {
        if (handleRedirect) {
            handleRedirect(e);
        }
    };
  return (
    <section id='navbar_modal_section'>
        <div className='wrapper'id="w_navbarModal">
            <div className='container'id="navbarModal">
                <ul className='images'>
                    <li>
                        <Image src="/clone/navbar-modal.webp" width={0}  height={0} sizes="100vw" style={{width:"100%",height:"auto"}} alt="logo narbar modal" />
                    </li>
                </ul>
                <ul className='main'>
                    <li className='main-link'>
                        <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/work" classStyle="main-line">Dự án</ButtonHoverUnderLineNew>
                    </li>
                    <li className='main-link'>
                        <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/about" classStyle="main-line">20 Studio</ButtonHoverUnderLineNew>
                    </li>
                    <li  className='main-link'>
                    <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/home" classStyle="main-line">Dịch vụ</ButtonHoverUnderLineNew>
                    </li>
                    <li  className='main-link'>
                    <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/contact" classStyle="main-line">Liên hệ</ButtonHoverUnderLineNew>
                    </li>
                </ul>
                <ul className='social'>
                    <li className='social-link'><a className='link-item'>Facebook</a></li>
                    <li className='social-link'><a className='link-item'>Instagram</a></li>
                    <li className='social-link'><a className='link-item'>Linked</a></li>
                </ul>
                <ul className='sub'></ul>
            </div>
        </div>
    </section>
  )
}
