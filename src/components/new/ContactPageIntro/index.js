import React from 'react'

import './style.css'
import Image from 'next/image'
export default function ContactPageIntro() {
    return (
        <section className='ContactPageIntro'>
            <div className='container'>
                <div className='image'>
                <Image  src="/home/banner.webp" width={0} height={0} sizes="100vw" style={{width:'auto',height:'100%',    position: 'absolute',left:'50%',transform: 'translateX(-50%)'}} alt="e" />
                </div>
              
                <h1 className="h1">Contact</h1>
                <h2 className="title">
                    <div className='marquee'>
                        <div className='line'>Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · </div>
                    </div>
                </h2>
                <div className='left'>
                    <div className="body"><p>Sẵn sàng để cất cánh? Mess, tweet, tin nhắn và chúng tôi sẽ liên hệ lại sớm nhất có thể.</p></div>
                    <ul className="contact">
                        <li className="contact-item">
                            <a href="mailto:hello@exoape.com" className="link is-dark">
                            vphcm@20studio.com
                            </a>
                        </li>
                        <li className="contact-item">
                            <a href="tel:+31 772 086 200" className="link is-dark">
                                +11 222 333 444
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                    <a className="address">
                        30 Lý Chính Thắng,<br/>
                        Quận 3,<br/>
                        Hồ Chí Minh
                    </a>
                    <a className='link'>Xem bản đồ</a>
                </div>
            </div>
        </section>
    )
}
