"use client"
import Image from 'next/image'
import React, { memo, useEffect, useRef } from 'react'
import './style.css'
import gsap from 'gsap'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';
import useStoreZustand from "@/hooks/useStoreZustand";

function gsapSlider({ nextState, prevState, navbarModalImages, indexOfSlider }) {

    indexOfSlider.current++;

    gsap.timeline()
        .set(navbarModalImages[nextState], { zIndex: indexOfSlider.current++, opacity: 0, rotate: 5, scale: 1 })
        .to(
            navbarModalImages[nextState], {
            opacity: 1,
            rotate: 0,
            scale: 1.1,
            duration: .5,
            ease: "power3.out",

        }
        ).set(navbarModalImages[prevState], {
            clearProps: "opacity,rotate,scale"
        })

}
function NavbarModalSection({ handleRedirect }) {
    const indexOfSlider = useRef(5)
    const sliderImage = useRef(null)
    const { indexItemNavbar, prevIndexItemNavbar } = useStoreZustand();

    const handleClick = (e) => {
        if (handleRedirect) {
            handleRedirect(e);
        }
    };
    const navbarModalImages = useRef([])
    useEffect(() => {
        navbarModalImages.current = Array.from(sliderImage.current.querySelectorAll('li'))
        return () => {
            navbarModalImages.current = null
        }
    }, [sliderImage])
    useEffect(() => {

        if (indexItemNavbar >= 0 && prevIndexItemNavbar >= 0) {

            
            gsapSlider({
                navbarModalImages: navbarModalImages.current,
                nextState: indexItemNavbar,
                indexOfSlider: indexOfSlider
            })
        }



    }, [indexItemNavbar])
    return (
        <section id='navbar_modal_section'>
            <div className='wrapper' id="w_navbarModal">
                <div className='container' id="navbarModal">
                    <div className='logo'>
                        20 STUDIO
                    </div>
                    <ul className='images' ref={sliderImage}>
                        <li>
                            <Image src="/home/banner.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                        </li>
                        <li>
                            <Image src="/home/ser1.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                        </li>
                        <li>
                            <Image src="/home/ser2.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                        </li>
                        <li>
                            <Image src="/home/ser3.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                        </li>
                    </ul>
                    <ul className='main'>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew data_slider="0" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/work" classStyle="main-line">Dự án</ButtonHoverUnderLineNew>
                        </li>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew data_slider="1" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/about" classStyle="main-line">20 Studio</ButtonHoverUnderLineNew>
                        </li>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew data_slider="2" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/home" classStyle="main-line">Dịch vụ</ButtonHoverUnderLineNew>
                        </li>
                        <li className='main-link'>
                            <ButtonHoverUnderLineNew data_slider="3" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/contact" classStyle="main-line">Liên hệ</ButtonHoverUnderLineNew>
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
export default memo(NavbarModalSection)