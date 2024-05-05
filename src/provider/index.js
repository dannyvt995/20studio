'use client'
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import useSWR from 'swr'
import HomePage from '@/app/home';
import Page2 from '@/app/page2/page';

import Page1 from '@/app/page1/page';
import Lenis from "@studio-freight/lenis";
import AboutUs from '@/app/aboutus/page';
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';
import WorkSection from '@/components/WorkSection';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ContactPage from '@/modules/ContactPage';
import ProjectsSection from '@/components/ProjectsSection';
import NavbarOpenFull from '@/components/NavbarOpenFull';

// LOAD ASSET TRƯỚC ( TẠM THỜI )
import bannerHomeImg from '../../public/home/hero_banner_bgsection.png';
import bannerAboutusImg from '../../public/page1/hero_about_us.png';
import ButtonHoverUnderLine from '@/components/ButtonHoverUnderLine';


function removeSplash(target) {
    let value
    value = target.replace(/\//g, "");
    if (value == '') value = "home"
    return value
}
export default function Providers() {
   // console.log("Provider Load on client")
    gsap.registerPlugin(ScrollTrigger)
    const router = useRouter();
    const pathName = usePathname();


    /* state for compo eff */
    const [showMenu, setShowMenu] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [showPage1, setShowPage1] = useState(false);
    const [showPage2, setShowPage2] = useState(false);
    const [showPage3, setShowPage3] = useState(false);
    const [showPage4, setShowPage4] = useState(false);



    const isRunning = useRef(false)
    const pathNameFormat = removeSplash(pathName)
   // console.log('pathNameFormat :::::::::::::',pathNameFormat)
    const linkTarget = useRef(null)
    const activeState = useRef(false)
    const menuActive = useRef(false)
    const menuAnimRuning = useRef(false)
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
       // console.log('This runs when entering the page just once.');
        activeState.current = true;
        navbarFullOpenRef.current = document.getElementById("menu")
        switch (pathName) {
            case "/page1":
                setShowPage1(true);
                setShowPage2(false);
                setShowPage3(false);
                setShowPage4(false);
                setShowHome(false);
                break;
            case "/page2":
                setShowPage1(false);
                setShowPage2(true);
                setShowPage3(false);
                setShowPage4(false);
                setShowHome(false);
                break;
            case "/page3":
                setShowPage1(false);
                setShowPage2(false);
                setShowPage3(true);
                setShowPage4(false);
                setShowHome(false);
                break;
            case "/page4":
                setShowPage1(false);
                setShowPage2(false);
                setShowPage3(false);
                setShowPage4(true);
                setShowHome(false);
                break;
            default:
                setShowPage1(false);
                setShowPage2(false);
                setShowPage3(false);
                setShowPage4(false);
                setShowHome(true);
                break;
        }
    }, []);


    // INIT LENIS, STILL WAIT 1 SECOND TO USE
    const navbarListTabRef = useRef(null)
    const navbarIconTabRef = useRef(null)

    useEffect(() => {
       // console.log('init lenis')
   
        setTimeout(() => {
          
            scrollContainerRef.current = document.getElementById(`${pathNameFormat}scroll`)



            scrollContainerRef.current.style.zIndex = indexCurrent
            lenisRef.current = new Lenis({
                syncTouch:true,
                wrapper: scrollContainerRef.current,

                duration: 1.2,
                easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net

            })
          
            /* UPDATE THIS PROXY */
            lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
              // console.log({ scroll, limit, velocity, direction, progress })
               if(navbarListTabRef.current && navbarIconTabRef.current) {
                    if(scroll > 500) {
                        navbarListTabRef.current.style.display = 'none'
                        navbarIconTabRef.current.style.display = 'block'
                    }else{
                        navbarListTabRef.current.style.display = 'block'
                        navbarIconTabRef.current.style.display = 'none'
                    }
               }
                ScrollTrigger.update()
            })
      
            ScrollTrigger.defaults({ scroller: scrollContainerRef.current });

       

            gsap.ticker.add(update)
         

            isRunning.current = false



            setTimeout(() => {
                ScrollTrigger.refresh()
            },1000)
          
        }, 300);
      
        function update(time) {
            lenisRef.current?.raf(time * 1000);
        }

        return () => {
            //console.log('enter page == base patchName')
           // console.log("must clear lenis")
            lenisRef.current?.destroy()
            gsap.ticker.remove(update)
        }
    }, [pathName])

    // CONTROLS STATE EACH PAGE
    function removeCurrentPage() {
        if (pathName === "/page1") {
            setShowPage1(false);
        } else if (pathName === "/page2") {
            setShowPage2(false);
        } else if (pathName === "/page3") {
            setShowPage3(false);
        } else if (pathName === "/page4") {
            setShowPage4(false);
        } else if (pathName === "/") {
            setShowHome(false);
        }
    }
    const animateTransitionPage = (targetDomWrapper, targetDomScroll, nextPage) => {
        const currentDomWrapper = document.getElementById(`${pathNameFormat}`)
        const currentDomScroll = document.getElementById(`${pathNameFormat}scroll`)
        gsap.timeline({
            onComplete: () => {
                removeCurrentPage()
                router.push(nextPage)
            },
            }).set(targetDomWrapper, {
                clipPath: "polygon(0% 100%, 100% 123%, 100% 100%, 0% 100%)"
            }).set(currentDomWrapper, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 123%, 0% 100%)',
            })
            .set(targetDomScroll, {
                opacity:1
            })
            .set(targetDomScroll, {
                zIndex: 2,
                rotate: 7,
                scale: 1.3,
                y: 600,
          //      x: -300,
            })
            .to(targetDomScroll, {
                rotate: 0,
                scale: 1,
                y: 0,
             //   x:0,
                duration: totalTime,
                ease: "power2.out",
            }).to(targetDomWrapper, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: totalTime,
                ease: "power2.out",
            }, '<')
            .to(currentDomWrapper, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: totalTime,
                ease: "power2.out",
            }, '<').to(currentDomScroll, {
                rotate: -7,
                scale: 1.3,
                y: -600,
               // x:-300,
                duration: totalTime,
                ease: "power2.out",
            }, '<').to(currentDomScroll, {
                '-webkit-filter': 'grayscale(100%) ',
                filter: 'grayscale(100%)',
                duration: totalTime,
                ease: "power2.out",
            }, '<')
    };

    const firstLoadAnimation = (elParent, elChild) => {
        const duration = 1.5
        gsap.set(elParent, {
            zIndex: 4,
            clipPath: "polygon(0% 100%, 100% 123%, 100% 100%, 0% 100%)"
        })
        gsap.set(elChild, {
            opacity: 1
        })
        setTimeout(() => {
            gsap.timeline({}).to(elChild, {
                rotate: 0,
                scale: 1,
                y: 0,
                //x:0,
                duration: duration,
                ease: "power4.out",
            }).to(elParent, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: duration,
                ease: "power4.out",
            }, '<')
        }, 500);
    }

    const animateTransitionPageOutside = (targetDomWrapper, targetDomScroll, nextPage) => {
        removeCurrentPage()
        gsap.timeline({
            onComplete: () => {
                gsap.set(`#menu`, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                })
                gsap.set('#menuscroll', {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                   // x:0,
                  
            })
                router.push(nextPage);
            },
            }).set(targetDomWrapper, {
                clipPath: "polygon(0% 100%, 100% 123%, 100% 100%, 0% 100%)"
            }).set(`#menu`, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 123%, 0% 100%)',
            })
            .set(targetDomScroll, {
                opacity:1
            })
            .set(targetDomScroll, {
                zIndex: 2,
                rotate: 7,
                scale: 1.3,
                y: 600,
                //x: -300,
            })
            .to(targetDomScroll, {
                rotate: 0,
                scale: 1,
                y: 0,
                //x:0,
                duration: totalTime,
                ease: "power2.out",
            }).to(targetDomWrapper, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: totalTime,
                ease: "power2.out",
            }, '<')
            .to(`#menu`, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: totalTime,
                ease: "power2.out",
            }, '<').to(`#menuscroll`, {
                rotate: -7,
                scale: 1.3,
                y: -600,
                //x:-300,
                duration: totalTime,
                ease: "power2.out",
            }, '<').to(`#menuscroll`, {
                '-webkit-filter': 'grayscale(100%) ',
                filter: 'grayscale(100%)',
                duration: totalTime,
                ease: "power2.out",
            }, '<')
    };

    useEffect(() => {
       // console.log('usestate Listen showPage1')
        const targetDomWrapper = document.getElementById("page1")
        const targetDomScroll = document.getElementById("page1scroll")
        if (showPage1 && activeState.current) {
           // console.log('FIRE ANIM ENTER PAGE')

            firstLoadAnimation(targetDomWrapper, targetDomScroll)
        }
        if (showPage1 && linkTarget.current == '/page1' && saveTypeLink.current == 'onsite') {
            animateTransitionPage(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
        if (showPage1 && linkTarget.current == '/page1' && saveTypeLink.current == 'outsite') {
            animateTransitionPageOutside(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
    }, [showPage1])

    useEffect(() => {
       // console.log('usestate Listen showPage2')
        const targetDomWrapper = document.getElementById("page2")
        const targetDomScroll = document.getElementById("page2scroll")
        if (showPage2 && activeState.current) {
           // console.log('FIRE ANIM ENTER PAGE')
            firstLoadAnimation(targetDomWrapper, targetDomScroll)
        }
        if (showPage2 && linkTarget.current == '/page2' && saveTypeLink.current == 'onsite') {
           // console.log('2222')
            animateTransitionPage(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
        if (showPage2 && linkTarget.current == '/page2' && saveTypeLink.current == 'outsite') {
            animateTransitionPageOutside(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
    }, [showPage2])

    useEffect(() => {
        //console.log('usestate Listen showPage3')
        const targetDomWrapper = document.getElementById("page3")
        const targetDomScroll = document.getElementById("page3scroll")
        if (showPage3 && activeState.current) {
            //console.log('FIRE ANIM ENTER PAGE')

            firstLoadAnimation(targetDomWrapper, targetDomScroll)
        }
        if (showPage3 && linkTarget.current == '/page3' && saveTypeLink.current == 'onsite') {
            animateTransitionPage(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
        if (showPage3 && linkTarget.current == '/page3' && saveTypeLink.current == 'outsite') {
            animateTransitionPageOutside(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
    }, [showPage3])

    useEffect(() => {
        //console.log('usestate Listen showPage4')
        const targetDomWrapper = document.getElementById("page4")
        const targetDomScroll = document.getElementById("page4scroll")
        if (showPage4 && activeState.current) {
            //console.log('FIRE ANIM ENTER PAGE')
            firstLoadAnimation(targetDomWrapper, targetDomScroll)
        }
        if (showPage4 && linkTarget.current == '/page4' && saveTypeLink.current == 'onsite') {
            animateTransitionPage(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
        if (showPage4 && linkTarget.current == '/page4' && saveTypeLink.current == 'outsite') {
            animateTransitionPageOutside(targetDomWrapper, targetDomScroll, linkTarget.current);
        }
    }, [showPage4])

    useEffect(() => {
       // console.log('usestate Listen showHome')
        const targetDomWrapper = document.getElementById("home")
        const targetDomScroll = document.getElementById("homescroll")
        if (showHome && activeState.current) {
           // console.log('FIRE ANIM ENTER PAGE')
            firstLoadAnimation(targetDomWrapper, targetDomScroll)
        }
        if (showHome && linkTarget.current == '/') {
           // console.log('0000')
            animateTransitionPage(targetDomWrapper, targetDomScroll, linkTarget.current);
        }

    }, [showHome])

    const saveTypeLink = useRef(null)
    const navbarFullOpenRef =  useRef(null)

   
    // HANDLE REDIRECT
    const handleRedirect = (e) => {
        e.preventDefault()
     
        const datalink = e.target.getAttribute("data_link")

        if (datalink == pathName) return

        if (!isRunning.current) {
            isRunning.current = true
            activeState.current = false
            linkTarget.current = e.target.getAttribute("data_link");
            saveTypeLink.current = e.target.getAttribute("data_type");
            if (linkTarget.current == '/page1') {
                setShowPage1(true);

            } else if (linkTarget.current == '/page2') {
                setShowPage2(true);

            } else if (linkTarget.current == '/page3') {
                setShowPage3(true);

            } else if (linkTarget.current == '/page4') {
                setShowPage4(true);

            } else if (linkTarget.current == '/') {

                setShowHome(true);

            }

        }


    };

    const openMenu = (elParent, elChild) => {
        menuAnimRuning.current = true
        const duration = totalTime
        if (menuActive.current == true) {

            gsap.timeline({
                onComplete: () => {
                    menuActive.current = false
                    menuAnimRuning.current = false
                    gsap.set("#menu", { zIndex: 0, opacity: 0 })
                }
            }).set('body',{background:'white'}).to(elChild, {
                rotate: 0,
                scale: 1,
                y: 0,
                '-webkit-filter': 'grayscale(0%) ',
                filter: 'grayscale(0%)',
                duration: duration/1.2,
                ease: "power2.out",
            }).to(elParent, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: duration/1.2,
                ease: "power2.out",
            }, '<').to("#menuscroll", {
                rotate: -4,
                scale: 1.7,
                y: -600,
                duration: duration/1.2,
                ease: "power2.out",
            }, "<")
        } else {
            gsap.timeline({
                onComplete: () => {
                    menuActive.current = true
                    menuAnimRuning.current = false
                }
            }).set('body',{background:'black'}).set("#menu", { zIndex: 0, opacity: 1 }).set("#menuscroll", {
                rotate: -4,
                scale: 1.7,
                y: -600,
            }).set(elChild,{opacity:1}).to(elChild, {
                rotate: 7,
                scale: 1.3,
                y: 600,
                '-webkit-filter': 'grayscale(100%) ',
                filter: 'grayscale(100%)',
                duration: duration,
                ease: "power4.out",
            }).to(elParent, {
                clipPath: "polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)",
                duration: duration,
                ease: "power4.out",
            }, '<').to("#menuscroll", {
                rotate: 0,
                scale: 1,
                y: 0,
                duration: duration,
                ease: "power4.out",
            }, "<")
        }

    }

    const handleOpenMenu = () => {

        const targetDomWrapper = document.getElementById(pathNameFormat)
        const targetDomScroll = document.getElementById(`${pathNameFormat}scroll`)
        if (!menuAnimRuning.current) {
           // console.log("Menu is opening...")
            openMenu(targetDomWrapper, targetDomScroll)
        }
    }


   
    return (
        <main>

            <nav>
                <div className="navbar_section" >
                    <div className="grid_12col_container">
                        <div className="logo row1">
                            <span><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/" data_type="onsite">20 studio</ButtonHoverUnderLine></span>
                        </div>
                        <div className="menu_list row1" ref={navbarListTabRef} style={{display:'block'}}>
                            <ul className='format'>
                                <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page1"  data_type="onsite">Dự án</ButtonHoverUnderLine></li>
                                <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page2"  data_type="onsite">Về chúng tôi</ButtonHoverUnderLine></li>
                               {/*  <li><a onClick={handleRedirect} data_link="/page3"  data_type="onsite">????</a></li> */}
                                <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page4"  data_type="onsite">Liên hệ</ButtonHoverUnderLine></li>
                            </ul>
                        </div>
                        <div className='menu_icon row1' ref={navbarIconTabRef}style={{display:'none'}}>
                            <button onClick={handleOpenMenu}>Menu</button>
                        </div>
                    </div>

                </div>
            </nav>
            <div className="View_Switch_Compo">
                {!showMenu &&
                    <div className="page" id="menu" >
                        <div className='fix' >
                            <div className='content' id="menuscroll">
                                <NavbarOpenFull handleRedirect={handleRedirect}/>
                            </div>
                        </div>
                    </div>
                }
                {showHome &&
                    <div className="page" id="home" >
                        <div className='fix' >
                            <div className='content' id="homescroll">
                                <HomePage heroImg={bannerHomeImg} handleRedirect={handleRedirect}/>
                            </div>
                        </div>
                    </div>
                }
                {showPage1 &&
                    <div className="page" id="page1" >
                        <div className='fix'  >
                            <div className='content' id="page1scroll">
                                <ProjectsSection/>
                            </div>
                        </div>
                    </div>
                }
                {showPage2 &&
                    <div className="page" id="page2">
                        <div className='fix' >
                            <div className='content' id="page2scroll">
                                <AboutUs heroImg={bannerAboutusImg} handleRedirect={handleRedirect}/>
                            </div>
                        </div>
                    </div>
                }
              {/*   {showPage3 &&
                    <div className="page" id="page3">
                        <div className='fix' >
                            <div className='content' id="page3scroll">
                                <FooterSection backgroundClass={'light_background'} />
                            </div>
                        </div>
                    </div>
                } */}
                {showPage4 &&
                    <div className="page" id="page4">
                        <div className='fix' >
                            <div className='content' id="page4scroll">
                                <ContactPage handleRedirect={handleRedirect}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </main>
    );
}


