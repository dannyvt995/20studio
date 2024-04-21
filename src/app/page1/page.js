"use client"
import React from 'react'
import AboutUs from "../aboutus/page";

const Page1 = () => {
    console.log('Page1 RENDER')
    return (
        <div className="page" id="page1" >
            {/* <div className='overplay'></div> */}

           <AboutUs/>
        </div>
    )
}

export default React.memo(Page1);