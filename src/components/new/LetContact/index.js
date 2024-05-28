import React from 'react'

import './style.css'
import Image from 'next/image'
export default function LetContact() {
  return (
    <section className='letcontact_section' id="letcontact_section">
      <div className='container'>
      <ul className="media-wrapper">
        <li className="media">
          <Image alt="d" src="/clone/media3.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </li>
        <li className="media">
        <Image alt="d" src="/aboutuslargesection/1.png" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "100%" }} />
        </li>

        <li className="media">
          <Image alt="d"  src="/clone/media1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </li>
        <li className="media"> 
        <Image alt="d"  src="/clone/media2.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} /></li>
        <li className="media">
          <video
            autoPlay
            playsInline
            loop
            muted
            disablePictureInPicture
            disableRemotePlayback
          >
            <source
              src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
              type="video/mp4"
            />
          </video>
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
