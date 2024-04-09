"use client"

import React from "react"
import gsap from 'gsap'

export default function ButtonHoverUnderLine({ eventPass,datalink,children, color , bold }) {
    const aRef = React.useRef(null)
    const aUnderlineRef = React.useRef(null)
    const handleClick = (e) => {
        if (eventPass) {
            eventPass(e);
        }
    };
    
    React.useEffect(() => {
        if (!aRef.current && !aUnderlineRef.current) return; 
    
        //ser props for dom
        aRef.current.style.color =  (color == null || color == undefined || color == '' ? '#fffcf5' :  color)
        aUnderlineRef.current.style.backgroundColor = (color == null || color == undefined || color == '' ? '#fffcf5' :  color)


        //set timeline for dom
        aRef.current.tl = gsap.timeline({ paused: true });
        aRef.current.tl.fromTo(aUnderlineRef.current, {
            width: "0%",
            left: "0%",
        }, {
            width: "100%",
            duration: .5,
        });

        aRef.current.tl.add("midway");

        aRef.current.tl.fromTo(aUnderlineRef.current, {
            width: "100%",
            left: "0%",
        }, {
            width: "0%",
            left: "100%",
            duration: .5,
            immediateRender: false
        });

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

    }, [aRef,aUnderlineRef]);






    return (
        <a datalink={
            (datalink !== null || datalink !== undefined ? datalink : 'empty')
        } onClick={eventPass ? handleClick : null} ref={aRef}>{children}<span ref={aUnderlineRef} className="underline-effect-styles"></span></a>
    )
}