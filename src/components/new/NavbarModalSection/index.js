"use client"
import Image from 'next/image'
import React from 'react'
import './style.css'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';
export default function NavbarModalSection({ handleRedirect }) {
    console.log("NavbarModalSection")
    const handleClick = (e) => {
        if (handleRedirect) {
            handleRedirect(e);
        }
    };
    return (
        <section id='navbar_modal_section'>
            <div className='wrapper' id="w_navbarModal">
                <div className='container' id="navbarModal">
                    <div className='logo'>
                        20 STUDIO
                    </div>
                    <ul className='images'>
                        <li>
                            <Image src="/home/banner.webp" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                        </li>
                    </ul>
                    <ul className='main'>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/work" classStyle="main-line">Dự án</ButtonHoverUnderLineNew>
                        </li>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/about" classStyle="main-line">20 Studio</ButtonHoverUnderLineNew>
                        </li>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/home" classStyle="main-line">Dịch vụ</ButtonHoverUnderLineNew>
                        </li>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/contact" classStyle="main-line">Liên hệ</ButtonHoverUnderLineNew>
                        </li>
                    </ul>
                    <ul className='social'>
                        <li className='social-link'>
                        <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/" classStyle="link-item">Facebook</ButtonHoverUnderLineNew>
                            
                            </li>
                        <li className='social-link'>
                        <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/" classStyle="link-item">Instagram</ButtonHoverUnderLineNew>
                        </li>
                        <li className='social-link'>
                        <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/" classStyle="link-item">Linked</ButtonHoverUnderLineNew>
                          </li>
                    </ul>
                    <ul className="sub">
                        <li className="sub-link">
                            <span className="link-item is-reel">
                                Made by 20 Team
                            </span>
                        </li>
                        <li className="sub-link">
                            <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/about" classStyle="link-item">Về chúng tôi</ButtonHoverUnderLineNew>
                        </li>
                    </ul>
                </div>
               
            </div>
        </section>
    )
}
