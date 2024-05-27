import React from 'react'

import './style.css'
import Image from 'next/image'
export default function ContactPageIntro() {
    return (
        <section className='ContactPageIntro'>
            <div className='container'>
                <Image className='image' src="/clone/contact-page.webp" width={0} height={0} sizes="100vw" alt="e" />
                <h1 className="h1">Contact</h1>
                <h2 className="title">
                    <div className='marquee'>
                        <div className='line'>Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · </div>
                    </div>
                </h2>
                <div className='left'>
                    <div className="body"><p>Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.</p></div>
                    <ul className="contact">
                        <li className="contact-item">
                            <a href="mailto:hello@exoape.com" className="link is-dark">
                            hello@exoape.com
                            </a>
                        </li>
                        <li className="contact-item">
                            <a href="tel:+31 772 086 200" className="link is-dark">
                                +31 772 086 200
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                    <a className="address">
                        Willem II Singel 8<br/>
                        6041 HS, Roermond<br/>
                        The Netherlands
                    </a>
                    <a className='link'>View on maps</a>
                </div>
            </div>
        </section>
    )
}
