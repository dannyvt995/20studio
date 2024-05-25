import React from 'react'
import './style.css'
import Image from 'next/image'
export default function Banner_DetailWorkPage() {
  return (
    <section className='Banner_DetailWorkPage'>
        <div className='container'>
            <div className='text-1'>
                <h1 className='title'>
                    <span>Building</span>
                    <span>Digital</span>
                    <span>Presence</span>
                </h1>
                <h2 className='subtitle'>
                    <span>Digital experiences with maximum emotional impact</span>
                </h2>
              
            </div>
            <div className='text-2'>
                <div className="body">
                    <h3>We explore and push the boundaries of digital for brands and businesses that strive to enhance people's lives through exceptional experiences.</h3>
                    <p>For over a decade, we've been using profound design aesthetics, meticulously crafted details, and surprising interactions to create digital experiences that spark conversation, inspire action, and drive desirability.</p>
                </div>
            </div>
            <div className="background">
                <Image src="/home/banner.webp" 
                            alt="asd" width={0} height={0} sizes="100vw" 
                            style={{width:"100%",height:"auto"}} />
            </div>
        </div>
    </section>
  )
}
