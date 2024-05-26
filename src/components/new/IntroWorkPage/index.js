"use client"
import React from 'react'

import './style.css'
import Image from 'next/image'
export default function IntroWorkPage({backgroundImage}) {
    return (
        <section className='IntroWorkPage'>
            <div className="background">
            <Image src={backgroundImage}  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}  className="project-image"/>
            </div>
            <div className='container'>
                <div className='text-1'>
                    <h1 className='title'>
                        <span>100 Years</span>
                        <span>Columbia</span>
                        <span>Pictures</span>
                    </h1>
                    <h2 className='subtitle'>
                        <div className='text-line'>
                            Celebrating a Century of Cinema
                        </div>
                    </h2>
                    {/* <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow"><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg> */}
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
