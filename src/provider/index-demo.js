'use client'
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import $, { data } from 'jquery'
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
function calcIndexPage(patchName) {
    let obj = { index: 0 };
    switch (patchName) {
        case '/':
            obj.index = 1;
            break;
        case '/page1':
            obj.index = 2;
            break;
        default:
            obj.index = 0;
            break;
    }
    return obj;
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
    const indexPage = calcIndexPage(pathName)
  
    const indexCurrent = 5

    const lenisRef = useRef()
    const scrollContainerRef = useRef(null)

    const totalTime = 1

    // RUN ON FIRST TIME , JUST ONCE
    // useEffect(() => {
    //     console.log('this run when enter page JUST ONCE TIME')
    //     activeState.current = true
    //     if (pathName === "/page1") {
    //         setShowPage1(true);
    //         setShowPage2(false);
    //         setShowHome(false);
    //     } else if (pathName === "/page2") {
    //         setShowPage2(true);
    //         setShowPage1(false);
    //         setShowHome(false);
    //     } else {
    //         setShowHome(true);
    //         setShowPage1(false);
    //         setShowPage2(false);
    //     }
    // }, []);


    function runSlider(what) {
        what.addClass("active").siblings("li").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose,target, left) {

        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                ease: "power2.in"
            }).set(
                "#LIST_SLIDER_PRODUCTS ul li.active", { zIndex: i_of_slider, clipPath:target}
            ).to(
                "#LIST_SLIDER_PRODUCTS ul li.active",
                { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
            )
        }
    }
    const handleClickIcon = (e) => {
        const indexPage = calcIndexPage(pathName)

        const start = $("#LIST_SLIDER_PRODUCTS ul li.active").index();
        const slideImage = $("#LIST_SLIDER_PRODUCTS ul li").eq($(e.currentTarget.parentElement).index());
        runSlider(slideImage)
        const end = $("#LIST_SLIDER_PRODUCTS ul li.active").index();
        if (start > end) {
            gsapSlider(slideImage,"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "100%");
            
        }
        if (start < end) {
            gsapSlider(slideImage, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "-100%");
        }
    }
    // HANDLE REDIRECT
    const handleRedirect = (e) => {
        e.preventDefault()
   
        const indexPage = calcIndexPage(pathName)
        console.log(indexPage)
        const datalink = e.target.getAttribute("data_link")
        router.push(datalink)
        if (datalink == pathName) return

        if (!isRunning.current) {
            isRunning.current = true
            activeState.current = false
            linkTarget.current = e.target.getAttribute("data_link");
     
            // if (linkTarget.current == '/page1') {
            //     setShowPage1(true);

            // } else if (linkTarget.current == '/page2') {
            //     setShowPage2(true);

            // } else if (linkTarget.current == '/') {

            //     setShowHome(true);

            // }

        }


    };

    return (
        <main>
        
            <nav>
            <div className="navbar_section">
                <div className="grid_12col_container">
                <div className="logo">
                    <span><a onClick={handleRedirect} data_link="/">20 studio</a></span>
                </div>
                <div className="menu_list">
                    <ul className='format'>
                        <li><a onClick={handleRedirect} data_link="/page1">Work</a></li>
                        <li><a onClick={handleRedirect} data_link="/">Studio</a></li>
                        <li><a onClick={handleRedirect} data_link="/page2">News</a></li>
                        <li><a onClick={handleRedirect} data_link="/page1">Contact</a></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </nav>
            <div className="View_Switch_Compo">


                {!showHome &&
                    <div className="page" id="home" >
                        <HomePage />
                    </div>

                }
                {!showPage1 &&
                    <div className="page" id="page1" >
                        <AboutUs />
                    </div>
                }
                {!showPage2 &&
                    <div className="page" id="page2">
                         <Page2 />
                    </div>
                   
                }

            </div>
        </main>
    );
}


