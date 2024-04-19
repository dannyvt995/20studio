

import Image from 'next/image';
import './style.css'

import React from 'react';
import FooterSection from '@/components/FooterSection';

const ContactPage = () => {
    return (
        <>
        <section className='contact_page_section'>
            <div className='over_play'>
                <span>supports@20studio.vn</span>
            </div>
            <div className='content'>
                <div className='grid_12col_container'>
                    <div className='col1'>
                        <p>Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.</p>
                        <div>
                            <ul>
                                <li><a>hello@20studio.com</a></li>
                                <li><a>+11 111 111 111</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col2'>
                        <div className='img'>
                            <Image 
                                src="/home/ser1.png"
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{width:'auto',height:'100%'}} />
                        </div>
                    </div>
                    <div className='col3'>
                        <p> Willem II Singel 8 6041 HS, Roermond The Netherland </p>
                        <div>
                            <ul>
                                <li><a>View on maps</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterSection backgroundClass={'dark_background'}/>
        </>
    );
}

export default ContactPage;
