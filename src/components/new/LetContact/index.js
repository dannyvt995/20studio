import React from 'react'

import './style.css'
import Image from 'next/image'
export default function LetContact() {
  return (
    <section className='letcontact_section light_background' id="letcontact_section">
      <div className='container'>
      <ul className="media-wrapper">
        <li className="media">
          <Image alt="d" src="/clone/letcontact_center.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42} />
        </li>
        <li className="media">
        <Image alt="d" src="/clone/letcontact_top-left.webp" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "100%" }} quality={42}/>
        </li>

        <li className="media">
          <Image alt="d"  src="/clone/media1_n.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42}/>
        </li>
        <li className="media"> 
        <Image alt="d"  src="/clone/letcontact_bottom-right.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42}/></li>
        <li className="media">
        <Image alt="d"  src="/clone/letcontact_bottom-left.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} quality={42}/>
        </li>
      </ul>
      <div className='text'>
        <h2 className='lable'>
        In the media
        </h2>
        <h1 className='title'>
          <div className='title-line'>Spread</div>
          <div className='title-line'>the News</div>
        </h1>
        <div className='body'>
        <p>Biến ý tưởng thú vị nhất thành hiện thực với nghiệp vụ và công nghệ.</p>
        </div>
        <a className='link is-dark'>
          <div className="wrap">
            Browse all news
          </div>
        </a>
      </div>
      </div>
     
    </section>
  )
}
