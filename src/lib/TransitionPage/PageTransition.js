
import React, { memo,useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { animations } from './animations';
import { presets } from './presets';
import { PageTransitionGroup } from './PageTransitionGroup';
import { PageTransitionWrapper } from './PageTransitionWrapper';
import { gsap } from "gsap/all";


import { connect } from 'react-redux';
import { updateValue } from '@/redux/action';

function PageTransition({
  children,
  enterAnimation: enterAnimationOverride,
  exitAnimation: exitAnimationOverride,
  preset,
  transitionKey,
  ...rest
}) {
    console.log('PageTransition PageTransition PageTransition')
  const selectEnterAnimation = () => {
    if (enterAnimationOverride) {
      if (typeof enterAnimationOverride === 'string') {
        return animations[enterAnimationOverride];
      }
      return {
        ...animations[enterAnimationOverride.name],
        delay: enterAnimationOverride.delay,
        onTop: enterAnimationOverride.onTop
      };
    }
    if (preset) {
      return {
        ...animations[presets[preset].enter.name],
        delay: presets[preset].enter.delay,
        onTop: presets[preset].enter.onTop
      };
    }
    return 'rotateSlideIn';
  };

  const selectExitAnimation = () => {
    if (exitAnimationOverride) {
      if (typeof exitAnimationOverride === 'string') {
        return animations[exitAnimationOverride];
      }
      return {
        ...animations[exitAnimationOverride.name],
        delay: exitAnimationOverride.delay,
        onTop: exitAnimationOverride.onTop
      };
    }
    if (preset) {
      return {
        ...animations[presets[preset].exit.name],
        delay: presets[preset].exit.delay,
        onTop: presets[preset].exit.onTop
      };
    }
    return 'rotateSlideIn';
  };

  const enterAnimation = selectEnterAnimation();
  const exitAnimation = selectExitAnimation();
  const timeout = Math.max(enterAnimation.duration, exitAnimation.duration);

  const timeoutgsap = 1


  const tl = gsap.timeline({ overwrite:true})
  const indexRef = useRef(100)
  const enterAnim = (dom,path) => {
    console.log(dom.children[0])
    tl
    .fromTo(dom,{
      zIndex: indexRef.current++,
      clipPath: 'polygon(0% 100%, 100% 120%, 100% 100%, 0% 100%)',
 
    },{
  
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      clearProps: "clip-path",
      duration:1
    })
    .fromTo(dom.children[0],{
      rotate: 7,
      y:window.innerHeight/2,
      scale: 1.2
    },{
      rotate: 0,
      y:0,
      scale: 1,
      clearProps: "clip-path",
      duration:1
    },'<')
  }

  const exitAnim = (dom,path) => {
    console.log("onExit",dom,path)
    tl
    .fromTo(dom.children[0],{
      rotate: 0,
      y:0,
      scale: 1,
    },{
      rotate: -7,
      y:-window.innerHeight/2,
      scale: 1.2,
   
      duration:1
    })

  }

  return (
    <PageTransitionGroup {...rest}>
      <TransitionGroup component={null}>
        <Transition 
            key={transitionKey} 
            timeout={timeout} 
            onEnter={node => enterAnim(node,transitionKey)}
            onEntered={node => {
              console.log("transitionKey",transitionKey)
            }}
            onExit={node => exitAnim(node,transitionKey)}
        >
          {state => (
            <PageTransitionWrapper
              // enterAnimation={enterAnimation}
              // exitAnimation={exitAnimation}
              state={state}
              data={`${transitionKey}DOM_ID`}
            >
              {children}
            </PageTransitionWrapper>
          )}
        </Transition>
      </TransitionGroup>
    </PageTransitionGroup>
  );
}

export default memo(PageTransition);