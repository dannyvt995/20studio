"use client"
import { useRef, useEffect } from 'react'
import React from 'react'

import './style.css'
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew'



import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function HeroSection({ wftState, scrollerRef, backgroundImage, backgroundSize }) {
    const triggleSection = useRef(null)
    const backgroundImg = useRef(null)
    const timelineRef = useRef(null)


    useEffect(() => {
        if (wftState == 'entered') {
            gsap.registerPlugin(ScrollTrigger)

            console.log("Reinit/init scrolltriggle on component tổng FROM HeroSection")

            const ctx = gsap.context(() => {
                timelineRef.current = gsap.timeline()
                timelineRef.current.to(backgroundImg.current, {
                    y: window.innerHeight * .64, // calc(100vh * -1.2)
                    scrollTrigger: {
                        scroller: scrollerRef,
                        trigger: triggleSection.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,

                    }
                });
                return () => ctx.revert();
            });
        }
        return () => timelineRef.current?.kill()
    }, [wftState])
    return (
        <section className='hero_section dark_bg' id="hero_section" ref={triggleSection}>
            <div className='container'>
                <div className='text-1'>
                    <p className='intro'>
                        <span>20studio là một công ty thời trang toàn cầu</span>
                        <span>chuyên tạo ra sản phẩm độc đáo và phong cách</span>
                        <span>mang lại trải nghiệm đặc biệt và tinh tế cho khách hàng của mình.</span>
                    </p>
                    <h1 className='title'>
                        <span>Design</span>
                        <span>Fashion</span>
                        <span>Experience</span>
                    </h1>
                </div>
                <div className='text-2'>
                    <div className='body'>
                        <p><span className="">Tận dụng sự kết hợp giữa sự sáng tạo và kỹ thuật chuyên môn, chúng tôi cam kết mang đến những sản phẩm chất lượng cao và độc đáo, từ ý tưởng ban đầu đến sản phẩm hoàn thiện. Hãy để 20studio trở thành đối tác đáng tin cậy của bạn trong việc thúc đẩy sự thành công của thương hiệu thời trang của bạn.</span></p>

                    </div>

                    <Link className='link' href="/about">Về 20 Studio</Link>
                    <ul className="list1">
                        <li className="list-item">
                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" autoLink="/work" classStyle="list-link">Dự án</ButtonHoverUnderLineNew>
                        </li>
                        <li className="list-item">
                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" autoLink="/about" classStyle="list-link">20 Studio</ButtonHoverUnderLineNew>

                        </li>
                        <li className="list-item">

                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" autoLink="/" classStyle="list-link">Tin tức</ButtonHoverUnderLineNew>
                        </li>
                        <li className="list-item">

                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" autoLink="/contact" classStyle="list-link">Liên hệ</ButtonHoverUnderLineNew>
                        </li>
                    </ul>
                    <ul className="list2">
                        <li className="list-item">
                            <a href="mailto:creatiflow.danny@gmail.com" className="list-link">
                                20stuido@gmail.com
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="tel:+389984639" className="list-link">
                                +012.34.6789
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='background' ref={backgroundImg}>
                <Image alt="d" src={`${backgroundImage}`} width={0} height={0} sizes="100vw" style={backgroundSize} />
            </div>
        </section>
    )
}
