import React from 'react'

import './style.css'
import Image from 'next/image'
export default function GridImage1() {
    return (
        <section className='GridImage1'>
            <div className='container'>
                <div className='row'>
                    <div className='media'>
                        <Image src="/clone/detail-work-page/grid11.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className='media'>
                        <Image src="/clone/detail-work-page/grid12.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className='media'>
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/996bf1f53a/columbia-pictures-grid-03-superbad.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='media'>
                        <Image src="/clone/detail-work-page/grid14.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
                <div className='row'>
                    <div className='media'>
                        <Image src="/clone/detail-work-page/grid15.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>

                    <div className='media'>
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/61193bb86f/columbia-pictures-grid-06-spiderman.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='media'>
                        <Image src="/clone/detail-work-page/grid17.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className='media'>
                        <Image src="/clone/detail-work-page/grid18.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
