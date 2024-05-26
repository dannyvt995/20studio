import React from 'react'

import './style.css'
import Image from 'next/image'
export default function LetContact() {
  return (
    <section className='letcontact_section' id="letcontact_section">
      <div className='container'>
      <ul className="media-wrapper">
        <li className="media">
          <Image src="/clone/media3.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </li>
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
              src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
              type="video/mp4"
            />
          </video>
        </li>

        <li className="media">
          <Image src="/clone/media1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </li>
        <li className="media"> <Image src="/clone/media2.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} /></li>
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
        <p>Find out more about our work on these leading design and technology platforms.</p>
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