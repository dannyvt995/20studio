
"use client"

import { useEffect, useRef } from 'react'
import './style.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';


export default function FooterSection({ propsForGsap }) {
    const triggleSection = useRef(null)
    const domEffect = useRef(null)
    const timelineRef = useRef(null)

    useEffect(() => {
        if ( propsForGsap.stateTransitionPage === 'entered') {
          
            if(window.innerWidth < 620) return
            gsap.registerPlugin(ScrollTrigger)
            console.log("\t\t=>Reinit/init scrolltriggle on component FooterSection")

            const ctx = gsap.context(() => {
                timelineRef.current = gsap.timeline({
                    scrollTrigger: {
                        scroller: propsForGsap.scrollerRef,
                        trigger: triggleSection.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true
                    }
                })
                timelineRef.current.set(domEffect.current, { y: -window.innerHeight * .5 }).fromTo(domEffect.current, {
                    y: -window.innerHeight * .5, // calc(100vh * -1.2)

                }, { y: 0 })
                return () => ctx.revert()
            });

        }else{
            console.log("\t\t=>Lock Gsap until onEnterd",propsForGsap.scrollerRef)
        }
      
        return () => {
            timelineRef.current?.kill()
            timelineRef.current = null
        }
    }, [propsForGsap])
    return (
        <section className='footer_section' id="footer_section" ref={triggleSection}>
            <div className='container' ref={domEffect}>
                <div className='title'>
                    <div>Our</div>
                    <div>Story</div>
                </div>
                <p className='body'>20Studio mong muốn đồng hành cùng bạn và tạo ra những sản phẩm chất lượng nhất với giá thành cạnh tranh theo đúng thời hạn cam kết.</p>
                <div className='divider'></div>
                <ul className='address'>
                    <li className="item">
                        <a >
                            30 Lý Chính Thắng<br />
                            P. Võ Thị Sáu<br />
                            Quận 3, HCM.

                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            vphcm@20studio.com
                        </a>
                    </li>
                </ul>
                <ul className='nav_footer'>
                    <li className="item">
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/work" >Dự án</ButtonHoverUnderLineNew>
                    </li>
                    <li className='item'>
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/about" classStyle="list-link">20 Studio</ButtonHoverUnderLineNew>
                    </li>
                    <li className='item'>
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/home" classStyle="list-link">Dịch vụ</ButtonHoverUnderLineNew>
                    </li>
                    <li className='item'>
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/contact" classStyle="list-link">Liên hệ</ButtonHoverUnderLineNew>
                    </li>
                </ul>
                <ul className='social'>
                    <li className='item'>
                        <a>
                            Facebook
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Instagram
                        </a>
                    </li>
                </ul>
                <a className="link">
                    <div className="wrap">
                        <div className="circle" >
                            Về chúng tôi
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
