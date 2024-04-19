"use client"
import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";


import './style.css'
export default function ProjectsSection() {
    gsap.registerPlugin(Observer);
    let i_of_slider = 999
    const durationAnim = 2
    const delayAnim = .2
    const stopNow = useRef(false)
    function runSlider(what) {
        what.addClass("active").siblings("li").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose, targetClipPath, targetBgPosY, targetZoom) {

        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                onComplete: () => stopNow.current = false
            })
                .set("ul#big_background li.active", { scale: 1 })
                .set("ul#big_background li.active", { zIndex: i_of_slider, clipPath: targetClipPath, backgroundPositionY: targetBgPosY, backgroundSize: 100 })
                .set("ul#small_background li.active", { zIndex: i_of_slider, clipPath: targetClipPath, backgroundPositionY: targetBgPosY, backgroundSize: 100 })
                .to(
                    "ul#big_background li.active",
                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        backgroundPositionY: 0,
                        scale: 1.2,
                        delay: delayAnim,
                        duration: durationAnim,
                        ease: "power4.out"
                    },
                )
                .to("ul#small_background li.active", {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    backgroundPositionY: 0,
                    delay: delayAnim,
                    duration: durationAnim,
                    ease: "power4.out"
                }, "<")
        }
    }
    function handleClickPrev() {

        var slide = $("ul#big_background li.active,ul#small_background li.active").is(
            ":first-of-type"
        )
            ? $("ul#big_background li:last,ul#small_background li:last")
            : $("ul#big_background li.active,ul#small_background li.active").prev("li");
        runSlider(slide);
        gsapSlider(slide, "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "-10%", 1.2);
    }
    function handleClickNext() {
        var slide = $("ul#big_background li.active,ul#small_background li.active").is(
            ":last-of-type"
        )
            ? $("ul#big_background li:first,ul#small_background li:first")
            : $("ul#big_background li.active,ul#small_background li.active").next("li");
        runSlider(slide);
        gsapSlider(slide, "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", "10%", 1.2);
    }
    function handleMouseDown() {
        if (stopNow.current === false) {
            stopNow.current = true
            handleClickPrev()
        }
    }
    function handleMouseUp() {
        if (stopNow.current === false) {
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
    const handleRedirectToDetailWork = (e) => {
        console.log('handleRedirectToDetailWork')
    }

    const BACKGROUND_PROJECTS = useRef(null)
    
    const SLIDER_WORK_LIST = useRef(null)
    const array_SLIDER_WORK_LIST = useRef(null)
    useEffect(() => {
        array_SLIDER_WORK_LIST.current = Array.prototype.slice.call(SLIDER_WORK_LIST.current.children)
    },[SLIDER_WORK_LIST.current])
    const isOpenList = useRef(false)
    const isRuninngOpen = useRef(false)
    const handleOpenList = (e) => {
        if(isRuninngOpen.current) return
        isRuninngOpen.current = true
        console.log( array_SLIDER_WORK_LIST.current)
        if(isOpenList.current) {
            gsap.timeline({
                onComplete:() => {
                    isOpenList.current = false
                    isRuninngOpen.current = false
                }
            }).set(BACKGROUND_PROJECTS.current,{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            }).to(BACKGROUND_PROJECTS.current,{
                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration:1,
                ease:"power4.inOut"
            })
        }else{
            isOpenList.current = true
            gsap.timeline({
                onComplete:() => {
                    isRuninngOpen.current = false
                }
            }).set(BACKGROUND_PROJECTS.current,{
                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }).set(array_SLIDER_WORK_LIST.current,{
                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }).to(BACKGROUND_PROJECTS.current,{
                clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration:1,
                ease:"power4.inOut"
            })
        }
       
    }
    return (
        <>
            <div className="work_section">

                <div className="background" ref={BACKGROUND_PROJECTS}>

                    <ul id="big_background">
                        <li className='active'></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
              
                <div className='slider_list' id="SLIDER_WORK_LIST" ref={SLIDER_WORK_LIST}>
                    <button>A</button>
                    <button>A</button>
                    <button>A</button>
                    <button>A</button>
                    <button>A</button>
                    <button>A</button>
                </div>
                <div className="content">
                
                    {/*    <button onClick={handleClickNext}>handleClickNext</button> */}
                    <ul id="small_background">
                        <li className='active'><a onClick={handleRedirectToDetailWork} data_link="project1"></a></li>
                        <li><a onClick={handleRedirectToDetailWork} data_link="project2"></a></li>
                        <li><a onClick={handleRedirectToDetailWork} data_link="project3"></a></li>
                    </ul>
                </div>
                <div className='btn_open_list'>
                    <button onClick={handleOpenList}>handleOpenList</button>
                </div>
            </div>
        </>
    )
}
