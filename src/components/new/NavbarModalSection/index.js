"use client"
import Image from 'next/image'
import React from 'react'
import './style.css'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';
export default function NavbarModalSection({handleRedirect}) {
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
                  {/*   <ButtonHoverUnderLineNew noName={"var(--font-lh-h2)"} autoLink={"/work"} classStyle="main-line">Dự án(RD)</ButtonHoverUnderLineNew> */}
                     <a  onClick={handleClick}  data_link="/work" className='main-line'>Dự án</a>
                    </li>
                    <li className='main-link'>
                        <a  onClick={handleClick}  data_link="/about" className='main-line'>20Studo</a>
                    </li>
                    <li  className='main-link'>
                        <a onClick={handleClick}  data_link="/home" className='main-line'>Servicers</a>
                    </li>
                    <li  className='main-link'>
                        <a onClick={handleClick}  data_link="/contact" className='main-line'>Contact</a>
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
