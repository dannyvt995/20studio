import React from 'react'

import './style.css'
import Image from 'next/image'
export default function GridImageStyle2() {
  return (
    <section className='GridImageStyle2'>
        <div className='container is-exploded'>
            <div className='warpper'>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className='media'> <Image className='image' src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
            </div>
        </div>
    </section>
  )
}
