"use client"
import Image from "next/image"
import Star from "../../icons/Star"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import "./style.css"
import { useEffect, useRef } from "react"
export default function WorkSection({scroller}) {
    
    const work_sectionRef = useRef(null)
    const titRef = useRef(null)
    const splitHead = useRef(null)


    useEffect(() => {

        splitHead.current = new SplitType(titRef.current.children[0], { types: ' chars' })
       
        const ctx = gsap.context(() => {
            gsap.from(splitHead.current.chars, {
                y: 200,
                stagger: .1,
                scrollTrigger: {
                    scroller: scroller,
                    trigger: titRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    //   pin:true, // this nees set proxy fix , still not exaly get target
                    scrub:1,
                 //  markers: true,
                    // invalidateOnRefresh: true,
                }
            });
      return () => ctx.revert();
        });
  
    }, [work_sectionRef, splitHead, titRef]);

    return (
        <section className="work_section light_background" ref={work_sectionRef}>
            <div className="grid_12col_container_nomargin">
                <div className="tittle" ref={titRef} >
                    <h2 id="splitHead">Work</h2>

                </div>
            </div>

            <div className="grid_12col_container_nomargin" id="trick">
                <div className="intro">
                    <div className="tittle">
                        <Star />
                        <p>Danh mục sản phẩm</p>
                    </div>
                    <div className="detail">
                        20Studio cung cấp các sản phẩm dịch vụ dành cho đối tácg cấp các sản phẩm dịch vụ dành cho đối tácg cấp các sản phẩm dịch vụ dành cho đối tác
                    </div>
                </div>
                <div className="gr_item grid_12col_container_nomargin" id="workSectionOnHome">
                    <a>
                        <div>
                            <Image
                                src="/home/ser1.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "auto", height: "100%" }}
                                alt="services1"
                            />
                        </div>
                        <p>Phát Triển Mẫu</p>
                    </a>
                    <a>
                        <div>
                            <Image
                                src="/home/ser2.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "auto", height: "100%" }}
                                alt="services1"
                            />
                        </div>
                        <p>Sản xuất</p>
                    </a>
                    <a>
                        <div>
                            <Image
                                src="/home/ser3.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                            />
                        </div>
                        <p>Thiết kế</p>
                    </a>
                    <a>
                        <div>
                            <Image
                                src="/home/ser4.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "auto", height: "100%" }}
                                alt="services1"
                            />
                        </div>
                        <p>Quản lý</p>
                    </a>
                </div>
            </div>
        </section>
    )
}