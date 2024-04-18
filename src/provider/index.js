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
import FooterSection from '@/components/FooterSection';
import WorkSection from '@/components/WorkSection';

function removeSplash(target) {
    let value
    value = target.replace(/\//g, "");
    if (value == '') value = "home"
    return value
}
export default function Providers() {
    const router = useRouter();
    const pathName = usePathname();

    const [showHome, setShowHome] = useState(false);
    const [showPage1, setShowPage1] = useState(false);
    const [showPage2, setShowPage2] = useState(false);
    const [showPage3, setShowPage3] = useState(false);
    const [showPage4, setShowPage4] = useState(false);

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

    const totalTime = 1.5

    // RUN ON FIRST TIME , JUST ONCE
    useEffect(() => {
        console.log('this run when enter page JUST ONCE TIME')
        activeState.current = true
        if (pathName === "/page1") {
           
            setShowPage1(true);
            setShowPage2(false);
            setShowPage3(false);
            setShowPage4(false);
            setShowHome(false);
         
        } else if (pathName === "/page2") {
            setShowPage1(false);
            setShowPage2(true);
            setShowPage3(false);
            setShowPage4(false);
            setShowHome(false);
        }if (pathName === "/page3") {
            setShowPage1(false);
            setShowPage2(false);
            setShowPage3(true);
            setShowPage4(false);
            setShowHome(false);
         
        } else if (pathName === "/page4") {
            setShowPage1(false);
            setShowPage2(false);
            setShowPage3(false);
            setShowPage4(true);
            setShowHome(false);
        } else {
            setShowPage1(false);
            setShowPage2(false);
            setShowPage3(false);
            setShowPage4(false);
            setShowHome(true);
        }
    }, []);


    // INIT LENIS, STILL WAIT 1 SECOND TO USE
    useEffect(() => {
        console.log('init lenis')
        setTimeout(() => {
            scrollContainerRef.current = document.getElementById(`${rls}scroll`)

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

    const animatePage = (domwrap, domTarget, nextPage) => {
        gsap.timeline({
            onComplete: () => {
                // gsap.timeline().set(`#${rls}`, {
                //     zIndex: 0,
                //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 150%)",

                // }).set(`#${rls}scroll`, {

                //     rotate: 5,
                //     scale: 1.5,
                //     y: 400
                // })

                if (pathName === "/page1") {
                    setShowPage1(false);
                } else if (pathName === "/page2") {
                    setShowPage2(false);
                } else if (pathName === "/page3") {
                    setShowPage3(false);
                } else if (pathName === "/page4") {
                    setShowPage4(false);
                }  else if (pathName === "/") {
                    setShowHome(false);
                }

                router.push(nextPage);
            },
        }).set(domwrap, {
            clipPath: "polygon(0% 100%, 100% 123%, 100% 100%, 0% 100%)"
        }).set(`#${rls}`, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 123%, 0% 100%)',
        })
            .set(domTarget, {
                zIndex: 2,
                rotate: 7,
                scale: 1.3,
                y: 600,
            })
            .to(domTarget, {
                rotate: 0,
                scale: 1,
                y: 0,
                duration: totalTime,
                ease: "power4.out",
            }).to(domwrap, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: totalTime,
                ease: "power4.out",
            }, '<')
            .to(`#${rls}`, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: totalTime,
                ease: "power4.out",
            }, '<').to(`#${rls}scroll`, {
                rotate: -7,
                scale: 1.3,
                y: -600,
                duration: totalTime,
                ease: "power4.out",
            }, '<').to(`#${rls}scroll`, {     '-webkit-filter':'grayscale(100%) ',
            filter: 'grayscale(100%)'
        }, '<')
    };

    const firstLoadAnimation = (elParent,elChild) => {
        const duration = totalTime
        gsap.set(elParent,{
            zIndex:4,
            clipPath: "polygon(0% 100%, 100% 123%, 100% 100%, 0% 100%)"
        })
        gsap.set(elChild,{
            rotate: 7,
            scale: 1.3,
            y: 600,
        })
       setTimeout(() => {
            gsap.timeline({}).to(elChild,{
                rotate: 0,
                scale: 1,
                y: 0,
                duration: duration,
                ease: "power4.out",
            }).to(elParent,{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: duration,
                ease: "power4.out",
            },'<')
       }, 500);
    }
    useEffect(() => {
        const domwrap = document.getElementById("page1")
        const domtarget = document.getElementById("page1scroll")
        if (showPage1 && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
          
            firstLoadAnimation(domwrap,domtarget)
        }
        if (showPage1 && linkTarget.current == '/page1') {
            animatePage(domwrap, domtarget, linkTarget.current);
        }

    }, [showPage1])
    useEffect(() => {
        const domwrap = document.getElementById("page2")
        const domtarget = document.getElementById("page2scroll")
        if (showPage2 && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
            firstLoadAnimation(domwrap,domtarget)
        }
        if (showPage2 && linkTarget.current == '/page2') {
            animatePage(domwrap, domtarget, linkTarget.current);
        }

    }, [showPage2])
    useEffect(() => {
        const domwrap = document.getElementById("page3")
        const domtarget = document.getElementById("page3scroll")
        if (showPage3 && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
          
            firstLoadAnimation(domwrap,domtarget)
        }
        if (showPage3 && linkTarget.current == '/page3') {
            animatePage(domwrap, domtarget, linkTarget.current);
        }

    }, [showPage3])
    useEffect(() => {
        const domwrap = document.getElementById("page4")
        const domtarget = document.getElementById("page4scroll")
        if (showPage4 && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
            firstLoadAnimation(domwrap,domtarget)
        }
        if (showPage4 && linkTarget.current == '/page4') {
            animatePage(domwrap, domtarget, linkTarget.current);
        }

    }, [showPage4])

    useEffect(() => {
        const domwrap = document.getElementById("home")
        const domtarget = document.getElementById("homescroll")
        if (showHome && activeState.current) {
            console.log('FIRE ANIM ENTER PAGE')
            firstLoadAnimation(domwrap,domtarget)
        }
        if (showHome && linkTarget.current == '/') {
            animatePage(domwrap, domtarget, linkTarget.current);
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

            } else if (linkTarget.current == '/page3') {
                setShowPage3(true);

            } else if (linkTarget.current == '/page4') {
                setShowPage4(true);

            }  else if (linkTarget.current == '/') {

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
                                <li><a onClick={handleRedirect} data-link="/page2">Studio</a></li>
                                <li><a onClick={handleRedirect} data-link="/page3">News</a></li>
                                <li><a onClick={handleRedirect} data-link="/page4">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            <div className="View_Switch_Compo">


                {showHome &&
                    <div className="page" id="home" >
                        <div className='fix' >
                            <div className='content' id="homescroll">
                                <HomePage />
                            </div>
                        </div>
                    </div>
                }
                {showPage1 &&
                    <div className="page" id="page1" >
                        <div className='fix'  >
                            <div className='content' id="page1scroll">
                                <AboutUs />
                            </div>
                        </div>
                    </div>
                }
                {showPage2 &&
                    <div className="page" id="page2">
                        <div className='fix' >
                            <div className='content' id="page2scroll">
                                <Page2 />
                            </div>
                        </div>
                    </div>
                }
                 {showPage3 &&
                    <div className="page" id="page3">
                        <div className='fix' >
                            <div className='content' id="page3scroll">
                                <FooterSection />
                            </div>
                        </div>
                    </div>
                }
                  {showPage4 &&
                    <div className="page" id="page4">
                        <div className='fix' >
                            <div className='content' id="page4scroll">
                                <WorkSection />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </main>
    );
}


