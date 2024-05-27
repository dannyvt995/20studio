"use client"
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './style.css'
import Image from 'next/image'
export default function IntroWorkPage({ dataBanner, backgroundImage }) {
    gsap.registerPlugin(useGSAP);
    const container = useRef();

    useGSAP(
        () => {
            console.log('runing anim load work detail')
            // delay fow wait until transition page load complete
            gsap.to('.iii', { delay: 1.5, y: 0, duration: 1, ease: "power3.out" });
        },
        { scope: container }
    );
    return (
        <section className='IntroWorkPage' ref={container}>
            <div className="background">
                <Image alt="d" src={backgroundImage} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
            </div>
            <div className='container'>
                <div className='text-1'>
                    <h1 className='title'>
                        <span className='ii'><span className='iii'>100 Years</span></span>
                        <span className='ii'><span className='iii'>Columbia</span></span>
                        <span className='ii'><span className='iii'>Pictures</span></span>
                    </h1>
                    <h2 className='subtitle'>
                        <div className='text-line'>
                            <span  className='iii'>Celebrating a Century of Cinema</span>
                        </div>
                    </h2>

                </div>
                <div className='text-2'>
                    <p className="intro">In honor of Columbia Pictures' 100th anniversary, we teamed up with Watson Design Group to create a century-filled digital experience and quiz. This took visitors through entertainment history and a personalized journey of self-discovery, revealing their most influential films and TV shows.</p>
                    <div className="info"><span className="client">Watson Design Group</span> <ul className="services"><li className="service">
                        Visual Design
                    </li><li className="service">
                            UI &amp; UX Design
                        </li><li className="service">
                            Web Development
                        </li></ul> <ul className="industries"><li className="industry">
                            Entertainment
                        </li></ul> <time className="date">February ‘2024</time></div>
                </div>
            </div>
        </section>
    )
}
