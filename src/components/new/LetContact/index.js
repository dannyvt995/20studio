
"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css'
import Image from 'next/image'
export default function LetContact({propsForGsap}) {
  const triggleSection = useRef(null)
  const domEffect = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
      if (propsForGsap.wftState && propsForGsap.scrollerRef && propsForGsap.wftState === 'entered') {
          if(window.innerWidth < 620) return
          gsap.registerPlugin(ScrollTrigger)
          console.log("Reinit/init scrolltriggle on component tổng FROM FooterSection")

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
              timelineRef.current.to(
                [triggleSection.current.children[1],triggleSection.current.children[3]],{
                  x: -100
                }
              ).to(
                [triggleSection.current.children[2],triggleSection.current.children[4]],{
                  x: 100
                }
              ,"<")
              return () => {
                  ctx.revert();
                  timelineRef.current?.kill()
                  timelineRef.current = null
                  triggleSection.current = null
              }
          });

      }
  }, [propsForGsap])
  return (
    <section className='letcontact_section light_background' id="letcontact_section" >
      <div className='container'>
      <ul className="media-wrapper" ref={triggleSection}>
        <li className="media">
          <Image alt="d" src="/clone/letcontact_center.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42} />
        </li>
        <li className="media">
        <Image alt="d" src="/clone/letcontact_top-left.webp" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "100%" }} quality={42}/>
        </li>

        <li className="media">
          <Image alt="d"  src="/clone/media1_n.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42}/>
        </li>
        <li className="media"> 
        <Image alt="d"  src="/clone/letcontact_bottom-right.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42}/></li>
        <li className="media">
        <Image alt="d"  src="/clone/letcontact_bottom-left.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42}/>
        </li>
      </ul>
      <div className='text'>
        <h2 className='lable'>
        In the media
        </h2>
        <h1 className='title'>
          <div className='title-line'>Spread</div>
          <div className='title-line'>the News</div>
        </h1>
        <div className='body'>
        <p>Biến ý tưởng thú vị nhất thành hiện thực với nghiệp vụ và công nghệ.</p>
        </div>
        <a className='link is-dark'>
          <div className="wrap">
            Browse all news
          </div>
        </a>
      </div>
      </div>
     
    </section>
  )
}
