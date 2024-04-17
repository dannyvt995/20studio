"use client"
import HeroBanner from "@/modules/HeroBanner";
import data from "@/data/data.json"


import { useRef , useEffect} from "react";
import Aboutusintro from "@/components/AboutusIntro";
import AboutUs from "../aboutus/page";

export default function Page1() {

    return (
        <div className="page" id="page1" >
            {/* <div className='overplay'></div> */}

           <AboutUs/>
        </div>
    )
}