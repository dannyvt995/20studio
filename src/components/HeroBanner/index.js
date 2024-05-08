"use client"
import Image from "next/image"
import "./style.css"
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine"
export default function HeroBanner({ pageName, hero_img, handleRedirect }) {
    return (

        <section id="hero_banner_section" className="hero_banner dark_background" /* style={{ background: `url(${hero_img})`, backgroundSize: "cover" }} */>

            <div className="content_hero_banner grid_12col_container grid_3row">

                {pageName == 'homepage' &&
                    <>
                        <div className="backgroundBanner">
                            <Image
                                src={hero_img}
                                alt="Hero Image Banner"
                                sizes="100vw"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                priority
                            />
                        </div>
                        <div className="head row1"><h1>Phát Triển Thương Hiệu Thời Trang</h1></div>
                        <div className="des row2"><p>We are where production takes place. Each country has its specialties. Our offices know them inside and out. Our teams are connected to customers and production partners through our digital platform.</p></div>
                        <div className="icon row3">
                            <span >20 Studio</span>
                        </div>
                        <div className="menu row3">
                            <ul className="format">
                                <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page1" data_type="onsite">Dự án</ButtonHoverUnderLine></li>
                                <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page2" data_type="onsite">Về chúng tôi</ButtonHoverUnderLine></li>
                                {/*  <li><a onClick={handleRedirect} data_link="/page3"  data_type="onsite">????</a></li> */}
                                <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page4" data_type="onsite">Liên hệ</ButtonHoverUnderLine></li>
                            </ul>
                        </div>
                        <div className="more_info row3">
                            <ul className="format">
                                <li><ButtonHoverUnderLine>support@20studio.com</ButtonHoverUnderLine></li>
                                <li><ButtonHoverUnderLine>+84 99999999999</ButtonHoverUnderLine></li>
                            </ul>
                        </div>
                    </>
                }

                {pageName == 'aboutpage' &&
                    <>
                        <div className="backgroundBanner">
                            <Image
                                src={hero_img}
                                sizes="100vw"
                                width={0}
                                height={0}
                                style={{ width: '100%', height: 'auto' }}
                                alt="Aboutus Image Banner"
                                priority
                            />
                        </div>
                        <div className="head row1"><h1>Sáng Tạo Chất Lượng Tối Ưu</h1></div>
                        <div className="des row2"><p>Ba ưu tiên hàng đầu của chúng tôi đối với dịch vụ và sản phẩm cung cấp cho khách hàng.</p></div>

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