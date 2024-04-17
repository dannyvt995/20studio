'use client'
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';

import HomePage from '@/app/home';
import Page2 from '@/app/page2/page';

import Page1 from '@/app/page1/page';
import Lenis from "@studio-freight/lenis";
import AboutUs from '@/app/aboutus/page';
import NavbarSection from '@/components/NavbarSection';

function removeSplash(target) {
    let value
    value = target.replace(/\//g, "");
    if (value == '') value = "home"
    return value
}
export default function Providers() {
    const router = useRouter();
    const pathName = usePathname();
    const durationTrans = 1;
    const [showHome, setShowHome] = useState(false);
    const [showPage1, setShowPage1] = useState(false);
    const [showPage2, setShowPage2] = useState(false);
    const listSelector = ["home", "page1", "page2"]
    const listAnother = useRef([])
    const isRunning = useRef(false)
    const rls = removeSplash(pathName)
    const linkTarget = useRef(null)
    const activeState = useRef(false)
    // choice from c to n
    // 1. display n nằm dưới c (index & state)
    // 2. action anim : c hidden & n show (clippatch)
    // 3. hidden c (clippatch & index)
    // 4. change index n

    // 3 index

    const indexCurrent = 5

    const lenisRef = useRef()
    const scrollContainerRef = useRef(null)

    const totalTime = 1

    // RUN ON FIRST TIME , JUST ONCE
    useEffect(() => {
        console.log('this run when enter page JUST ONCE TIME')
        activeState.current = true
        if (pathName === "/page1") {
            setShowPage1(true);
            setShowPage2(false);
            setShowHome(false);
        } else if (pathName === "/page2") {
            setShowPage2(true);
            setShowPage1(false);
            setShowHome(false);
        } else {
            setShowHome(true);
            setShowPage1(false);
            setShowPage2(false);
        }
    }, []);


    // INIT LENIS, STILL WAIT 1 SECOND TO USE
    useEffect(() => {
        console.log('init lenis')
        setTimeout(() => {
            scrollContainerRef.current = document.getElementById(`${rls}`)

            scrollContainerRef.current.style.zIndex = indexCurrent
            lenisRef.current = new Lenis({

                wrapper: scrollContainerRef.current,

                duration: 1.2,
                easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net

            })

            isRunning.current = false

        }, 300);
        gsap.ticker.add(update)
        function update(time) {
            lenisRef.current?.raf(time * 1000);
        }


        return () => {
            console.log('enter page == base patchName')
            console.log("must clear lenis")
            lenisRef.current?.destroy()
            gsap.ticker.remove(update)
        }
    }, [pathName])

    // CONTROLS STATE EACH PAGE

    const animatePage = (domTarget, nextPage) => {
        gsap.timeline({
            onComplete: () => {
                gsap.set(`#${rls}`, {
                    opacity: 0,
                    zIndex: 0,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    rotate: 5,
                    scale: 1.3
                });

                if (pathName === "/page1") {
                    setShowPage1(false);
                } else if (pathName === "/page2") {
                    setShowPage2(false);
                } else if (pathName === "/") {
                    setShowHome(false);
                }

                router.push(nextPage);
            }
        })
            .set(domTarget, {
                zIndex: 2,
                opacity: 1,
                rotate: 5,
                scale: 1.3,
            })
            .to(domTarget, {
                rotate: 0,
                scale: 1,
                duration: totalTime
            })
            .to(`#${rls}`, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                rotate: -4,
                scale: 1.2,
                duration: totalTime
            }, '<');
    };

    useEffect(() => {
        if (showPage1 && activeState.current) {
            const domtarget = document.getElementById("page1")
            gsap.to(domtarget, {
                rotate: 0,
                scale: 1,
                duration: totalTime
            })
        }
        if (showPage1 && linkTarget.current == '/page1') {
            const domtarget = document.getElementById("page1")
            animatePage(domtarget, linkTarget.current);
        }

    }, [showPage1])
    useEffect(() => {
        if (showPage2 && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
        }
        if (showPage2 && linkTarget.current == '/page2') {
            const domtarget = document.getElementById("page2")
            animatePage(domtarget, linkTarget.current);

        }

    }, [showPage2])

    useEffect(() => {
        if (showHome && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
        }
        if (showHome && linkTarget.current == '/') {
            const domtarget = document.getElementById("home")
            animatePage(domtarget, linkTarget.current);

        }

    }, [showHome])

    // HANDLE REDIRECT
    const handleRedirect = (e) => {
        e.preventDefault()
        const datalink = e.target.getAttribute("data-link")
        if (datalink == pathName) return

        if (!isRunning.current) {
            isRunning.current = true
            activeState.current = false
            linkTarget.current = e.target.getAttribute("data-link");

            if (linkTarget.current == '/page1') {
                setShowPage1(true);

            } else if (linkTarget.current == '/page2') {
                setShowPage2(true);

            } else if (linkTarget.current == '/') {

                setShowHome(true);

            }

        }


    };

    return (
        <main>
        
            <nav>
            <div className="navbar_section">
                <div className="grid_12col_container">
                <div className="logo">
                    <span><a onClick={handleRedirect} data-link="/">20 studio</a></span>
                </div>
                <div className="menu_list">
                    <ul>
                        <li><a onClick={handleRedirect} data-link="/page1">Work</a></li>
                        <li><a onClick={handleRedirect} data-link="/">Studio</a></li>
                        <li><a onClick={handleRedirect} data-link="/page2">News</a></li>
                        <li><a >Contact</a></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </nav>
            <div className="View_Switch_Compo">


                {showHome &&
                    <div className="page" id="home" >
                        <HomePage />
                    </div>

                }
                {showPage1 &&
                    <div className="page" id="page1" >
                        <AboutUs />
                    </div>
                }
                {showPage2 &&
                    <div className="page" id="page2">
                         <Page2 />
                    </div>
                   
                }

            </div>
        </main>
    );
}


