"use client"
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
import Link from 'next/link';
import './style.css'

export default function ProjectsSection() {
  gsap.registerPlugin(Observer);
  let i_of_slider = 999
  const durationAnim = 1
  const delayAnim = .05
  const stopNow = useRef(false)
  const valueRef = useRef(0)
  const first_load_ref = useRef(null)

  const projects_section_ref = useRef(null)
  const listDomThumb = useRef(null)
  const listDomBackground = useRef(null)
  const listContentBackground = useRef(null)
  const chuasapxepPTarget = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  const chuasapxepP2ForBg =  'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
  const chuasapxepP3ForBg =  'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'


  useEffect(() => {
    localStorage.setItem('activeItemOnWorkPage',0)
    const big_backgroundDom = document.getElementById('big_background')
    const small_backgroundDom = document.getElementById('small_background')
    const content_brand = document.getElementById('info_brand')
   
    if (big_backgroundDom, small_backgroundDom) {
      listDomBackground.current = big_backgroundDom
      listDomThumb.current = small_backgroundDom
      listContentBackground.current = content_brand

   
     /*  gsap.to(first_load_ref.current,{

      }) */

    }

  }, [])

  function runSlider(prevNum, nextNum) {
    listDomBackground.current.children[prevNum].classList.remove('active');
    listDomBackground.current.children[nextNum].classList.add('active');
    listDomThumb.current.children[prevNum].classList.remove('active');
    listDomThumb.current.children[nextNum].classList.add('active');
    listContentBackground.current.children[prevNum].classList.remove('active');
    listContentBackground.current.children[nextNum].classList.add('active');
  }


  //slider gsap
  function gsapSlider(prevNum, nextNum, targetClipPathForBg,targetClipPathForChild, targetBgPosY, dir) {
    i_of_slider++;  
    let domTargetBackground = listDomBackground.current.children[nextNum]
    let domTargetThumb = listDomThumb.current.children[nextNum]
    let domTargetBackgroundCurrent = listDomBackground.current.children[prevNum]

  

    //tam thoi
    let ListTittleChild__Next = Array.prototype.slice.call( listContentBackground.current.children[nextNum].children[0].children )
    let ListInfoChild__Next = Array.prototype.slice.call( listContentBackground.current.children[nextNum].children[1].children )
    let pre_ListTittleChild__Next = Array.from(ListTittleChild__Next, child => child.children[0]);
    let pre_ListInfoChild__Next = Array.from(ListInfoChild__Next, child => child.children[0]);

    let ListTittleChild__Prev = Array.prototype.slice.call( listContentBackground.current.children[prevNum].children[0].children )
    let ListInfoChild__Prev = Array.prototype.slice.call( listContentBackground.current.children[prevNum].children[1].children )
    let pre_ListTittleChild__Prev = Array.from(ListTittleChild__Prev, child => child.children[0]);
    let pre_ListInfoChild__Prev = Array.from(ListInfoChild__Prev, child => child.children[0]);

    
    gsap.timeline({
      onComplete: () => stopNow.current = false
    })
    .set(pre_ListTittleChild__Next,{
      y:150*dir,
      rotateX:20*dir,
      rotateY:-20*dir,
      rotateZ:5*dir,
      scale:1,
    })
    .set(pre_ListInfoChild__Next,{
      y:150*dir,
    
      scale:1,
    })
      .set(domTargetBackground, { 
        '-webkit-filter': 'brightness(100%) blur(2px) ',
        filter: 'brightness(100%) blur(2px)',
        rotate:0, scale: 1.1, zIndex: i_of_slider, clipPath: targetClipPathForBg, backgroundPositionY: targetBgPosY, backgroundSize: 100 })
      .set(domTargetThumb, { zIndex: i_of_slider, clipPath: targetClipPathForChild, backgroundPositionY: targetBgPosY, backgroundSize: 100 })
      .to(
        domTargetBackground,
        {
          clipPath: chuasapxepPTarget,
          backgroundPositionY: 0,
          scale: 1.4,
          transformOrigin:'50% 0%',
          duration: durationAnim,
          ease: "power2.out"
        },
      )
      .to(domTargetBackgroundCurrent, {
        rotate:-12*dir,
        scale: 1.2,
        y:600*dir,

        '-webkit-filter': 'brightness(30%)  blur(2px)',
        filter: 'brightness(30%)  blur(2px)',
        
        duration: durationAnim,
        ease: "power3.out",
        clearProps: true,
      }, "<")
      .to(domTargetThumb, {
        clipPath:chuasapxepPTarget,
        backgroundPositionY: 0,
        delay: delayAnim,
        duration: durationAnim,
        ease: "power3.out"
      }, "<")
      
      .to(pre_ListTittleChild__Next, {
            stagger: 0.1,
            y: 0,
            rotateX:-10,
            rotateY:0,
            rotateZ:0,
            scale:1.3,
            transformOrigin: '0% 50%',
            duration: durationAnim,
            ease: "power3.out"
      }, "<")
      .to(pre_ListInfoChild__Next, {
        stagger: 0.1,
        y: 0,
      
        duration: durationAnim,
        ease: "power3.out"
  }, "<")

      
    .to(pre_ListInfoChild__Prev, {
    stagger: 0.1,
    y: -150*dir,
    duration: durationAnim,
    ease: "power3.out"
    }, "<")

    .to(pre_ListTittleChild__Prev, {
      stagger: 0.1,
      y: -150*dir,
      duration: 0.5,
      scale:0.8,
      ease: "power3.out"
  }, "<")
   

  }





  function setValStore(val, nameVal) {
    localStorage.setItem(nameVal, val.toString())
  }





  function handleClickPrev() {
    let nextvalueRef = (parseInt(valueRef.current) - 1 + 4) % 4; // Loop from 4 to 0
    runSlider(valueRef.current, nextvalueRef);
    gsapSlider(valueRef.current, nextvalueRef, chuasapxepP3ForBg,chuasapxepP2ForBg, "0%", -1);
    valueRef.current = nextvalueRef
    // save for use on transition page on work page to detail work page
    setValStore(valueRef.current.toString(),'activeItemOnWorkPage')
  }
  function handleClickNext() {
    let nextvalueRef = (parseInt(valueRef.current) + 1) % 4; // Loop from 0 to 4
    runSlider(valueRef.current, nextvalueRef);
    gsapSlider(valueRef.current, nextvalueRef, chuasapxepP2ForBg,chuasapxepP3ForBg, "0%", 1);
    valueRef.current = nextvalueRef
      // save for use on transition page on work page to detail work page
    setValStore(valueRef.current.toString(),'activeItemOnWorkPage')
  }
  function handleMouseDown() {
    if (stopNow.current === false) {
      stopNow.current = true
      handleClickNext()
    }
  }
  function handleMouseUp() {
    if (stopNow.current === false) {
      stopNow.current = true
   

      handleClickPrev()
    }
  }

  const observeRefPageWheel = useRef(null)
  useEffect(() => {
    observeRefPageWheel.current = Observer.create({
      target:projects_section_ref.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => handleMouseDown(),
      onUp: () => handleMouseUp(),

      preventDefault: false
    });
    observeRefPageWheel.current.enable()
  }, [])



  return (
    <>
      <div className="projects_section" ref={projects_section_ref}>

        <div className="background">

          <ul id="big_background" ref={listDomBackground}>
            <li className='active' data_ser="0"></li>
            <li data_ser="1"></li>
            <li data_ser="2" ></li>
            <li data_ser="3"></li>
          </ul>
        </div>
        <div className='content_text'>
          <ul id='info_brand'>
            <li  className='active' >
              <div className='tit'>
                    <div><span>TRAO</span></div>
                    <div><span>STUDIO</span></div>
              </div>
              <div className='inf'>
                  <div><span>Some text about this</span></div>
                  <div><span>brand and more</span></div>
                  <div><span>info</span></div>
               
              </div>
            </li>
            <li>
            <div className='tit'>
            <div><span>MODIEN</span></div>
                    <div><span>STUDIO</span></div>
              
              </div>
              <div className='inf'>
              <div><span>Some text about this</span></div>
                  <div><span>brand and more</span></div>
                  <div><span>info</span></div>
              </div>
            </li>
            <li>
            <div className='tit'>
            <div><span>NET</span></div>
                    <div><span>STUDIO</span></div>
              </div>
              <div className='inf'>
              <div><span>Some text about this</span></div>
                  <div><span>brand and more</span></div>
                  <div><span>info</span></div>
              </div>
            </li>
            <li>
            <div className='tit'>
            <div><span>SIREN</span></div>
                    <div><span>STUDIO</span></div>
              </div>
              <div className='inf'>
              <div><span>Some text about this</span></div>
                  <div><span>brand and more</span></div>
                  <div><span>info</span></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content_image" >

          <ul id="small_background" ref={listDomThumb}>
            <li className='active'><Link href="/work/work1">Enter Job1</Link></li>
            <li><Link href="/work/work2">Enter Job2</Link></li>
            <li><Link href="/work/work3">Enter Job3</Link></li>
            <li><Link href="/work/work4">Enter Job4</Link></li>
          </ul>
   {/*        <button onClick={handleClickPrev}>Prev</button>
          <button onClick={handleClickNext}>Next</button> */}
        </div>
        {/*    <div className='btn_open_list'>
          <button onClick={handleOpenList}>handleOpenList</button>
        </div> */}
      </div>
    </>
  )
}

















/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like draggable: true, center: true, speed (default: 1, which travels at roughly 100 pixels per second), paused (boolean), repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot.
 */
  //  function horizontalLoop(items, config) {
  //   let timeline;
  //   items = gsap.utils.toArray(items);
  //   config = config || {};
  //   gsap.context(() => { // use a context so that if this is called from within another context or a gsap.matchMedia(), we can perform proper cleanup like the "resize" event handler on the window
  //     let onChange = config.onChange,
  //       lastIndex = 0,
  //       tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
  //           let i = tl.closestIndex();
  //           if (lastIndex !== i) {
  //             lastIndex = i;
  //             onChange(items[i], i);
  //           }
  //         }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
  //       length = items.length,
  //       startX = items[0].offsetLeft,
  //       times = [],
  //       widths = [],
  //       spaceBefore = [],
  //       xPercents = [],
  //       curIndex = 0,
  //       indexIsDirty = false,
  //       center = config.center,
  //       pixelsPerSecond = (config.speed || 1) * 100,
  //       snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
  //       timeOffset = 0,
  //       container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
  //       totalWidth,
  //       getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
  //       populateWidths = () => {
  //         let b1 = container.getBoundingClientRect(), b2;
  //         items.forEach((el, i) => {
  //           widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
  //           xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
  //           b2 = el.getBoundingClientRect();
  //           spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
  //           b1 = b2;
  //         });
  //         gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
  //           xPercent: i => xPercents[i]
  //         });
  //         totalWidth = getTotalWidth();
  //       },
  //       timeWrap,
  //       populateOffsets = () => {
  //         timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
  //         center && times.forEach((t, i) => {
  //           times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
  //         });
  //       },
  //       getClosest = (values, value, wrap) => {
  //         let i = values.length,
  //           closest = 1e10,
  //           index = 0, d;
  //         while (i--) {
  //           d = Math.abs(values[i] - value);
  //           if (d > wrap / 2) {
  //             d = wrap - d;
  //           }
  //           if (d < closest) {
  //             closest = d;
  //             index = i;
  //           }
  //         }
  //         return index;
  //       },
  //       populateTimeline = () => {
  //         let i, item, curX, distanceToStart, distanceToLoop;
  //         tl.clear();
  //         for (i = 0; i < length; i++) {
  //           item = items[i];
  //           curX = xPercents[i] / 100 * widths[i];
  //           distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
  //           distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
  //           tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
  //             .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
  //             .add("label" + i, distanceToStart / pixelsPerSecond);
  //           times[i] = distanceToStart / pixelsPerSecond;
  //         }
  //         timeWrap = gsap.utils.wrap(0, tl.duration());
  //       },
  //       refresh = (deep) => {
  //         let progress = tl.progress();
  //         tl.progress(0, true);
  //         populateWidths();
  //         deep && populateTimeline();
  //         populateOffsets();
  //         deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
  //       },
  //       onResize = () => refresh(true),
  //       proxy;
  //     gsap.set(items, {x: 0});
  //     populateWidths();
  //     populateTimeline();
  //     populateOffsets();
  //     window.addEventListener("resize", onResize);
  //     function toIndex(index, vars) {
  //       vars = vars || {};
  //       (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
  //       let newIndex = gsap.utils.wrap(0, length, index),
  //         time = times[newIndex];
  //       if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
  //         time += tl.duration() * (index > curIndex ? 1 : -1);
  //       }
  //       if (time < 0 || time > tl.duration()) {
  //         vars.modifiers = {time: timeWrap};
  //       }
  //       curIndex = newIndex;
  //       vars.overwrite = true;
  //       gsap.killTweensOf(proxy);    
  //       return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
  //     }
  //     tl.toIndex = (index, vars) => toIndex(index, vars);
  //     tl.closestIndex = setCurrent => {
  //       let index = getClosest(times, tl.time(), tl.duration());
  //       if (setCurrent) {
  //         curIndex = index;
  //         indexIsDirty = false;
  //       }
  //       return index;
  //     };
  //     tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
  //     tl.next = vars => toIndex(tl.current()+1, vars);
  //     tl.previous = vars => toIndex(tl.current()-1, vars);
  //     tl.times = times;
  //     tl.progress(1, true).progress(0, true); // pre-render for performance
  //     if (config.reversed) {
  //       tl.vars.onReverseComplete();
  //       tl.reverse();
  //     }
  //     if (config.draggable && typeof(Draggable) === "function") {
  //       proxy = document.createElement("div")
  //       let wrap = gsap.utils.wrap(0, 1),
  //         ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
  //         align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
  //         syncIndex = () => tl.closestIndex(true);
  //       typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
  //       draggable = Draggable.create(proxy, {
  //         trigger: items[0].parentNode,
  //         type: "x",
  //         onPressInit() {
  //           let x = this.x;
  //           gsap.killTweensOf(tl);
  //           wasPlaying = !tl.paused();
  //           tl.pause();
  //           startProgress = tl.progress();
  //           refresh();
  //           ratio = 1 / totalWidth;
  //           initChangeX = (startProgress / -ratio) - x;
  //           gsap.set(proxy, {x: startProgress / -ratio});
  //         },
  //         onDrag: align,
  //         onThrowUpdate: align,
  //         overshootTolerance: 0,
  //         inertia: true,
  //         snap(value) {
  //           //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
  //           if (Math.abs(startProgress / -ratio - this.x) < 10) {
  //             return lastSnap + initChangeX
  //           }
  //           let time = -(value * ratio) * tl.duration(),
  //             wrappedTime = timeWrap(time),
  //             snapTime = times[getClosest(times, wrappedTime, tl.duration())],
  //             dif = snapTime - wrappedTime;
  //           Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
  //           lastSnap = (time + dif) / tl.duration() / -ratio;
  //           return lastSnap;
  //         },
  //         onRelease() {
  //           syncIndex();
  //           draggable.isThrowing && (indexIsDirty = true);
  //         },
  //         onThrowComplete: () => {
  //           syncIndex();
  //           wasPlaying && tl.play();
  //         }
  //       })[0];
  //       tl.draggable = draggable;
  //     }
  //     tl.closestIndex(true);
  //     lastIndex = curIndex;
  //     onChange && onChange(items[curIndex], curIndex);
  //     timeline = tl;
  //     return () => window.removeEventListener("resize", onResize); // cleanup
  //   });
  //   return timeline;
  // }




