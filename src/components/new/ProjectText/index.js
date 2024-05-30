import React from 'react'
import './style.css'
export default function ProjectText({ disableTitle }) {
  
  return (
    <section className='project_text has-padding-top-and-bottom'>
      <div className='container'>
        {/* {disableTitle ? null : (
          <h2 className="title is-normal">
            <span><span className='title-line'>Immersive</span></span>
            <span><span className='title-line'>Impression</span></span>
            <span><span className='title-line'>Encouraging</span></span>
          </h2>
        )} */}
     <h2 className="title is-normal">
            <span><span className='title-line'>Immersive</span></span>
            <span><span className='title-line'>Impression</span></span>
            <span><span className='title-line'>Encouraging</span></span>
          </h2>
        <h3 className='label'>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <div className="text">Shows</div>
        </h3>
        <div className="body">
          <p>
            <span><span>To leave a lasting impression, we have created a custom horizontal scroll</span></span>
            <span><span>page that allows visitors to scroll through the shows while </span></span>
            <span><span>they are tantalized by beautiful visuals,</span></span>
            <span><span>encouraging them to explore further.</span></span>
          </p>
          </div>
      </div>
    </section>
  )
}
