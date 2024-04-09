"use client"

import React from "react"
import gsap from 'gsap'

export default function ButtonHoverSplit({ children, typeEffect , classAdd}) {
    const aRef = React.useRef(null)
    const aBgRef = React.useRef(null)
    const aTextRef = React.useRef(null)

    const options = {
        textEffect1: {
            props: {
                borderRadius: '50px'
            },
            current: {
                color: '#fffcf5',
                duration: .2
            },
            next: {
                color: '#252324',
                duration: .2
            }
        },
        textEffect2: {
            props: {
                borderRadius: '50%'
            },
            current: {
                color: '#fffcf5',
                duration: .2
            },
            next: {
                color: '#252324',
                duration: .2
            }
        }
    }

   
    React.useEffect(() => {
        if (!aRef.current && !aBgRef.current && !aTextRef.current) return;
        let rls

        switch (typeEffect) {
            case "textEffect1":
                rls = options.textEffect1
                break;
            case "textEffect2":
                rls = options.iconEffect2
                break;
        }
        aRef.current.className = aRef.current.className + ' ' + classAdd
        aRef.current.tl = gsap.timeline({ paused: true }); // auto save timline for each dom
        aRef.current.tl.fromTo(aBgRef.current, {
            y: `101%`
        }, {
            y: 0,
            duration: .5,
        }).to(aTextRef.current, rls.current, '<')

        aRef.current.tl.add("midway");

        aRef.current.tl.fromTo(aBgRef.current, {
            y: 0
        }, {
            y: `-101%`,
            duration: .5,
            immediateRender: false
        }).to(aTextRef.current, rls.next, '<')

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

    }, [aRef,aTextRef,aBgRef]);





    return (
        <button ref={aRef} className="button-styled-effect button-hover-split">
            <span ref={aTextRef} className="split-eff-text">{children}</span>
            {/* <span className="split-eff-btt-next">{children}</span> */}
            <span ref={aBgRef} className="split-eff-background"></span>
        </button>
    )
}