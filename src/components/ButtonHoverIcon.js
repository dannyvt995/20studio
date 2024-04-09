"use client"

import React from "react"
import gsap from 'gsap'
export default function ButtonHoverIcon({eventPass, iconDirection }) {
    const aRef = React.useRef(null)
    const aBgRef = React.useRef(null)
    const aIconRef = React.useRef(null)

    const handleClick = (e) => {
        if (eventPass) {
            eventPass(e);
        }
    };

    React.useEffect(() => {
        if (!aRef.current && !aBgRef.current && !aIconRef.current) return;
        aRef.current.tl = gsap.timeline({ paused: true });
        aRef.current.tl.fromTo(aBgRef.current, {
            y: `100%`
        }, {
            y: 0,
            duration: .5,
        }).to(aIconRef.current.children[0].children[0],{
           color: '#fffcf5',
            duration: .2
        }, '<')

        aRef.current.tl.add("midway");

        aRef.current.tl.fromTo(aBgRef.current, {
            y: 0
        }, {
            y: `-100%`,
            duration: .5,
            immediateRender: false
        }).to(aIconRef.current.children[0].children[0], {
            color: '#252324',
            duration: .2
        }, '<')

        const enterAnimation = (e) => {
            aRef.current.tl.tweenFromTo(0, "midway");

        };

        const leaveAnimation = (e) => {
            aRef.current.tl.play();
        };



        // Mouseenter
        aRef.current.addEventListener("mouseenter", enterAnimation);

        // Mouseleave
        aRef.current.addEventListener("mouseleave", leaveAnimation);

        // Cleanup event listeners on component unmount
        return () => {
            if (aRef.current) {
                aRef.current.removeEventListener("mouseenter", enterAnimation);
                aRef.current.removeEventListener("mouseleave", leaveAnimation);
            }
        };

    }, [aRef,aIconRef,aBgRef]);





    return (
        <button onClick={eventPass ? handleClick : null} ref={aRef} className="button-icon-styled-effect button-hover-split">
            <span ref={aIconRef} className={`${iconDirection} split-eff-text`}>
            <svg width="11" height="8" viewBox="0 0 11 8"  xmlns="http://www.w3.org/2000/svg"><path d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L7.17157 7.53553C6.97631 7.7308 6.65973 7.7308 6.46447 7.53553C6.2692 7.34027 6.2692 7.02369 6.46447 6.82843L9.29289 4L6.46447 1.17157C6.2692 0.97631 6.2692 0.659728 6.46447 0.464466C6.65973 0.269203 6.97631 0.269203 7.17157 0.464465L10.3536 3.64645ZM-4.37114e-08 3.5L10 3.5L10 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="black"></path></svg>
            </span>
            <span ref={aBgRef} className="split-eff-background"></span>
        </button>
    )
}