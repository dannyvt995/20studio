"use client"
import {useRef,useEffect} from 'react'
import './style.css'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
import Image from 'next/image'
export default function WorkPage() {
  const observeRefPageWheel = useRef(null)
  const work_page_ref = useRef(null)
  const stopNow = useRef(false)
  let i_of_slider = 999
  const durationAnim = 1
  const delayAnim = .05
  const valueRef = useRef(0)

  // ['title','subtitle','indicator','thumbnails','projects']
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const list_titleRef = useRef([])
  const list_subtitleRef = useRef([])

  useEffect(() => {
    localStorage.setItem('activeItemOnWorkPage',0)
    list_titleRef.current = Array.prototype.slice.call(titleRef.current.children)
    list_subtitleRef.current = Array.prototype.slice.call(subtitleRef.current.children)
  }, [titleRef.current,subtitleRef.current])

  function setValStore(val, nameVal) {
    localStorage.setItem(nameVal, val.toString())
  }

  function runSlider(prevNum, nextNum) {
    list_titleRef.current[prevNum].classList.remove('active');
    list_titleRef.current[nextNum].classList.add('active');
    list_subtitleRef.current[prevNum].classList.remove('active');
    list_subtitleRef.current[nextNum].classList.add('active');
  }

  function handleClickPrev() {
    let nextvalueRef = (parseInt(valueRef.current) - 1 + 4) % 4; // Loop from 4 to 0
    runSlider(valueRef.current, nextvalueRef);
   // gsapSlider(valueRef.current, nextvalueRef, chuasapxepP3ForBg,chuasapxepP2ForBg, "0%", -1);
    valueRef.current = nextvalueRef
    // save for use on transition page on work page to detail work page
    setValStore(valueRef.current.toString(),'activeItemOnWorkPage')
  }
  function handleClickNext() {
    let nextvalueRef = (parseInt(valueRef.current) + 1) % 4; // Loop from 0 to 4
    runSlider(valueRef.current, nextvalueRef);
   // gsapSlider(valueRef.current, nextvalueRef, chuasapxepP2ForBg,chuasapxepP3ForBg, "0%", 1);
    valueRef.current = nextvalueRef
      // save for use on transition page on work page to detail work page
    setValStore(valueRef.current.toString(),'activeItemOnWorkPage')
  }

  function handleMouseDown() {
    handleClickNext()
    if (stopNow.current === false) {
      stopNow.current = true
      console.log('handleMouseDown')
     
    }
  }
  function handleMouseUp() {
    handleClickPrev()
    if (stopNow.current === false) {
      stopNow.current = true
      console.log('handleMouseUp')

 
    }
  }


  useEffect(() => {
    gsap.registerPlugin(Observer)
    observeRefPageWheel.current = Observer.create({
      target:work_page_ref.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => handleMouseDown(),
      onUp: () => handleMouseUp(),

      preventDefault: false
    });
    observeRefPageWheel.current.enable()
  }, [work_page_ref])


  return (
    <section className='work_page' id="work_page" ref={work_page_ref}>
      {/*       <h1  className="h1">Work</h1> */}
      <div className='heading'>
        <h2 className='title' ref={titleRef}>
          
          <div className='active'>
              <span>100 Years</span>
              <span>Columbia</span>
              <span>Pictures</span>
            </div>
            <div>
              <span>Trao</span>
              <span>Studio</span>
              <span>Pictures</span>
            </div>
            <div>
              <span>Modien</span>
              <span>Studio</span>
              <span>Pictures</span>
            </div>
            <div>
              <span>TTTTTT</span>
              <span>Studio</span>
              <span>Pictures</span>
            </div>
        </h2>
        <p className="subtitle" ref={subtitleRef}>
            <div className='active'>Celebrating a Century of Cinema</div>
            <div>100 Columbia Pictures 100 of 100</div>
            <div>Columbia</div>
            <div>CelebratingCelebratingCelebrating Columbia Pictures 100 of 100</div>
        </p>
      </div>
      <div className='indicator'>
        <span className="current" >01</span>
        <span className="total">10</span>
      </div>
      <div className='thumbnails'>
        <div className="thumbnail"><Image src="/clone/services1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
      </div>
      <div className='projects'>
        <button type="button" className="project" style={{ display: 'block' }}>
          <div className="project-wrap">
            <Image src="/clone/services1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </button>
      </div>
    </section>
  )
}
