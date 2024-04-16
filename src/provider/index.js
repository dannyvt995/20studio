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
import LenisScrolling from "@/components/LenisScrolling";

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

    // choice from c to n
    // 1. display n nằm dưới c (index & state)
    // 2. action anim : c hidden & n show (clippatch)
    // 3. hidden c (clippatch & index)
    // 4. change index n

    // 3 index

    const indexCurrent = 5
    const indexNext = 10

    useEffect(() => {
        // if (pathName === "/page1") {
        //     setShowPage1(true);
        //     setShowPage2(false);
        //     setShowHome(false);
        // } else if (pathName === "/page2") {
        //     setShowPage2(true);
        //     setShowPage1(false);
        //     setShowHome(false);
        // } else {
        //     setShowHome(true);
        //     setShowPage1(false);
        //     setShowPage2(false);
        // }
    }, [pathName]);


    useEffect(() => {
        
        listAnother.current = [];
        let currentPage = removeSplash(pathName)
        localStorage.setItem('activeBar',currentPage.toString())
        for (let i = 0; i < listSelector.length; i++) {
            if (listSelector[i] !== currentPage) listAnother.current.push(`#${listSelector[i]}`)

        }


        gsap.timeline().set($(`#${currentPage}`), {
            zIndex: indexCurrent,
            opacity:1,
        })
        gsap.set(listAnother.current, {
            zIndex: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            //rotate: 5,
            //scale: 1.3,
            opacity:0,

        })
        isRunning.current = false

        // gsap.timeline()
        // .set($(`#${rls}`),{zIndex:99})
        // .set(listAnother.current,{zIndex:0})
        // .to(`#${rls}`, {
        //     clipPath: "polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)",
        //     duration: 1
        // })
        // .to(listAnother.current, {  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 },'<')

    }, [pathName]);



    const totalTime = 1
    const handleRedirect = (e) => {
        e.preventDefault()
        const datalink = e.target.getAttribute("data-link")
        if(datalink == pathName) return
        if (!isRunning.current) {
            isRunning.current = true
            const link = e.target.getAttribute("data-link");
          
            let rls = removeSplash(pathName)

            if (link == '/page1') {
                gsap.timeline({
                    onComplete: () => {
                        router.push(link)
                    }
                })
                    .set("#page1", { zIndex: 2 , opacity:1})
                    .to("#page1", {
                        // rotate: 0,
                        // scale: 1,
                        duration: totalTime
                    })
                    .to(`#${rls}`, {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                       // rotate: -4,
                       // scale: 1.2
                       duration:  totalTime
                    }, '<')
            } else if (link == '/page2') {
                gsap.timeline({
                    onComplete: () => {
                        router.push(link)
                    }
                })
                    .set("#page2", { zIndex: 2 , opacity:1})
                    .to("#page2", {
                        //rotate: 0,
                        //scale: 1,
                        duration:  totalTime
                    })
                    .to(`#${rls}`, {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                      //  rotate: -4,
                       // scale: 1.2
                       duration:  totalTime
                    }, '<')
            } else if (link == '/') {
                gsap.timeline({
                    onComplete: () => {
                        router.push(link)
                    }
                })
                    .set("#home", { zIndex: 2 , opacity:1})
                    .to("#home", {
                       // rotate: 0,
                       // scale: 1,
                        duration:  totalTime
                    })
                    .to(`#${rls}`, {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                        //rotate: -4,
                        //scale: 1.2
                        duration:  totalTime
                    }, '<')
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
                {!showHome &&
                    <HomePage/>
                }
                {!showPage1 &&
                    <Page1/>
                }
                {!showPage2 &&
                    <Page2/>
                }
   
            </div>
        </main>
    );
}


