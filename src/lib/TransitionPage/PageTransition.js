"use client"
import React, { memo, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { animations } from './animations';
import { presets } from './presets';
import { PageTransitionGroup } from './PageTransitionGroup';
import { PageTransitionWrapper } from './PageTransitionWrapper';
import { gsap } from "gsap/all";

import Home from "@/modules/home/index.js";
import About from "@/modules/about/index.js";
import Contact from "@/modules/contact/index.js";
import Work from "@/modules/work/index.js";

import { connect } from 'react-redux';
import { updateValue } from '@/redux/action';
import { usePathname } from 'next/navigation';

function PageTransition({
  children,
  enterAnimation: enterAnimationOverride,
  exitAnimation: exitAnimationOverride,
  preset,
  transitionKey,
  ...rest
}) {
  const pathName = usePathname()
  //console.log('PageTransition RUNNING')
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

  const timeoutgsap = 1


  const tl = gsap.timeline({ overwrite: true })
  const indexRef = useRef(100)
  const enterAnim = (dom, path) => {
   // console.log(dom.children[0])
    tl
      .fromTo(dom, {
        zIndex: indexRef.current++,
        clipPath: 'polygon(0% 100%, 100% 120%, 100% 100%, 0% 100%)',

      }, {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        clearProps: "clip-path",
        duration: timeoutgsap
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
        duration: timeoutgsap
      }, '<')
  }

  const exitAnim = (dom, path) => {
   // console.log("onExit", dom, path)
    tl
      .fromTo(dom.children[0], {
        rotate: 0,
        y: 0,
        scale: 1,
      }, {
        rotate: -7,
        y: -window.innerHeight / 2,
        scale: 1.2,

        duration: timeoutgsap
      })

  }

  function setValStore(val,nameVal) {
    localStorage.setItem(nameVal,val.toString())
  }
  return (
    <PageTransitionGroup {...rest}>
      <TransitionGroup component={null}>

        <Transition
          key={transitionKey}
          timeout={timeoutgsap * 1000}
          onEnter={node => {
            enterAnim(node, transitionKey)
            setValStore(false,"truyentam")
          }}
          onEntered={node => {
            setValStore(true,"truyentam")
            console.log("transitionKey === onEntered", transitionKey)
          }}
          onExit={node => exitAnim(node, transitionKey)}
        >
          {state => {
            let content;
            switch (pathName) {
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