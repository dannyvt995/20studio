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
  console.log("PageTransition render.....^^^....")
  const pathName = usePathname(null)
  const pathNameFormat = removeSplash(pathName)
  const lenisRef = useRef(null)
  const timeTransition = 1.5
  const indexRef = useRef(100)
  const easeTransition = "power4.out"
  const allPaths = [
    ...listPathAndIdDom.pages,
    ...listPathAndIdDom.pagesWork,
  ];
  const matches = allPaths.filter(path => path === pathName);

  function reloadLenis(pathName) {
   
    if (pathName == '/work') return
    console.log("useLenis hooks----", pathName, pathNameFormat)
    gsap.registerPlugin(ScrollTrigger)
    const navbarModal = document.getElementById(`navbar`)
    const buttonNavbar = document.getElementById(`button_menu`)
    const target = window.innerHeight * 1.5
    const domScroll = document.getElementById(`${pathNameFormat}page`)
   // console.log(domScroll)
    const lenis = new Lenis({
      syncTouch: true,
      wrapper: domScroll,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3.5)
    })
    lenisRef.current = lenis;
    window.lenis = lenis;
    lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {

      if (scroll > target && scroll < target * 2) { // tổng 3 target là kill raf này
        navbarModal.style.display = 'none';
        buttonNavbar.style.display = 'flex';
      } else if (scroll < target) {
        navbarModal.style.display = 'block';
        buttonNavbar.style.display = 'none';
      }
    })

    ScrollTrigger.defaults({ scroller: domScroll });
   

    gsap.ticker.add(update)
    //setStateEntered("=>>>Đã vào")
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

  
  useEffect(() => {
 
   // console.log("init lenis and fire anim on FIRST LOAD", pathName, pathNameFormat)
    reloadLenis(pathName)
    if (matches.length > 0) {
      let targetId = removeSplash(pathName)
      const targetDom = document.getElementById(`${targetId}page`)
      const targetParentDom = targetDom.parentNode
      enterAnim(targetParentDom)
    } else {
      console.log('No matches found');
    }
  }, [])

 

  const enterAnimForWorkPageDetail = (dom) => {
    // because wrapper_this warp all compoent , so activv this if need diffrence eefect
    gsap.set(dom, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
  }

  const exitAnimForWorkPage = (dom, item_project_active) => {
    // always is #work page
    // Now we have 4 item dom
    // .heading , .indicator, .thumbnail , .projects // 0,1,2,3
    let titleProject = dom.children[0].children[0].children[0].children[0].children[Number(item_project_active)]
    let subtitleProject = dom.children[0].children[0].children[0].children[1].children[Number(item_project_active)]
    let thumbnailProject = dom.children[0].children[0].children[2]
    let backgroundProject = dom.children[0].children[0].children[3].children[Number(item_project_active)].children[0].children[0]

    const tlexitAnim__FromWorkPage = gsap.timeline({
      overwrite: true
    })
    tlexitAnim__FromWorkPage
      .set(thumbnailProject, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',

      }).to(
        backgroundProject, {
        scale: 1,
        duration: timeTransition,
        ease: easeTransition
      }
      ).to(
        thumbnailProject, {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: timeTransition,
        ease: easeTransition
      }
        , "<")
      .to(
        [titleProject, subtitleProject], {

        opacity: 0,
        duration: timeTransition / 3,
        ease: easeTransition
      }
        , "<")

  }


  const enterAnim = (dom) => {
    gsap.timeline()
    .set(dom.parentNode, { zIndex: indexRef.current++ })
      .set(dom, { clipPath: 'polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)' })
      .set(dom.children[0], { 
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1,
       })
      .set(dom.children[0], {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 7,
        y: window.innerHeight / 2,
        scale: 1.2
      })


      .to(dom, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: timeTransition,
        ease: easeTransition
      })
      .to(dom.children[0], {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1,
        duration: timeTransition,
        ease: easeTransition
      }, '<');
  };

  const exitAnim = (dom) => {
  

    gsap.timeline()
   
      .set(dom.children[0], {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
      }
      )
      .to(dom.children[0], {
             '-webkit-filter': 'brightness(26%)',
          filter: 'brightness(26%)',
        rotate: -7,
        y: -window.innerHeight / 2,
        scale: 1.2,
        duration: timeTransition,
        ease: easeTransition
      });
  };

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <PageTransitionGroup {...rest}>
        <TransitionGroup component={null}>

          <Transition

            key={transitionKey}
            timeout={timeTransition * 1000}
            mountOnEnter
            unmountOnExit
            onEnter={node => {
              let targetPath = transitionKey
              setValStore(false, "truyentam")
              setValStore(targetPath, "currentPath") // save it to cahnge anim type when on work page
         
              console.log("onEnter")
              if (listPathAndIdDom.pagesWork.includes(transitionKey)) {

                enterAnimForWorkPageDetail(node.children[0])
              } else {
                enterAnim(node.children[0])
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
              console.log("onExit")
              let target__from_work = localStorage.getItem('currentPath')

              if (listPathAndIdDom.pagesWork.includes(target__from_work)) {
                let activeItemOnWorkPage = localStorage.getItem('activeItemOnWorkPage')

                exitAnimForWorkPage(node.children[0], activeItemOnWorkPage)
              } else {
                exitAnim(node.children[0])
              }

            }}
          >
            {state => {
             // console.log(state,"======================================================")
              let content;
              switch (pathName) {
                case '/':
                  content = <Home wftState={state}/>;
                  break;
                case '/home':
                  content = <Home wftState={state} />;
                  break;
                case '/about':
                  content = <About wftState={state} />;
                  break;
                case '/contact':
                  content = <Contact wftState={state}/>;
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
                  <div id='wrapper_this'>
                    {content}
                  </div>
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