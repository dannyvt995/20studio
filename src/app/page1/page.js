"use client"
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"
import VirtualScroll from 'virtual-scroll'


export default  function Page1() {

    return (
        <div className="page" id="page1">
        {/* <div className='overplay'></div> */}
  
        <HeroBanner hero_img={data["page1"]["hero_image"]}/>
    </div>
    )
}