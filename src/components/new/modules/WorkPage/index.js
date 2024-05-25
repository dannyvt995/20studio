import React from 'react'
import './style.css'
import Image from 'next/image'
export default function WorkPage() {
  return (
    <section className='work_page' id="work_page">
      {/*       <h1  className="h1">Work</h1> */}
            <div className='heading'>
                <h2 className='title'>
                    <span>100 Years</span>
                    <span>Columbia</span>
                    <span>Pictures</span>
                </h2>
                <p className="subtitle">Celebrating a Century of Cinema</p>
            </div>
            <div className='indicator'>
                <span className="current" >01</span>
                <span className="total">10</span>
            </div>
            <div className='thumbnails'>
             <div  className="thumbnail"><Image src="/clone/services1.webp"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}  className="thumbnail-image"/></div>
            </div>
            <div className='projects'>
            <button type="button" className="project" style={{display: 'block'}}>
                <div  className="project-wrap">
                <Image src="/clone/services1.webp"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}  className="project-image"/>
                    </div>
            </button>
            </div>
    </section>
  )
}
