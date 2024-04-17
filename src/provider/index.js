'use client'
import { useState, useEffect, useRef, Children } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import $ from 'jquery'
import HomePage from '@/app/home';
import Page2 from '@/app/page2/page';
import Page1Components from '@/components/Page1Component';
import HeroBanner from '@/modules/HeroBanner';
import Page1 from '@/app/page1/page';
import Lenis from "@studio-freight/lenis";

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
    const activeState = useRef(null)
    // choice from c to n
    // 1. display n nằm dưới c (index & state)
    // 2. action anim : c hidden & n show (clippatch)
    // 3. hidden c (clippatch & index)
    // 4. change index n

    // 3 index

    const indexCurrent = 5
    const indexNext = 10

    const lenisRef = useRef()
    const scrollRef = useRef(null)
    const scrollContainerRef = useRef(null)

    const totalTime = 1

    // RUN ON FIRST TIME , JUST ONCE
    useEffect(() => {
        console.log('this run when enter page')
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
        const rm = removeSplash(pathName)
        setTimeout(() => {
            scrollContainerRef.current = document.getElementById(`${rm}`)

            scrollContainerRef.current.style.zIndex = indexCurrent
            lenisRef.current = new Lenis({

                wrapper: scrollContainerRef.current,

                duration: 1.2,
                easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net

            })
            isRunning.current = false

        }, 100);
        function update(time) {
            lenisRef.current?.raf(time * 1000);
        }

        gsap.ticker.add(update)
        return () => {
            console.log('enter page == base patchName')
            console.log("must clear lenis")
            lenisRef.current?.destroy()
            gsap.ticker.remove(update)
        }
    }, [pathName])

    // CONTROLS STATE EACH PAGE
    useEffect(() => {
        if (showPage1 && linkTarget.current == '/page1') {
            const domtarget = document.getElementById("page1")
            gsap.timeline({
                onComplete: () => {
                    gsap.set(`#${rls}`, {
                        opacity: 0,
                        zIndex: 0,
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        rotate: 5,
                        scale: 1.3
                    })

                    if (pathName === "/page1") {
                        setShowPage1(false);
                    } else if (pathName === "/page2") {
                        setShowPage2(false);
                    } else if (pathName === "/") {
                        setShowHome(false);
                    }

                    router.push(linkTarget.current)
                }
            })
                .set(domtarget, {
                    zIndex: 2, opacity: 1,
                    rotate: 5,
                    scale: 1.3,
                })
                .to(domtarget, {
                    rotate: 0,
                    scale: 1,
                    duration: totalTime
                })
                .to(`#${rls}`, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                    rotate: -4,
                    scale: 1.2,
                    duration: totalTime
                }, '<')

        }

    }, [showPage1])
    useEffect(() => {
        if (showPage2 && linkTarget.current == '/page2') {
            const domtarget = document.getElementById("page2")
            gsap.timeline({
                onComplete: () => {
                    gsap.set(`#${rls}`, {
                        opacity: 0,
                        zIndex: 0,
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        rotate: 5,
                        scale: 1.3
                    })

                    if (pathName === "/page1") {
                        setShowPage1(false);
                    } else if (pathName === "/page2") {
                        setShowPage2(false);
                    } else if (pathName === "/") {
                        setShowHome(false);
                    }

                    router.push(linkTarget.current)
                }
            })
                .set(domtarget, {
                    zIndex: 2, opacity: 1,
                    rotate: 5,
                    scale: 1.3,
                })
                .to(domtarget, {
                    rotate: 0,
                    scale: 1,
                    duration: totalTime
                })
                .to(`#${rls}`, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                    rotate: -4,
                    scale: 1.2,
                    duration: totalTime
                }, '<')

        }

    }, [showPage2])
    useEffect(() => {

        if (showHome && linkTarget.current == '/') {
            const domtarget = document.getElementById("home")
            gsap.timeline({
                onComplete: () => {
                    gsap.set(`#${rls}`, {
                        opacity: 0,
                        zIndex: 0,
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        rotate: 5,
                        scale: 1.3
                    })

                    if (pathName === "/page1") {
                        setShowPage1(false);
                    } else if (pathName === "/page2") {
                        setShowPage2(false);
                    } else if (pathName === "/") {
                        setShowHome(false);
                    }

                    router.push(linkTarget.current)
                }
            })
                .set(domtarget, {
                    zIndex: 2, opacity: 1,
                    rotate: 5,
                    scale: 1.3,
                })
                .to(domtarget, {
                    rotate: 0,
                    scale: 1,
                    duration: totalTime
                })
                .to(`#${rls}`, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                    rotate: -4,
                    scale: 1.2,
                    duration: totalTime
                }, '<')

        }

    }, [showHome])

    // HANDLE REDIRECT
    const handleRedirect = (e) => {
        e.preventDefault()
        const datalink = e.target.getAttribute("data-link")
        if (datalink == pathName) return
        if (!isRunning.current) {
            isRunning.current = true
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
            <div className='navbar'>
                <ul>
                    <li>
                        <a onClick={handleRedirect} data-link="/">Home</a>
                    </li>
                    <li>
                        <a onClick={handleRedirect} data-link="/page1">Page 1</a>
                    </li>
                    <li>
                        <a onClick={handleRedirect} data-link="/page2">Page 2</a>
                    </li>
                </ul>
            </div>
            <div className="ProvidersProviders">


                {showHome &&
                    <HomePage />
                }
                {showPage1 &&
                    <Page1 />
                }
                {showPage2 &&
                    <Page2 />
                }

            </div>
        </main>
    );
}


