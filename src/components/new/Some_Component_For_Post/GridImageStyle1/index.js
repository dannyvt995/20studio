"use client"
import {useEffect,useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css'
import Image from 'next/image'
export default function GridImage1({ propsForGsap }) {
    const triggleSection = useRef(null)
    const domEffectTop = useRef(null)
    const domEffectBot = useRef(null)
    const timelineRef = useRef(null)

    useEffect(() => {
        if ( propsForGsap.stateTransitionPage === 'entered') {
            if(window.innerWidth < 620) return
            gsap.registerPlugin(ScrollTrigger)
            console.log("Reinit/init scrolltriggle on component child on FooterSection")

            const ctx = gsap.context(() => {
                timelineRef.current = gsap.timeline({
                    scrollTrigger: {
                        scroller: propsForGsap.scrollerRef,
                        trigger: triggleSection.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                })
                timelineRef.current
                .set(domEffectBot.current,{x:-500})
                .to(domEffectTop.current,{
                    x: -200
                }).to(domEffectBot.current,{
                    x: 0
                },"<")
                return () => {
                    ctx.revert();
                    timelineRef.current?.kill()
                    timelineRef.current = null
                    triggleSection.current = null
                    domEffectBot.current = null
                    domEffectTop.current = null
                }
            });

        }
    }, [propsForGsap])
    return (
        <section className='GridImage1' ref={triggleSection}>
            <div className='container'>
                <div className='row' ref={domEffectTop}>
                    <div className='media'>
                        <Image alt="alt" src="/clone/detail-work-page/grid11.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className='media'>
                        <Image alt="alt" src="/clone/detail-work-page/grid12.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className='media'>
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/996bf1f53a/columbia-pictures-grid-03-superbad.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='media'>
                        <Image alt="alt" src="/clone/detail-work-page/grid14.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
                <div className='row' ref={domEffectBot}>
                    <div className='media'>
                        <Image alt="alt" src="/clone/detail-work-page/grid15.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>

                    <div className='media'>
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/61193bb86f/columbia-pictures-grid-06-spiderman.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='media'>
                        <Image alt="alt" src="/clone/detail-work-page/grid17.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className='media'>
                        <Image alt="alt" src="/clone/detail-work-page/grid18.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
