"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

import "./style.css"
import { usePathname } from "next/navigation"
import Image from "next/image"
import ButtonHoverUnderLine from "../ButtonHoverUnderLine"
export default function FooterSection({ idWrapperScroll, backgroundClass ,handleRedirect }) {
    const wRef = useRef(null)
    const footerContainer = useRef(null)
    const w_moveRef = useRef(null)
    const path = usePathname()
   

    // NOTE , Chưa xử lý vấn đề re-render , cách tốt nhất đề control đc re-render
    useEffect(() => {
        if(idWrapperScroll == "#homescroll" && path == '/'
        || idWrapperScroll == "#page1scroll" && path == '/page1'
        || idWrapperScroll == "#page2scroll" && path == '/page2'
        || idWrapperScroll == "#page3scroll" && path == '/page3'
        || idWrapperScroll == "#page4scroll" && path == '/page4')
        {
          //  console.log('render===',path,idWrapperScroll)
       
         
            gsap.timeline({
                scrollTrigger: {
                    scroller: idWrapperScroll,
                    trigger: wRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin:true,
                    pinSpacing:false,
                    scrub: true,
                }
            }).to(w_moveRef.current,{
                y:0
            })
        }
        

    }, [path]);
   
    return (
        <section className={`footer_section ${backgroundClass}`} ref={footerContainer}>
           
            <div className="content_footer_section" ref={wRef} style={{transform:"translateY(-100%)"}}>
                <div className="wrapper_content_footer_section" ref={w_moveRef} style={{transform:"translateY(30%)"}}>
                    <div className='first_footer'  >
                        <div className='text'>
                            <h3>Hành Trình của 20Studio</h3>
                            <p>20STUDIO mong muốn đồng hành cùng bạn và tạo ra những sản phẩm chất lượng nhất với giá thành cạnh tranh theo đúng thời hạn cam kết.</p>
                        </div>
                        <div className='image'>
                            <Image src="/home/ser1.png"
                                alt="serfoot"
                                sizes="100vw"
                                width={0}
                                height={0}
                                style={{width:'auto',height:'100%'}} 
                                />
                        </div>
                    </div>
                    <div className='second_footer'>
                        <div className="grid_12col_container">
                            <div className='info'>
                                <p>63 Ly Chinh Thang,  Quan3</p>
                                <p>support@20studio.vn</p>
                            </div>
                            <div className='menu_footer'>
                                <ul className="format">
                                    <li>
                                        <ButtonHoverUnderLine  eventPass={handleRedirect} data_link="/page1" data_type="onsite">Dự án</ButtonHoverUnderLine>
                                    </li>
                                    <li>
                                        <ButtonHoverUnderLine  eventPass={handleRedirect} data_link="/page2" data_type="onsite">Dịch vụ</ButtonHoverUnderLine>
                                    </li>
                                    <li>
                                        <ButtonHoverUnderLine  eventPass={handleRedirect} data_link="/page4" data_type="onsite">Liên hệ</ButtonHoverUnderLine>
                                    </li>
                                </ul>
                            </div>
                            <div className='socal_footer'>
                                <ul className="format">
                                    <li>
                                        <ButtonHoverUnderLine>Instagram</ButtonHoverUnderLine>
                                    </li>
                                    <li>
                                        <ButtonHoverUnderLine>Twitter</ButtonHoverUnderLine>
                                    </li>
                                    <li>
                                        <ButtonHoverUnderLine>Facebook</ButtonHoverUnderLine>
                                    </li>
                                    <li>
                                        <ButtonHoverUnderLine>Tiktok</ButtonHoverUnderLine>
                                    </li>
                                </ul>
                            </div>
                            <div className='btn_more'>
                                <ButtonHoverUnderLine  eventPass={handleRedirect} data_link="/page2" data_type="onsite">Về chúng tôi</ButtonHoverUnderLine>
                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
