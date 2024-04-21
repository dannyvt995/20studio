"use client"

import "./style.css"
export default function HeroBanner({ pageName, hero_img }) {
    return (

        <section id="hero_banner_section" className="hero_banner dark_background" style={{ background: `url(${hero_img})`, backgroundSize: "cover" }}>
            <div className="content_hero_banner grid_12col_container grid_3row">
                {pageName == 'home' &&
                    <>
                        <div className="head row1"><span>Fashion Brand Development</span></div>
                        <div className="des row2"><p>We are where production takes place. Each country has its specialties. Our offices know them inside and out. Our teams are connected to customers and production partners through our digital platform.</p></div>
                        <div className="icon row3">
                            <span >20 Studio</span>
                        </div>
                        <div className="menu row3">
                            <ul>
                                <li><a>Works</a></li>
                                <li><a>Services</a></li>
                                <li><a>About us</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div className="more_info row3">
                            <ul>
                                <li><a>support@20studio.com</a></li>
                                <li><a>+84 99999999999</a></li>
                            </ul>
                        </div>
                    </>
                }

                {pageName == 'aboutus' &&
                    <>
                        <div className="head row1"><span>Fashion Brand Development</span></div>
                        <div className="des row2"><p>We are where production takes place. Each country has its specialties. Our offices know them inside and out. Our teams are connected to customers and production partners through our digital platform.</p></div>

                        <div className="detail_from_aboutus row3">
                            <h3>
                                We explore and push the boundaries of digital for brands and businesses that strive to enhance people's lives through exceptional experiences.
                            </h3>
                            <p>For over a decade, we've been using profound design aesthetics, meticulously crafted details, and surprising interactions to create digital experiences that spark conversation, inspire action, and drive desirability.</p>
                            <a>Button</a>
                        </div>
                    </>
                }
            </div>
        </section>


    )
}