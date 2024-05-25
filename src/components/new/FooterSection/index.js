import React from 'react'
import './style.css'
export default function FooterSection() {
    return (
        <section className='footer_section' id="footer_section">
            <div className='container'>
                <div className='title'>
                    <div>Our</div>
                    <div>Story</div>
                </div>
                <p className='body'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                <div className='divider'></div>
                <ul className='address'>
                    <li className="item">
                        <a >
                            Willem II Singel 8<br />
                            6041 HS, Roermond<br />
                            The Netherlands
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            hello@exoape.com
                        </a>
                    </li>
                </ul>
                <ul className='nav_footer'>
                    <li className="item">
                        <a >
                            Eork
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Studio
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            News
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className='social'>
                    <li className='item'>
                        <a>
                            Facebook
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Instagram
                        </a>
                    </li>
                </ul>
                <a className="link">
                    <div className="wrap">
                        <div className="circle" >
                            Our Story
                         </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
