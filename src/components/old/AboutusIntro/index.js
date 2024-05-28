"use client"
import { useEffect, useRef } from 'react';
import Star from '../../icons/Star';
import './style.css'
import Image from 'next/image';
import gsap from 'gsap'
import ProjectText from '@/components/new/ProjectText';

const Aboutusintro = ({ backgroundClass, scrollerRef }) => {
    const listImgRef = useRef(null)
    const domAnim1 = useRef(null)
    const domAnim2 = useRef(null)

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.timeline({
                scrollTrigger: {
                    scroller: scrollerRef,
                    trigger: listImgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,

                    //   markers:true
                }
            }).to(domAnim1.current, { y: -200 }).to(domAnim2.current, { y: 150 }, "<")
        })
        return () => ctx.revert();



    }, []);
    return (

        <>
            <section className={`sametime aboutus_intro_section ${backgroundClass}`}>
                <div className='grid_12col_container grid_3row'>
                    <div className='img row1'>
                        <div className='grid_12col_container_nomargin' id="list_img" ref={listImgRef}>
                            <div className='item row1' ref={domAnim1}>
                                <Image src="/home/ser3.webp"
                                    alt="asd" width={0} height={0} sizes="100vw"
                                    style={{ width: "auto", height: "100%" }} />
                            </div>
                            <div className='item row1'>
                                <Image src="/home/ser2.webp" alt="asd" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className='item row1' ref={domAnim2}>
                                <Image src="/home/ser1.webp" alt="asd" width={0}
                                    height={0} sizes="100vw"
                                    style={{ width: "auto", height: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectText />
        </>

    );
}

export default Aboutusintro;
