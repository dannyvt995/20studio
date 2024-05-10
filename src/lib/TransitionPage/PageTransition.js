"use client"
import React, { memo, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import { PageTransitionGroup } from './PageTransitionGroup';
import { PageTransitionWrapper } from './PageTransitionWrapper';
import { gsap } from "gsap/all";

import Home from "@/modules/home/index.js";
import About from "@/modules/about/index.js";
import Contact from "@/modules/contact/index.js";
import Work from "@/modules/work/index.js";


import { usePathname } from 'next/navigation';

import Work1 from '@/modules/work1';
import Work2 from '@/modules/work2';
import Work3 from '@/modules/work3';
import Work4 from '@/modules/work4';

function PageTransition({
  children,
  enterAnimation: enterAnimationOverride,
  exitAnimation: exitAnimationOverride,
  preset,
  transitionKey,
  ...rest
}) {
  const pathName = usePathname()
  console.log('PageTransition RUNNING')
  // const selectEnterAnimation = () => {
  //   if (enterAnimationOverride) {
  //     if (typeof enterAnimationOverride === 'string') {
  //       return animations[enterAnimationOverride];
  //     }
  //     return {
  //       ...animations[enterAnimationOverride.name],
  //       delay: enterAnimationOverride.delay,
  //       onTop: enterAnimationOverride.onTop
  //     };
  //   }
  //   if (preset) {
  //     return {
  //       ...animations[presets[preset].enter.name],
  //       delay: presets[preset].enter.delay,
  //       onTop: presets[preset].enter.onTop
  //     };
  //   }
  //   return 'rotateSlideIn';
  // };

  // const selectExitAnimation = () => {
  //   if (exitAnimationOverride) {
  //     if (typeof exitAnimationOverride === 'string') {
  //       return animations[exitAnimationOverride];
  //     }
  //     return {
  //       ...animations[exitAnimationOverride.name],
  //       delay: exitAnimationOverride.delay,
  //       onTop: exitAnimationOverride.onTop
  //     };
  //   }
  //   if (preset) {
  //     return {
  //       ...animations[presets[preset].exit.name],
  //       delay: presets[preset].exit.delay,
  //       onTop: presets[preset].exit.onTop
  //     };
  //   }
  //   return 'rotateSlideIn';
  // };

  // const enterAnimation = selectEnterAnimation();
  // const exitAnimation = selectExitAnimation();
  //const timeout = Math.max(enterAnimation.duration, exitAnimation.duration);


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
  console.log(listPathAndIdDom)
  const timeoutgsap = 1.2


  const tl = gsap.timeline({ overwrite: true })
  const indexRef = useRef(100)
  const enterAnim = (dom) => {
    tl
      .fromTo(dom, {
        zIndex: indexRef.current++,
        clipPath: 'polygon(0% 100%, 100% 120%, 100% 100%, 0% 100%)',

      }, {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        clearProps: "clip-path",
        duration: timeoutgsap,
        ease:"power2.out"
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
        ease:"power2.out"
      }, '<')
  }

  const exitAnim = (dom) => {
    tl
      .set(dom.children[0],{
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
      })
      .fromTo(dom.children[0], {
        rotate: 0,
        y: 0,
        scale: 1,
      }, {
        rotate: -7,
        y: -window.innerHeight / 2,
        scale: 1.2,
        '-webkit-filter': 'brightness(36%)',
        filter: 'brightness(36%)',
        duration: timeoutgsap
      })

  }

  const enterAnimForWorkPageDetail = (dom) => {
    // do nothing
  }
  const exitAnimForWorkPage = (dom, itemactive) => {
    // always is #work page
    console.log(itemactive, itemactive, itemactive)
    let bgLargeDom_workpage = dom.children[0].children[0].children[0].children[0].children[Number(itemactive)]
    let bgContent_workpage = dom.children[0].children[0].children[1]
    let bgThumbDom_workpage = dom.children[0].children[0].children[2]

    tl
      .set(bgThumbDom_workpage, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      
      })
      .set(bgLargeDom_workpage,{
        '-webkit-filter': 'blur(2px)',
        filter: 'blur(2px)',
      }).to(
        bgLargeDom_workpage, {
          '-webkit-filter': 'blur(0px)',
          filter: 'blur(0px)',
        scale: 1,
        duration: timeoutgsap
      }
      ).to(
        bgThumbDom_workpage, {
         
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: timeoutgsap
      }
        , "<")

  }
  function setValStore(val, nameVal) {
    localStorage.setItem(nameVal, val.toString())
  }
  return (
    <PageTransitionGroup {...rest}>
      <TransitionGroup component={null}>

        <Transition
          key={transitionKey}
          timeout={timeoutgsap * 1000}
          onEnter={node => {
            let targetPath = transitionKey
            setValStore(false, "truyentam")
            setValStore(targetPath, "currentPath") // save it to cahnge anim type when on work page


            if (listPathAndIdDom.pagesWork.includes(transitionKey)) {

              enterAnimForWorkPageDetail(node)
            } else {
              // df anim
              enterAnim(node)
            }


          }}
          onEntered={node => {
            // this need to use to toggle lenis when page entered with smoething like redux/zustand
            setValStore(true, "truyentam")
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

                return null;
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
  );
}

export default memo(PageTransition);