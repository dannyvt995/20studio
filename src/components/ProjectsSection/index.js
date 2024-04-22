"use client"
import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
import { Draggable } from 'gsap/dist/Draggable';
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
//https://codepen.io/GreenSock/pen/gOvvJee
//https://codepen.io/GreenSock/pen/gOvvJee
//https://codepen.io/GreenSock/pen/gOvvJee
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
//https://gsap.com/community/forums/topic/30583-endless-gsap-slider/
import './style.css'

export default function ProjectsSection() {
  gsap.registerPlugin(Observer, Draggable);
  let i_of_slider = 999
  const durationAnim = 1
  const delayAnim = .05
  const stopNow = useRef(false)
  const small_imgRef = useRef(null)
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
            delay: .5,
            duration: durationAnim,
            ease: "power4.out"
          },
        )
        .to("ul#small_background li.active", {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          backgroundPositionY: 0,
          // delay: delayAnim,
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
    //  console.log('handleMouseDown')
    if (stopNow.current === false) {
      stopNow.current = true
      handleClickPrev()
    }
  }
  function handleMouseUp() {
    //  console.log('handleMouseUp')
    if (stopNow.current === false) {
      stopNow.current = true
      handleClickNext()
    }
  }

  const observeRefPageWheel = useRef(null)
  useEffect(() => {
    observeRefPageWheel.current = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => handleMouseDown(),
      onUp: () => handleMouseUp(),

      preventDefault: true
    });
    observeRefPageWheel.current.enable()

  }, [observeRefPageWheel])
  const handleRedirectToDetailWork = (e) => {
    console.log('handleRedirectToDetailWork')
  }

  const BACKGROUND_PROJECTS = useRef(null)

 
  const openListActive = useRef(false)
  const handleOpenList = (e) => {
    

  }



  return (
    <>
      <div className="projects_section">

        <div className="background" ref={BACKGROUND_PROJECTS}>

          <ul id="big_background">
            <li className='active' data_ser="0"></li>
            <li data_ser="1"></li>
            <li data_ser="2" ></li>
            <li data_ser="3"></li>
            <li data_ser="4"></li>
          </ul>
        </div>

        <div className="content" >
          <ul id="small_background" ref={small_imgRef}>
            <li className='active'><a onClick={handleRedirectToDetailWork} data_link="project1"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project2"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project3"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project4"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project5"></a></li>
          </ul>
        </div>
        <div className='btn_open_list'>
          <button onClick={handleOpenList}>handleOpenList</button>
        </div>
      </div>
    </>
  )
}




