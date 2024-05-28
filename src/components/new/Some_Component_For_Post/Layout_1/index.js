import React from 'react'
import './style.css'

import Image from 'next/image'

export default function Layout_1() {
  return (
    <section className='POST_layout1 has-padding-top-and-bottom'>
        <div className='container'>
          <div className='media'>
            <Image alt="alt" src={"/clone/layout_component1__1.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
          <div className='media'>
            <Image alt="alt" src={"/clone/layout_component1__2.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
          <div className='text'>
            <h2 className='label'>
              <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              The power of culture
            </h2>
            <div className="body"><p>By featuring the team's culture and values prominently on the website, we established trust, attracted like-minded partners and talent, and distinguished the Pixelflakes brand. This transparent approach resonated with our audience and fostered meaningful connections.</p></div>
          </div>
          <div className='media'>
            <Image alt="alt" src={"/clone/layout_component1__3.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
          <div className='media'>
            <Image alt="alt" src={"/clone/layout_component1__4.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
          <div className='media'>
            <Image alt="alt" src={"/clone/layout_component1__5.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
          <div className='media'>
            <Image alt="alt" src={"/clone/layout_component1__6.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </div>
    </section>
   
  )
}
