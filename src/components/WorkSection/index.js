"use client"
import Image from "next/image"
import Star from "../icons/Star"
import { useInView } from 'react-intersection-observer';
import gsap from "gsap"
import SplitType from 'split-type'
import "./style.css"
import { useEffect, useRef } from "react"
export default function WorkSection() {
  
    const work_sectionRef = useRef(null)
 
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        onChange: (inView,entry) => {
            console.log(entry
            )
            if(inView == true)  entry.target?.classList.add('m1')
            if(inView == false)  entry.target?.classList.remove('m1')
        }
      });
    
 
    return (
        <section className="work_section light_background" ref={work_sectionRef}>
  
            <div className="tittle"  ref={ref} id="checkc">
                <h2>Work</h2>

            </div>
            <div className="grid_12col_container_nomargin" >
                <div className="intro">
                    <div className="tittle">
                        <Star />
                        <p>Danh mục sản phẩm</p>
                    </div>
                    <div className="detail">
                        20Studio cung cấp các sản phẩm dịch vụ dành cho đối tácg cấp các sản phẩm dịch vụ dành cho đối tácg cấp các sản phẩm dịch vụ dành cho đối tác
                    </div>
                </div>
                <div className="gr_item grid_12col_container_nomargin">
                <a>
                            <div>
                                <Image
                                 src="/home/ser1.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                        <a>
                            <div>
                                <Image
                                src="/home/ser2.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                        <a>
                            <div>
                                <Image
                             src="/home/ser3.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                        <a>
                            <div>
                                <Image
                                 src="/home/ser4.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                </div>
            </div>
        </section>
    )
}