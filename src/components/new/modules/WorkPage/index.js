"use client"
import { useRef, useEffect } from 'react'
import './style.css'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
import Image from 'next/image'
import Link from 'next/link';



function loadAnimationEnterPage(ListChildTitleRef, ListChildSubtitleRef,ListThumbnailRef) {
  //list_child_title = list_child_subtitles

  ListChildTitleRef.forEach((child, index) => {
  
    if (index === 0) {
      gsap.timeline({}).set(child, {
        yPercent: 0,
        opacity: 1,
      })
      .set(ListChildSubtitleRef[index], { opacity: .8 })
    } else {
      gsap.timeline({}).set(child, {
        yPercent: -100,
        opacity: 1,
      })
      .set(ListChildSubtitleRef[index], { opacity: 0 })
    }
  });
}

function runSlider({
  ListTitleRef, ListSubtitleRef, ListThumbnailRef, ListBackgroundRef, prevState, nextState
}) {
  ListTitleRef[prevState].classList.remove('active');
  ListTitleRef[nextState].classList.add('active');
  ListSubtitleRef[prevState].classList.remove('active');
  ListSubtitleRef[nextState].classList.add('active');
  ListThumbnailRef[prevState].classList.remove('active');
  ListThumbnailRef[nextState].classList.add('active');
  ListBackgroundRef[prevState].classList.remove('active');
  ListBackgroundRef[nextState].classList.add('active');
}
function gsapSlider({ prevState, nextState, ListChildTitle, ListChildSub, ListChildThumbnail, ListBackgroundRef, StateLock, durationAnimation, indexOfSlider, dir }) {

  const listPath = [
    // hidden
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    // ttb
    'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    // btt
    'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
  ]
  indexOfSlider.current++;

  let pathResultBaseDirection1, pathResultBaseDirection2
  switch (dir) {
    case 1:
      pathResultBaseDirection1 = listPath[1];
      pathResultBaseDirection2 = listPath[2];
      break;
    case -1:
      pathResultBaseDirection1 = listPath[2];
      pathResultBaseDirection2 = listPath[1];
      break;
  }

  gsap.timeline({
    onComplete: () => { 
      StateLock.current = false;
     }

  })
    .set(ListChildTitle[nextState], { yPercent: -100 * dir })
    .set(ListChildSub[nextState], { opacity: 0 })
    .set(ListChildThumbnail[nextState], {
      opacity:1,
      clipPath: pathResultBaseDirection1,
      zIndex: indexOfSlider.current + 111,
    })
    .set(ListBackgroundRef[nextState], {
      clipPath: pathResultBaseDirection2,
      zIndex: indexOfSlider.current - 111,
    })
    .to(
      ListChildTitle[nextState],
      {
        yPercent: 0,
        stagger: 0.1,
        duration: durationAnimation,
        ease: "power4.inOut"
      })
    .to(
      ListChildTitle[prevState],
      {

        yPercent: 100 * dir,
        duration: durationAnimation,
        stagger: 0.1,
        ease: "power4.inOut"
      }, "<")
    .to(
      ListChildSub[nextState],
      {
        opacity: .8,
        duration: durationAnimation,
        stagger: 0.1,
        ease: "power4.inOut"
      }, "<")
    .to(
      ListChildSub[prevState],
      {
        opacity: 0,
        stagger: 0.1,
        ease: "power4.inOut"
      }, "<")
    .to([ListChildThumbnail[nextState], ListBackgroundRef[nextState]], {
      clipPath: listPath[0],
      duration: durationAnimation,
      ease: "power4.inOut",

    }, "<")

}
function setValStore(val, nameVal) {
  localStorage.setItem(nameVal, val.toString())
}

export default function WorkPage() {
  const observeRefPageWheel = useRef(null)
  const work_page_ref = useRef(null)
  const stopNow = useRef(false)
  const indexOfSlider = useRef(555)
  const durationAnim = 1
  const valueRef = useRef(0)

  // ['title','subtitle','indicator','thumbnails','projects']
  const titlesRef = useRef(null)
  const subtitlesRef = useRef(null)
  const thumbnailsRef = useRef(null)
  const backgroundsRef = useRef([])

  const ListTitleRef = useRef([])
  const ListSubtitleRef = useRef([])
  const ListThumbnailRef = useRef([])
  const ListBackgroundRef = useRef([])

  const ListChildTitleRef = useRef([])
  const ListChildSubtitleRef = useRef([])
  const ListChildThumbnailRef = useRef([])
  const ListChildBackgroundRef = useRef([])

  useEffect(() => {
    setValStore(0,'activeItemOnWorkPage')
    ListTitleRef.current = Array.from(titlesRef.current.children);
    ListSubtitleRef.current = Array.from(subtitlesRef.current.children);
    ListThumbnailRef.current = Array.from(thumbnailsRef.current.children);
    ListBackgroundRef.current = Array.from(backgroundsRef.current.children);
    ListChildTitleRef.current = ListTitleRef.current.map(child =>
      Array.from(child.children, child => child.children[0])// 1 lop wrap 
    );
    ListChildSubtitleRef.current = ListSubtitleRef.current.map(child =>
      Array.from(child.children, child => child.children[0]) // 1 lop wrap 
    );
    ListChildThumbnailRef.current = ListThumbnailRef.current.map(child =>
      Array.from(child.children, child => child) // vi thumb co 0 lop wrap
    );
    ListChildBackgroundRef.current = ListBackgroundRef.current.map(child =>
      Array.from(child.children, child => child) // vi thumb co 0 lop wrap
    );

    loadAnimationEnterPage(ListChildTitleRef.current, ListChildSubtitleRef.current,ListThumbnailRef.current);
  }, []);




  function fireAnimation(dir) {
    if (dir === 1) {
      let nextvalueRef = (parseInt(valueRef.current) - 1 + ListTitleRef.current.length) % ListTitleRef.current.length; // Loop from 4 to 0
      runSlider({
        ListTitleRef: ListTitleRef.current,
        ListSubtitleRef: ListSubtitleRef.current,
        ListThumbnailRef: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        prevState: valueRef.current,
        nextState: nextvalueRef
      });
      gsapSlider({
        indexOfSlider: indexOfSlider,
        prevState: valueRef.current,
        nextState: nextvalueRef,
        ListChildTitle: ListChildTitleRef.current,
        ListChildSub: ListChildSubtitleRef.current,
        ListChildThumbnail: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        durationAnimation: durationAnim,
        StateLock: stopNow,
        dir: dir
      });
      //update val
      valueRef.current = nextvalueRef
      setValStore(valueRef.current.toString(),'activeItemOnWorkPage')
    } else if (dir === -1) {
      let nextvalueRef = (parseInt(valueRef.current) + 1) % ListTitleRef.current.length; // Loop from 0 to 4
      //just active for parent wrap
      runSlider({
        ListTitleRef: ListTitleRef.current,
        ListSubtitleRef: ListSubtitleRef.current,
        ListThumbnailRef: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        prevState: valueRef.current,
        nextState: nextvalueRef
      })
      //fire anim to child
      gsapSlider({
        indexOfSlider: indexOfSlider,
        prevState: valueRef.current,
        nextState: nextvalueRef,
        ListChildTitle: ListChildTitleRef.current,
        ListChildSub: ListChildSubtitleRef.current,
        ListChildThumbnail: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        durationAnimation: durationAnim,
        StateLock: stopNow,
        dir: dir
      })
      //update val
      valueRef.current = nextvalueRef
      setValStore(valueRef.current.toString(),'activeItemOnWorkPage')
    }
  }


  function handleMouseDown() {
    if (stopNow.current === false) {
      stopNow.current = true
      fireAnimation(-1)

    }
  }
  function handleMouseUp() {

    if (stopNow.current === false) {
      stopNow.current = true
      fireAnimation(1)
    }
  }


  useEffect(() => {
    gsap.registerPlugin(Observer)
    observeRefPageWheel.current = Observer.create({
      target: work_page_ref.current,
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
        <div className='title' ref={titlesRef}>

          <div className='active'>
            <span className='ii'><span className='iii'>100 Years</span></span>
            <span className='ii'><span className='iii'>Columbia</span></span>
          </div>
          <div>
            <span className='ii'><span className='iii'>Trao</span></span>
            <span className='ii'><span className='iii'>Studio</span></span>
            <span className='ii'><span className='iii'>Pictures</span></span>
          </div>
          <div>
            <span className='ii'><span className='iii'>Modien</span></span>
            <span className='ii'><span className='iii'>Pictures</span></span>
            <span className='ii'><span className='iii'>Studio</span></span>
          </div>
          <div>
            <span className='ii'><span className='iii'>Tacobeva</span></span>
            <span className='ii'><span className='iii'>Studio</span></span>
            <span className='ii'><span className='iii'>Years</span></span>
          </div>
          {/*   <div>
            <span className='ii'><span className='iii'>Hi from 5 </span></span>
            <span className='ii'><span className='iii'>5555</span></span>
            <span className='ii'><span className='iii'>555</span></span>
          </div> */}
        </div>
        <div className="subtitle" ref={subtitlesRef}>
          <div className='active'>
            <span className='ii'><span className='iii'>1..Celebrating a Century of Cinema</span></span>
            <span className='ii'><span className='iii'>Century of Cinema</span></span>
            <span className='ii'><span className='iii'></span></span>
          </div>
          <div>
            <span className='ii'><span className='iii'>2..100 Columbia Pictures 100 of 100</span></span>
            <span className='ii'><span className='iii'>Columbia Columbia Columbia</span></span>
            <span className='ii'><span className='iii'>Columbia Columbia </span></span>
          </div>
          <div>
            <span className='ii'><span className='iii'>3..Columbia Columbia Columbia</span></span>
            <span className='ii'><span className='iii'></span></span>
            <span className='ii'><span className='iii'></span></span>
          </div>
          <div>
            <span className='ii'><span className='iii'>4..100 100100 Columbia Columbia</span></span>
            <span className='ii'><span className='iii'></span></span>
            <span className='ii'><span className='iii'></span></span>
          </div>
          {/*  <div>
            <span className='ii'><span className='iii'>55555555555 to scale</span></span>
            <span className='ii'><span className='iii'></span></span>
            <span className='ii'><span className='iii'></span></span>
          </div> */}
        </div>
      </div>
      <div className='indicator'>
        <span className="current" >01</span>
        <span className="total">10</span>
      </div>

      <div className='thumbnails' ref={thumbnailsRef}>
        <div className="thumbnail active">
          <div style={{ position: 'fixed', width: '100px', height: '20px', top: '50vh', background: 'white', pointerEvents: 'auto', userSelect: 'auto', zIndex: 'inherit' }}>
            <Link href="/work/work1">Enter Job1</Link>
          </div>
          <Image src="/clone/services1.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className="thumbnail">
          <div style={{ position: 'fixed', width: '100px', height: '20px', top: '50vh', background: 'white', pointerEvents: 'auto', userSelect: 'auto', zIndex: 'inherit' }}>
            <Link href="/work/work2">Enter Job2</Link>
          </div>
          <Image src="/clone/services2.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className="thumbnail">
          <div style={{ position: 'fixed', width: '100px', height: '20px', top: '50vh', background: 'white', pointerEvents: 'auto', userSelect: 'auto', zIndex: 'inherit' }}>
            <Link href="/work/work3">Enter Job3</Link>
          </div>
          <Image src="/clone/services3.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className="thumbnail">
          <div style={{ position: 'fixed', width: '100px', height: '20px', top: '50vh', background: 'white', pointerEvents: 'auto', userSelect: 'auto', zIndex: 'inherit' }}>
            <Link href="/work/work4">Enter Job4</Link>
          </div>
          <Image src="/clone/services4.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
      {/*   <div className="thumbnail"><Image src="/clone/media3.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div> */}
      </div>
      <div className='projects' ref={backgroundsRef}>
        <button type="button" className="project active" style={{ display: 'block' }}>
          <div className="project-wrap">
            <Image src="/clone/services1.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </button>
        <button type="button" className="project" style={{ display: 'block' }}>
          <div className="project-wrap">
            <Image src="/clone/services2.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </button>
        <button type="button" className="project" style={{ display: 'block' }}>
          <div className="project-wrap">
            <Image src="/clone/services3.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </button>
        <button type="button" className="project" style={{ display: 'block' }}>
          <div className="project-wrap">
            <Image src="/clone/services4.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </button>
      {/*   <button type="button" className="project" style={{ display: 'block' }}>
          <div className="project-wrap">
            <Image src="/clone/media3.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="project-image" />
          </div>
        </button> */}
      </div>
    </section>
  )
}
