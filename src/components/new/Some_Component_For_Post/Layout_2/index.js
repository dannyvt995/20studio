import React from 'react'
import './style.css'

import Image from 'next/image'
export default function Layout_2() {
  return (
    <section className='POST_layout2 has-padding-top-and-bottom dark_background'>
        <div className='container'>
            <h2 className='title'>
                <div className='title-mask'>
                    <span className='title-line'>Stellar</span>
                    </div>
                    <div className='title-mask'>
                    <span className='title-line'>Partnership</span>
            </div>
            </h2>
            <h2 className='label'>
                <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                <div  className="text">From the client</div>
            </h2>
            <blockquote className="blockquote"><div className="body"><p>When I discovered Exo Ape’s website, I knew these guys were perfect fit. We were considering options with a few agencies, but these guys stood out head and shoulders. Their attention to design, motion, and user experience is unlike anything I had seen before, and we feel honored to have partnered with them. The results speak for themselves - we’re ecstatic.</p></div></blockquote>
            <div className="author">
            <Image className="avatar" src={"/clone/layout_component2__1.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}  />
                <p className="details">
        Marvin Nooitgedacht<br/> <span>CEO</span></p></div>
        </div>
    </section>
  )
}
