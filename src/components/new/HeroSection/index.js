import React from 'react'

import './style.css'
import Image from 'next/image'
export default function HeroSection() {
    return (
        <section className='hero_section dark_bg' id="hero_section">
            <div className='container'>

                <div className='text-1'>
                    <p className='intro'>
                        <span>Hanskafdaffdfzfdzdfzdfzdfzdf</span>
                        <span>brands and businesses that create exceptional</span>
                        <span>experiences where people live, work, and unwind. </span>
                    </p>
                    <h1 className='title'>
                        <span>Digital</span>
                        <span>Design</span>
                        <span>Experience</span>
                    </h1>
                </div> 
                <div className='text-2'>
                    <div className='body'>
                        <p><span className="">We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</span></p>
                     
                    </div>
                    <a className='link'>The 20 Studio</a>
                    <ul className="list1">
                            <li className="list-item">
                                <a href="/work" className="list-link">
                                    Work
                                </a>
                            </li>
                            <li className="list-item"><a href="/studio" className="list-link">
                                Studio
                            </a>
                            </li>
                            <li className="list-item"><a href="/news" className="list-link">
                                News
                            </a>
                            </li>
                            <li className="list-item"><a href="/contact" className="list-link">
                                Contact
                            </a>
                            </li>
                        </ul>
                        <ul className="list2">
                            <li className="list-item">
                                <a href="/work" className="list-link">
                                    20stuido@gmail.com
                                </a>
                            </li>
                            <li className="list-item"><a href="/studio" className="list-link">
                                +012.34.6789
                            </a>
                            </li>

                        </ul>
                </div>
            </div>
            <div className='background'>
                <Image src="/clone/banner-home.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </div>
        </section>
    )
}
