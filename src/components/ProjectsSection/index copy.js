"use client"
import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";

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
    gsap.registerPlugin(Observer);
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
        console.log('handleMouseDown')
        if (stopNow.current === false) {
            stopNow.current = true
            handleClickPrev()
        }
    }
    function handleMouseUp() {
        console.log('handleMouseUp')
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

      
    }, [observeRefPageWheel])
    const handleRedirectToDetailWork = (e) => {
        console.log('handleRedirectToDetailWork')
    }

    const BACKGROUND_PROJECTS = useRef(null)

    const SLIDER_WORK_LIST = useRef(null)
    const array_SLIDER_WORK_LIST = useRef(null)

    const isOpenList = useRef(false)
    const isRuninngOpen = useRef(false)
    const timeLineSLiderInfinity = useRef(null)
    const observerRefSliderInfi = useRef(null)
    let ObserverInfi
    useEffect(() => {
        const boxall = $('.slider_list button')
        const list = []
        for (let i = 0; i < boxall.length; i++) {
            list.push(boxall[i])
        }
        timeLineSLiderInfinity.current = horizontalLoop("#SLIDER_WORK_LIST button", {repeat: -1 });
        // create a tween that'll always decelerate the timeScale of the timeline back to 0 over the course of 0.5 seconds (or whatever)
        const slow = gsap.to(timeLineSLiderInfinity.current, { timeScale: 0, duration: 0.5 });
        timeLineSLiderInfinity.current.toIndex(-2, {duration: .1, ease: "power1.inOut" })
        timeLineSLiderInfinity.current.timeScale(0);
       // console.log(timeLineSLiderInfinity.current)
     //   list.forEach((box, i) => box.addEventListener("click", () => timeLineSLiderInfinity.current.toIndex(i - 2, { duration: 0.8, ease: "power1.inOut" })));
        // now use an Observer to listen to pointer/touch/wheel events and set the timeScale of the infinite looping timeline accordingly. 
        ObserverInfi = Observer.create({
             target: "#SLIDER_WORK_LIST",
             type: "pointer,touch,wheel",
             wheelSpeed: -.2,
             onChange: self => {
                 timeLineSLiderInfinity.current.timeScale(Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : -self.deltaY); // whichever direction is bigger
                 slow.invalidate().restart(); // now decelerate
             }
         });
         ObserverInfi.disable()
    }, [])
    const openListActive = useRef(false)
    const handleOpenList = (e) => {
        if (isRuninngOpen.current) return
        isRuninngOpen.current = true
        const boxConlai = $('.slider_list button:not(.active)')
        const boxTargetSmall = $('ul#small_background li.active')
        const boxCheck = $('ul#big_background li.active').attr('data_ser')
        const itemList = $('#SLIDER_WORK_LIST').children()
        const boxChoist = $('.slider_list button')
        boxChoist.css("opacity","1")
        itemList[boxCheck].style.opacity = 0
        if (timeLineSLiderInfinity.current && !openListActive.current){
         //   boxTargetSmall.style.opacity = 0
         ObserverInfi.disable()
            //observerRefSliderInfi.current.enable()
            timeLineSLiderInfinity.current.toIndex(boxCheck -2, {duration: .2, ease: "power1.inOut" })
        }else{
           // observerRefSliderInfi.current.disable()
           ObserverInfi.enable()
        }
       
        if (isOpenList.current) {
            gsap.timeline({
                onComplete: () => {
                    openListActive.current = false
                    isOpenList.current = false
                    isRuninngOpen.current = false
                }
            }).set(BACKGROUND_PROJECTS.current, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            }).to(BACKGROUND_PROJECTS.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
                ease: "power4.inOut"
            }).to(boxConlai, {
                y: (index) => (index + 1) * -200,
                duration: 1,
                ease: "power4.inOut"
            }, "<")
        } else {
            isOpenList.current = true
            gsap.timeline({
                onComplete: () => {
                    openListActive.current = true
                    isRuninngOpen.current = false
                    itemList[boxCheck].style.opacity = 1
                }
            }).set(BACKGROUND_PROJECTS.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }).set(boxConlai, {
                y: (index) => (index + 1) * 200
            }).to(BACKGROUND_PROJECTS.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "power4.inOut"
            }).to(boxConlai, {
                y: 0,
                duration: 1,
                ease: "power4.inOut"
            }, "<")
        }

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

                <div className='slider_list' id="SLIDER_WORK_LIST" ref={SLIDER_WORK_LIST}>

                    <button >
                        <div className='img'></div>
                    </button>
                    <button >
                        <div className='img'></div>
                    </button>
                    <button>
                        <div className='img'></div>
                    </button>
                    <button >
                        <div className='img'></div>
                    </button>
                    <button>
                        <div className='img'></div>
                    </button>
                </div>
                <div className="content" >

                    {/*    <button onClick={handleClickNext}>handleClickNext</button> */}
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
   function horizontalLoop(items, config) {
    let timeline;
    items = gsap.utils.toArray(items);
    config = config || {};
    gsap.context(() => { // use a context so that if this is called from within another context or a gsap.matchMedia(), we can perform proper cleanup like the "resize" event handler on the window
      let onChange = config.onChange,
        lastIndex = 0,
        tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        spaceBefore = [],
        xPercents = [],
        curIndex = 0,
        indexIsDirty = false,
        center = config.center,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        timeOffset = 0,
        container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
        totalWidth,
        getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
        populateWidths = () => {
          let b1 = container.getBoundingClientRect(), b2;
          items.forEach((el, i) => {
            widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
            b2 = el.getBoundingClientRect();
            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
            b1 = b2;
          });
          gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: i => xPercents[i]
          });
          totalWidth = getTotalWidth();
        },
        timeWrap,
        populateOffsets = () => {
          timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
          center && times.forEach((t, i) => {
            times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
          });
        },
        getClosest = (values, value, wrap) => {
          let i = values.length,
            closest = 1e10,
            index = 0, d;
          while (i--) {
            d = Math.abs(values[i] - value);
            if (d > wrap / 2) {
              d = wrap - d;
            }
            if (d < closest) {
              closest = d;
              index = i;
            }
          }
          return index;
        },
        populateTimeline = () => {
          let i, item, curX, distanceToStart, distanceToLoop;
          tl.clear();
          for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
              .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
              .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
          }
          timeWrap = gsap.utils.wrap(0, tl.duration());
        },
        refresh = (deep) => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
        },
        onResize = () => refresh(true),
        proxy;
      gsap.set(items, {x: 0});
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", onResize);
      function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = {time: timeWrap};
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);    
        return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
      }
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = setCurrent => {
        let index = getClosest(times, tl.time(), tl.duration());
        if (setCurrent) {
          curIndex = index;
          indexIsDirty = false;
        }
        return index;
      };
      tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
      tl.next = vars => toIndex(tl.current()+1, vars);
      tl.previous = vars => toIndex(tl.current()-1, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      if (config.draggable && typeof(Draggable) === "function") {
        proxy = document.createElement("div")
        let wrap = gsap.utils.wrap(0, 1),
          ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
          align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
          syncIndex = () => tl.closestIndex(true);
        typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPressInit() {
            let x = this.x;
            gsap.killTweensOf(tl);
            wasPlaying = !tl.paused();
            tl.pause();
            startProgress = tl.progress();
            refresh();
            ratio = 1 / totalWidth;
            initChangeX = (startProgress / -ratio) - x;
            gsap.set(proxy, {x: startProgress / -ratio});
          },
          onDrag: align,
          onThrowUpdate: align,
          overshootTolerance: 0,
          inertia: true,
          snap(value) {
            //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
            if (Math.abs(startProgress / -ratio - this.x) < 10) {
              return lastSnap + initChangeX
            }
            let time = -(value * ratio) * tl.duration(),
              wrappedTime = timeWrap(time),
              snapTime = times[getClosest(times, wrappedTime, tl.duration())],
              dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
            lastSnap = (time + dif) / tl.duration() / -ratio;
            return lastSnap;
          },
          onRelease() {
            syncIndex();
            draggable.isThrowing && (indexIsDirty = true);
          },
          onThrowComplete: () => {
            syncIndex();
            wasPlaying && tl.play();
          }
        })[0];
        tl.draggable = draggable;
      }
      tl.closestIndex(true);
      lastIndex = curIndex;
      onChange && onChange(items[curIndex], curIndex);
      timeline = tl;
      return () => window.removeEventListener("resize", onResize); // cleanup
    });
    return timeline;
  }
