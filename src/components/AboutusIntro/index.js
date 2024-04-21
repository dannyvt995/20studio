"use client"
import {useEffect,useRef} from 'react';
import Star from '../icons/Star';
import './style.css'
import Image from 'next/image';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Aboutusintro = ({backgroundClass}) => {
    const listImgRef = useRef(null)
    const domAnim1 = useRef(null)
    const domAnim2 = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            
            gsap.timeline({
                scrollTrigger: {
                    scroller:"#page2scroll",
                    trigger: listImgRef.current,
                    start:"top bottom",
                    end: "bottom top",
                    scrub:true
                }
            }).to(domAnim1.current,{y:-200}).to(domAnim2.current,{y:150},"<")
        })
        return () => ctx.revert();
       
        
       
    }, []);
    return (

        <section className={`sametime aboutus_intro_section ${backgroundClass}`}>
            <div className='grid_12col_container_nomargin grid_3row'>
                <div className='img row1'>
                    <div className='grid_12col_container' id="list_img" ref={listImgRef}>
                        <div className='item row1' ref={domAnim1}>
                            <Image src="/home/ser3.png" 
                            alt="" width={0} height={0} sizes="100vw" 
                            style={{width:"auto",height:"100%"}} />
                        </div>
                        <div className='item row1'>
                            <Image src="/home/ser2.png" alt="" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}} />
                        </div>
                        <div className='item row1'  ref={domAnim2}>
                            <Image src="/home/ser1.png" alt="" width={0} 
                            height={0} sizes="100vw" 
                            style={{width:"auto",height:"100%"}} />
                        </div>
                    </div>
                </div>
                <div className='tag row2'>
                    <Star />
                    <p>Partners</p>
                </div>
                <div className='detail row2'>
                    <p>We partner with brands and businesses that create exceptional experiences where people live, work and unwind.</p>
                </div>
                <div className='more row3' >
                    <p>Interior Design & Furniture Architecture & Real Estate Hospitality, Travel & Tourism</p>
                </div>
            </div>
        </section>
    );
}

export default Aboutusintro;
