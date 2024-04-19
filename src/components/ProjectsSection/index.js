"use client"
import React, { useRef } from 'react'
import $ from 'jquery'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
gsap.registerPlugin(Observer);

import './style.css'
import Image from 'next/image';
export default function ProjectsSection() {
    let i_of_slider = 999
    const durationAnim = 2
    const delayAnim = .2
    const stopNow = useRef(false)
    function runSlider(what) {
        what.addClass("active").siblings("li").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose, targetClipPath,targetBgPosY,targetZoom) {

        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                onComplete: () => stopNow.current = false
            })
            .set("ul#big_background li.active",{scale: 1})
                .set("ul#big_background li.active", { zIndex: i_of_slider, clipPath: targetClipPath,backgroundPositionY:targetBgPosY,backgroundSize:100 })
                .set("ul#small_background li.active", { zIndex: i_of_slider, clipPath: targetClipPath,backgroundPositionY:targetBgPosY,backgroundSize:100 })
                .to(
                    "ul#big_background li.active",
                    { 
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        backgroundPositionY: 0,
                        scale:1.2,
                        delay: delayAnim,
                        duration:durationAnim,
                        ease:"power4.out" 
                    },
                )
                .to("ul#small_background li.active" ,{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        backgroundPositionY: 0,
                        delay: delayAnim,
                        duration:durationAnim,
                        ease:"power4.out" 
                },"<")
        }
    }
    function handleClickPrev() {
       
        var slide = $("ul#big_background li.active,ul#small_background li.active").is(
            ":first-of-type"
        )
            ? $("ul#big_background li:last,ul#small_background li:last")
            : $("ul#big_background li.active,ul#small_background li.active").prev("li");
        runSlider(slide);
        gsapSlider(slide,"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)","-10%",1.2);
    }
    function handleClickNext() {
        var slide = $("ul#big_background li.active,ul#small_background li.active").is(
            ":last-of-type"
        )
            ? $("ul#big_background li:first,ul#small_background li:first")
            : $("ul#big_background li.active,ul#small_background li.active").next("li");
        runSlider(slide);
        gsapSlider(slide,"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)","10%",1.2);
    }
    function handleMouseDown() {
        console.log('fh')
        if(stopNow.current === false) {
            stopNow.current = true
            handleClickPrev()
        }
    }
    function handleMouseUp() {
        console.log('fh')
        if(stopNow.current === false) {
            stopNow.current = true
            handleClickNext()
        }
  
    }
    Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => handleMouseDown(),
        onUp: () => handleMouseUp(),
      
        preventDefault: true
    });
    return (
        <>
            <div className="work_section">

                <div className="background">

                    <ul id="big_background">
                        <li className='active'></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="content">
                {/*     <button onClick={handleClickPrev}>handleClickPrev</button>
                    <button onClick={handleClickNext}>handleClickNext</button> */}
                    <ul id="small_background">
                        <li className='active'></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
