"use client"
import React, { memo, useEffect, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import { PageTransitionGroup } from './PageTransitionGroup';
import { PageTransitionWrapper } from './PageTransitionWrapper';

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from "@/modules/home/index.js";
import About from "@/modules/about/index.js";
import Contact from "@/modules/contact/index.js";
import Work from "@/modules/work/index.js";


import { usePathname } from 'next/navigation';

import Work1 from '@/modules/work1';
import Work2 from '@/modules/work2';
import Work3 from '@/modules/work3';
import Work4 from '@/modules/work4';

const listPathAndIdDom = {
  pages: [
    '/',
    '/home',
    '/work',
    '/contact',
    '/about'
  ],
  pagesWork: [
    '/work/work1',
    '/work/work2',
    '/work/work3',
    '/work/work4'
  ],
  idpages: [
    '#homepage',
    '#aboutpage',
    '#workpage',
    '#contactpage'
  ],
  idpagesWork: [
    '#work1page',
    '#work2page',
    '#work3page',
    '#work4page'
  ]
}

function removeSplash(target) {
  let value
  if (listPathAndIdDom.pagesWork.includes(target)) {
    value = target.replace(/\/work\//g, "");

  } else {
    value = target.replace(/\//g, "");
    if (value == '') value = "home"
  }

  return value
}
function setValStore(val, nameVal) {
  localStorage.setItem(nameVal, val.toString())
}
function PageTransition({
  children,
  enterAnimation: enterAnimationOverride,
  exitAnimation: exitAnimationOverride,
  preset,
  transitionKey,
  ...rest
}) {
  console.log("PageTransition render............")
  const pathName = usePathname(null)
  const pathNameFormat = removeSplash(pathName)
  const lenisRef = useRef(null)
  const timeoutgsap = 1.2
  const indexRef = useRef(100)
  const tl = gsap.timeline({
    overwrite: true
  })


  const enterAnim = (dom) => {
    tl
      .fromTo(dom, {
        zIndex: indexRef.current++,
        clipPath: 'polygon(0% 100%, 100% 120%, 100% 100%, 0% 100%)',

      }, {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        clearProps: "clip-path",
        duration: timeoutgsap,
        ease: "power2.out"
      })
      .fromTo(dom.children[0], {
        rotate: 7,
        y: window.innerHeight / 2,
        scale: 1.2
      }, {
        rotate: 0,
        y: 0,
        scale: 1,
        clearProps: "clip-path",
        duration: timeoutgsap,
        ease: "power2.out"
      }, '<')
  }

  const exitAnim = (dom) => {
    tl
      .set(dom.children[0], {
        /*  '-webkit-filter': 'brightness(100%)',
         filter: 'brightness(100%)', */
      })
      .fromTo(dom.children[0], {
        rotate: 0,
        y: 0,
        scale: 1,
      }, {
        rotate: -7,
        y: -window.innerHeight / 2,
        scale: 1.2,
        /*   '-webkit-filter': 'brightness(36%)',
          filter: 'brightness(36%)', */
        duration: timeoutgsap
      })

  }

  function reloadLenis(pathName) {
    if (pathName == '/work') return
    console.log("useLenis hooks----", pathName, pathNameFormat)
    gsap.registerPlugin(ScrollTrigger)
    const navbarModal = document.getElementById(`navbar`)
    const buttonNavbar = document.getElementById(`button_menu`)
    const target = window.innerHeight * 1.5
    const domScroll = document.getElementById(`${pathNameFormat}page`)
    console.log(domScroll)
    const lenis = new Lenis({
      syncTouch: true,
      wrapper: domScroll,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3.5)
    })
    lenisRef.current = lenis;
    window.lenis = lenis;
    lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log("???")
      ScrollTrigger.refresh()
      if (scroll > target && scroll < target * 2) { // tổng 3 target là kill raf này
        navbarModal.style.display = 'none';
        buttonNavbar.style.display = 'flex';
      } else if (scroll < target) {
        navbarModal.style.display = 'block';
        buttonNavbar.style.display = 'none';
      }
    })

    ScrollTrigger.defaults({ scroller: domScroll });

    ScrollTrigger.refresh()
    gsap.ticker.add(update)

    function update(time) {
      if (window.lenis) window.lenis.raf(time * 1300);

    }
    return () => {
      if (lenisRef.current) {
        window.lenis.destroy()
        lenisRef.current.destroy()
        gsap.ticker.remove(update)
      }
    }
  }


  const enterAnimForWorkPageDetail = (dom) => {
    // do nothing
  }
  const exitAnimForWorkPage = (dom, item_project_active) => {
    // always is #work page
    // Now we have 4 item dom
    // .heading , .indicator, .thumbnail , .projects // 0,1,2,3
    // 
    let titleProject = dom.children[0].children[0].children[0].children[0].children[Number(item_project_active)]
    let subtitleProject = dom.children[0].children[0].children[0].children[1].children[Number(item_project_active)]
    let thumbnailProject = dom.children[0].children[0].children[2]
    let backgroundProject = dom.children[0].children[0].children[3].children[Number(item_project_active)].children[0].children[0]


    tl
      .set(thumbnailProject, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',

      }).to(
        backgroundProject, {
        scale: 1,
        duration: timeoutgsap
      }
      ).to(
        thumbnailProject, {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: timeoutgsap
      }
        , "<")
      .to(
        [titleProject, subtitleProject], {

        opacity: 0,
        duration: timeoutgsap / 3
      }
        , "<")

  }

  useEffect(() => {
    console.log("init lenis on FIRST LOAD",pathName,pathNameFormat)
    reloadLenis(pathName)
  }, [])
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>

      <PageTransitionGroup {...rest}>
        <TransitionGroup component={null}>

          <Transition
            key={transitionKey}
            timeout={timeoutgsap * 1000}
            onEnter={node => {
              let targetPath = transitionKey
              setValStore(false, "truyentam")
              setValStore(targetPath, "currentPath") // save it to cahnge anim type when on work page

              console.log("onEnter")
              if (listPathAndIdDom.pagesWork.includes(transitionKey)) {

                enterAnimForWorkPageDetail(node)
              } else {
                // df anim
                enterAnim(node)
              }


            }}
            onEntered={node => {
              
              console.log("onEntered")
              // this need to use to toggle lenis when page entered with smoething like redux/zustand
              setValStore(true, "truyentam")
              reloadLenis(pathName)
              // console.log("transitionKey === onEntered FOR LLENIS SET", transitionKey)
            }}
            onExit={node => {
              let target__from_work = localStorage.getItem('currentPath')

              if (listPathAndIdDom.pagesWork.includes(target__from_work)) {
                let activeItemOnWorkPage = localStorage.getItem('activeItemOnWorkPage')

                exitAnimForWorkPage(node, activeItemOnWorkPage)
              } else {
                // df anim
                exitAnim(node)
              }

            }}
          >
            {state => {
              let content;
              switch (pathName) {
                case '/':
                  content = <Home />;
                  break;
                case '/home':
                  content = <Home />;
                  break;
                case '/about':
                  content = <About />;
                  break;
                case '/contact':
                  content = <Contact />;
                  break;
                case '/work':
                  content = <Work />;
                  break;
                case '/work/work1':
                  content = <Work1 />;
                  break;
                case '/work/work2':
                  content = <Work2 />;
                  break;
                case '/work/work3':
                  content = <Work3 />;
                  break;
                case '/work/work4':
                  content = <Work4 />;
                  break;
                default:

                  return <h1>404 Page , lenis will err</h1>;
              }

              return (
                <PageTransitionWrapper state={state} data={`${state}DOM_ID`}>
                  {content}
                </PageTransitionWrapper>
              );
            }}
          </Transition>

        </TransitionGroup>
      </PageTransitionGroup>
    </ReactLenis>

  );
}

export default memo(PageTransition);