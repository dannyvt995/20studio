"use client"
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";

import './style.css'

export default function ProjectsSection() {
  gsap.registerPlugin(Observer);
  let i_of_slider = 999
  const durationAnim = 1
  const delayAnim = .05
  const stopNow = useRef(false)
  const valueRef = useRef(0)



  const listDomThumb = useRef(null)
  const listDomBackground = useRef(null)
  const big_backgroundDom = document.getElementById('big_background')
  const small_backgroundDom = document.getElementById('small_background')
  useEffect(() => {
    if (big_backgroundDom, small_backgroundDom) {
      listDomBackground.current = big_backgroundDom
      listDomThumb.current = small_backgroundDom
    }

  }, [big_backgroundDom, small_backgroundDom])

  function runSlider(prevNum, nextNum) {
    listDomBackground.current.children[prevNum].classList.remove('active');
    listDomBackground.current.children[nextNum].classList.add('active');
    listDomThumb.current.children[prevNum].classList.remove('active');
    listDomThumb.current.children[nextNum].classList.add('active');
    valueRef.current = nextNum
  }
  //slider gsap
  function gsapSlider(prevNum, nextNum, targetClipPath, targetBgPosY, targetZoom) {
    let domTargetBackground = listDomBackground.current.children[nextNum]
    let domTargetThumb = listDomThumb.current.children[nextNum]
    i_of_slider++;
    gsap.timeline({
      onComplete: () => stopNow.current = false
    })
      .set(domTargetBackground, { scale: 1, zIndex: i_of_slider, clipPath: targetClipPath, backgroundPositionY: targetBgPosY, backgroundSize: 100 })
      .set(domTargetThumb, { zIndex: i_of_slider, clipPath: targetClipPath, backgroundPositionY: targetBgPosY, backgroundSize: 100 })
      .to(
        domTargetBackground,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          backgroundPositionY: 0,
          scale: 1.2,
          duration: durationAnim,
          ease: "power4.out"
        },
      )
      .to(domTargetThumb, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        backgroundPositionY: 0,
        delay: delayAnim,
        duration: durationAnim,
        ease: "power4.out"
      }, "<")
  }











  function handleClickPrev() {

    let nextvalueRef = (parseInt(valueRef.current) - 1 + 5) % 5; // Loop from 4 to 0

    runSlider(valueRef.current, nextvalueRef);
    gsapSlider(valueRef.current, nextvalueRef, "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "-10%", 1.2);
  }
  function handleClickNext() {

    let nextvalueRef = (parseInt(valueRef.current) + 1) % 5; // Loop from 0 to 4

    runSlider(valueRef.current, nextvalueRef);
    gsapSlider(valueRef.current, nextvalueRef, "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", "10%", 1.2);

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
      // onDown: () => handleMouseDown(),
      // onUp: () => handleMouseUp(),

      //preventDefault: false
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

          <ul id="big_background" ref={listDomBackground}>
            <li className='active' data_ser="0"></li>
            <li data_ser="1"></li>
            <li data_ser="2" ></li>
            <li data_ser="3"></li>
            <li data_ser="4"></li>
          </ul>
        </div>

        <div className="content" >

          <button onClick={handleClickPrev}>Prev</button>
          <button onClick={handleClickNext}>Next</button>
          <ul id="small_background" ref={listDomThumb}>
            <li className='active'><a onClick={handleRedirectToDetailWork} data_link="project1"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project2"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project3"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project4"></a></li>
            <li><a onClick={handleRedirectToDetailWork} data_link="project5"></a></li>
          </ul>
        </div>
        {/*    <div className='btn_open_list'>
          <button onClick={handleOpenList}>handleOpenList</button>
        </div> */}
      </div>
    </>
  )
}




