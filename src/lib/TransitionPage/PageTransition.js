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

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

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
  const transitionKeyRef = useRef(null)
  const timeTransition = 1.5
  const indexRef = useRef(100)
  const easeTransition = "power4.out"
  const allPaths = [
    ...listPathAndIdDom.pages,
    ...listPathAndIdDom.pagesWork,
  ];

  const matches = allPaths.filter(path => path === pathName);
  const scopeRef = useRef(null)
  const { contextSafe } = useGSAP({ scope: scopeRef.current });




  let navbarModal
  let buttonNavbar
  let domScroll

  function reloadLenis(pathName) {
    let lenis = null
    if (pathName == '/work') return
    console.log("useLenis hooks----", pathName, pathNameFormat)
    gsap.registerPlugin(ScrollTrigger)
    navbarModal = document.getElementById(`navbar`)
    buttonNavbar = document.getElementById(`button_menu`)
    let target = window.innerHeight * 1.
    domScroll = document.getElementById(`${pathNameFormat}page`)
    // console.log(domScroll)
    lenis = new Lenis({
      syncTouch: true,
      wrapper: domScroll,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3.6)
    })
    lenisRef.current = lenis;
    window.lenis = lenis;
    lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      let menuAnimRuning = localStorage.getItem("menuAnimRuning")
  
      if(menuAnimRuning === "false") {
        if (scroll > target && scroll < target * 2) { // tổng 3 target là kill raf này
          navbarModal.style.display = 'none';
          buttonNavbar.style.display = 'flex';
        } else if (scroll < target) {
  
          navbarModal.style.display = 'block';
          buttonNavbar.style.display = 'none';
        }
      }
    
    })

    ScrollTrigger.defaults({ scroller: domScroll });
    ScrollTrigger.refresh()

    gsap.ticker.add(update)

    function update(time) {
      if (window.lenis) window.lenis.raf(time * 1420);
    }
    return () => {
      if (lenisRef.current) {
        window.lenis.destroy()
        lenisRef.current.destroy()
        gsap.ticker.remove(update)
      }
      lenis = null
      navbarModal = null
      buttonNavbar = null
      domScroll = null
    }
  }


  useEffect(() => {
    let targetParentDom; // Đặt targetParentDom ở phạm vi lớn hơn
    let targetDom;
    // console.log("init lenis and fire anim on FIRST LOAD", pathName, pathNameFormat)
    if (window.innerWidth > 620) reloadLenis(pathName)
    if (matches.length > 0) {
      let targetId = removeSplash(pathName)
      targetDom = document.getElementById(`${targetId}page`)
      targetParentDom = targetDom.parentNode
      enterAnim(targetParentDom)

    } else {
      console.log('No matches found');
    }

    return () => {
      targetParentDom = null
      targetDom = null
    }
  }, [])



  const enterAnimForWorkPageDetail = contextSafe((dom) => {
    // because wrapper_this warp all compoent , so activv this if need diffrence eefect
    gsap.set(dom, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
  })

  const exitAnimForWorkPage = contextSafe((dom, item_project_active) => {
    // always is #work page
    // Now we have 4 item dom
    // .heading , .indicator, .thumbnail , .projects // 0,1,2,3
    let titleProject = dom.children[0].children[0].children[0].children[0].children[Number(item_project_active)]
    let subtitleProject = dom.children[0].children[0].children[0].children[1].children[Number(item_project_active)]
    let thumbnailProject = dom.children[0].children[0].children[2]
    let backgroundProject = dom.children[0].children[0].children[3].children[Number(item_project_active)].children[0].children[0]

    
    gsap.timeline()
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

  })




  const enterAnim = contextSafe((dom) => {

    gsap.timeline()
      .set(dom.parentNode, { zIndex: indexRef.current++ })
      .set(dom, { clipPath: 'polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)' })
      .set(dom.children[0], {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1

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
  })

  const exitAnim = contextSafe((dom) => {


    gsap.timeline().set(dom.children[0], {
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
  })

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <PageTransitionGroup {...rest}>
        <TransitionGroup component={null}>

          <Transition

            key={transitionKey}
            timeout={timeTransition * 1000}

            unmountOnExit={true}
            onEnter={node => {

              transitionKeyRef.current = transitionKey
              if (listPathAndIdDom.pagesWork.includes(transitionKey)) {

                enterAnimForWorkPageDetail(node.children[0])
              } else {
                enterAnim(node.children[0]);
              }


            }}
            onEntered={node => {
              console.log("onEntered")
              if (window.innerWidth > 620) reloadLenis(pathName)
            }}


            onExit={node => {

              if (listPathAndIdDom.pagesWork.includes(transitionKeyRef.current)) {
                let activeItemOnWorkPage = localStorage.getItem('activeItemOnWorkPage')
                exitAnimForWorkPage(node.children[0], activeItemOnWorkPage)
              } else {
                exitAnim(node.children[0]);
              }

            }}
          >
            {state => {
              let contentDomReference = null;

              switch (pathName) {
                case '/':
                case '/home':
                  contentDomReference = <Home wftState={state} />;
                  break;
                case '/about':
                  contentDomReference = <About wftState={state} />;
                  break;
                case '/contact':
                  contentDomReference = <Contact wftState={state} />;
                  break;
                case '/work':
                  contentDomReference = <Work />;
                  break;
                case '/work/work1':
                  contentDomReference = <Work1 wftState={state} />;
                  break;
                case '/work/work2':
                  contentDomReference = <Work2 />;
                  break;
                case '/work/work3':
                  contentDomReference = <Work3 />;
                  break;
                case '/work/work4':
                  contentDomReference = <Work4 />;
                  break;
                default:
                  return <h1>404 Page , lenis will err</h1>;
              }

              return (
                <PageTransitionWrapper state={state} data={`${state}DOM_ID`}>
                  <div id='wrapper_this' ref={scopeRef}>
                    {contentDomReference}
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