"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import "./style.css"
import { usePathname } from "next/navigation"
export default function FooterSection({ idWrapperScroll, backgroundClass }) {
    const wRef = useRef(null)
    const footerContainer = useRef(null)
    const path = usePathname()
    console.log('render===',path)
    useEffect(() => {
        const ht = footerContainer.current.getBoundingClientRect()
        console.log(ht)
        gsap.timeline({
            scrollTrigger: {
                scroller: idWrapperScroll,
                trigger: footerContainer.current,
                start: "top 80%",
                end: "bottom bottom",
                scrub: true,
            }
        }).to(wRef.current, { y: 0 })

    }, [footerContainer.current]);
   
    return (
        <section className={`footer_section ${backgroundClass}`} ref={footerContainer}>
            <div className="content_footer_section" ref={wRef} style={{transform:"translateY(20%)"}}>
                <div className='first_footer'  >
                    <div className='text'>
                        <h3>Hành Trình của 20Studio</h3>
                        <p>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                    </div>
                    <div className='image'>

                    </div>
                </div>
                <div className='second_footer'>
                    <div className="grid_12col_container">
                        <div className='info'>
                            <p>63 Ly Chinh Thang,  Quan3</p>
                            <p>support@20studio.vn</p>
                        </div>
                        <div className='menu_footer'>
                            <ul>
                                <li>
                                    <a>Work</a>
                                </li>
                                <li>
                                    <a>Services</a>
                                </li>
                                <li>
                                    <a>News</a>
                                </li>
                                <li>
                                    <a>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='socal_footer'>
                            <ul>
                                <li>
                                    <a>Instagram</a>
                                </li>
                                <li>
                                    <a>Twitter</a>
                                </li>
                                <li>
                                    <a>Facebook</a>
                                </li>
                                <li>
                                    <a>Tiktok</a>
                                </li>
                            </ul>
                        </div>
                        <div className='btn_more'>
                            <a>More Story</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
