"use client"
import { useEffect, useRef } from 'react'
import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function SectionTitleBlend({ propsForGsap }) {
    const WrapperTitleBlendRed = useRef(null)
    const timelineRef = useRef(null)
    // x 0% > 20%
    useEffect(() => {
        if (propsForGsap.wftState === 'entered') {
            if (window.innerWidth < 620) return
            gsap.registerPlugin(ScrollTrigger)
            console.log("Reinit/init scrolltriggle on component tổng FROM child Dom of Aboutus")

            const ctx = gsap.context(() => {
                timelineRef.current = gsap.timeline({
                    scrollTrigger: {
                        scroller: propsForGsap.scrollerRef,
                        trigger: WrapperTitleBlendRed.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: .95
                    }
                })
                timelineRef.current.fromTo(WrapperTitleBlendRed.current.children[0].children[0],{
                    x:"60%"
                },
                {
                    x: "-60%"
                })
                return () => {
                    ctx.revert();
                    timelineRef.current?.kill()
                    timelineRef.current = null
                    WrapperTitleBlendRed.current = null
                }
            });

        }
    }, [propsForGsap.wftState])
    return (
        <div className='section_title_blend' ref={WrapperTitleBlendRed}>
             <div className='warpper_title'>
                <div className="title" >
                        Forever Upwards Fover Alone
                </div>
             </div>
        </div>
    )
}
