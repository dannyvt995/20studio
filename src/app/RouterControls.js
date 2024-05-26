"use client"

import { Suspense } from 'react'
import { NavigationEvents } from './NavigationEvents.js'
import { ReactLenis } from "@studio-freight/react-lenis";
import { PageTransition } from '@/lib/TransitionPage';
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import styled from 'styled-components';

import { useRef, useEffect , useState } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import NavbarOpenFull from "@/components/old/NavbarOpenFull/index.js";
import NavbarModalSection from '@/components/new/NavbarModalSection/index.js';
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop/index.js';
import NextIntersectionObserver from '@/components/HookComponent/NextIntersectionObserver';
import ButtonMenu from '@/components/new/ButtonMenu'
const NavbarSECTION = styled.div`
  position:fixed;
  top:0;
  left:0;
  z-index:999;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > a {
    margin-left:3rem;

  }
  
`;
const listPathAndIdDom = {
    pages: [
      '/',
      '/home',
      '/work',
      '/contact',
      '/about'
    ],
    pagesWork: [
      '/work/work1',
      '/work/work2',
      '/work/work3',
      '/work/work4'
    ],
    idpages: [
      '#homepage',
      '#aboutpage',
      '#workpage',
      '#contactpage'
    ],
    idpagesWork: [
      '#work1page',
      '#work2page',
      '#work3page',
      '#work4page'
    ]
  }
export const pages = [
    {
        path: "/home",
        title: "Page home",
        color: "#03a9f4"
    },
    {
        path: "/about",
        title: "Page about",
        color: "#4caf50"
    },
    {
        path: "/contact",
        title: "Page contact",
        color: "#ff9c07"
    },
    {
        path: "/work",
        title: "Page work",
        color: "#F44336"
    }
];

function removeSplash(target) {
    let value
    if(listPathAndIdDom.pagesWork.includes(target)) {
        value = target.replace(/\/work\//g, "");

    }else{
        value = target.replace(/\//g, "");
        if (value == '') value = "home"
    }
   
    return value
}


export default function RouterControls({ children }) {
 // console.log("RouterControls render )))))))))))))))))")
    const pathName = usePathname()
    const router = useRouter()
    const pathNameFormat = removeSplash(pathName)
    const lenisRef = useRef(null)

    const button_menuRef = useRef(null)
    const navbarRef = useRef(null)
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        navbarRef.current = document.getElementById(`navbar`)
        button_menuRef.current = document.getElementById(`button_menu`)
        navbarRef.current.style.display = 'flex';
        button_menuRef.current.style.display = 'none';
        if(pathName === '/contact') {
            navbarRef.current.classList.add('navbar_item_colorblack')
            button_menuRef.current.classList.add('navbar_item_colorblack')
        }else{
            navbarRef.current.classList.remove('navbar_item_colorblack')
            button_menuRef.current.classList.remove('navbar_item_colorblack')
        }
        setTimeout(() => {
            console.log("lenis fc", pathName)
            gsap.registerPlugin(ScrollTrigger)
            console.log(pathNameFormat)
            const iddom = document.getElementById(`${pathNameFormat}page`)
   
            const target = window.innerHeight*1.5
            //console.log(`w_${pathNameFormat}page`, iddom)

            const lenis = new Lenis({
                syncTouch: true,
                wrapper: iddom,
                // lerp:0.07,
                duration: 1.2,
                // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
                easing: (t) => 1 - Math.pow(1 - t, 3.5)
            })
            lenisRef.current = lenis;
            window.lenis = lenis;
            lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
                ScrollTrigger.update()
                console.log(velocity)
                if (scroll > target && scroll < target * 2) { // tổng 3 target là kill raf này
                    navbarRef.current.style.display = 'none';
                    button_menuRef.current.style.display = 'flex';
                } else if (scroll < target){
                    navbarRef.current.style.display = 'block';
                    button_menuRef.current.style.display = 'none';
                }
            
            })

            ScrollTrigger.defaults({ scroller: iddom });

            //ScrollTrigger.scrollerProxy(`#${removeSplash(pathName)}page`, { pinType: "fixed" });

            // ScrollTrigger.scrollerProxy(`#${pathNameFormat}scroll`, {
            //     scrollTop(value) {
            //         if (arguments.length) {
            //             lenisRef.current.scroll = value; // setter
            //         }
            //         return lenisRef.current.scroll;    // getter
            //     },
            //     getBoundingClientRect() {
            //         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            //     }
            // });

            gsap.ticker.add(update)
            

        }, 1500);
        function update(time) {
            lenisRef.current?.raf(time * 1300);
        }
        return () => {
            //console.log('enter page == base patchName')
            if(lenisRef.current) lenisRef.current.destroy()
            gsap.ticker.remove(update)
        }

    }, [pathName])


    const menuAnimRuning = useRef(false)
    const menuActive = useRef(false)

    const openMenu = (elMenuWrapper, elMenu, elContent) => {
        menuAnimRuning.current = true
        const duration = 1
        if (menuActive.current == true) {

            gsap.timeline({
                onComplete: () => {
                    menuActive.current = false
                    menuAnimRuning.current = false
                    gsap.set([elMenuWrapper,elMenuWrapper.parentNode], { zIndex: -1 })
                }
            })
                .to(button_menuRef.current.children[1], {
                    rotate: 45,
                    duration: duration,
                    ease: "power2.out",
                }, '<')
                .to(elMenuWrapper, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

                    duration: duration,
                    ease: "power2.out",
                }, '<')
                .to(elMenu, {
                    rotate: -4,
                    scale: 1.7,
                    y: -600,
                    '-webkit-filter': 'brightness(42%)',
                    filter: 'brightness(42%)',
                    duration: duration,
                    ease: "power2.out",
                }, '<')
                .to(elContent, {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                    '-webkit-filter': 'brightness(100%)',
                    filter: 'brightness(100%)',
                    duration: duration,
                    ease: "power2.out",
                }, "<")
        } else {
           // console.log("???",elMenuWrapper.parentNode)
            gsap.timeline({
                onComplete: () => {
                    menuActive.current = true
                    menuAnimRuning.current = false
                }
            })
            .set(elContent,{
                '-webkit-filter': 'brightness(100%)',
                filter: 'brightness(100%)',
            })
      
                .set(elMenuWrapper.parentNode,{zIndex: 500})
                .set(elMenuWrapper, {  opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
                .set(elMenu, {
                    rotate: -4,
                    scale: 1.7,
                    y: -600,
                })
                .to(elContent, {
                    rotate: 7,
                    scale: 1.3,
                    y: 600,
                    '-webkit-filter': 'brightness(42%)',
                    filter: 'brightness(42%)',
                    duration: duration,
                    ease: "power4.out",
                }, '<')
                .to(elMenuWrapper, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: duration,
                    ease: "power4.out",
                }, '<')
                .to(elMenu, {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                    '-webkit-filter': 'brightness(100%)',
                    filter: 'brightness(100%)',
                    duration: duration,
                    ease: "power4.out",
                }, '<')
                .to(button_menuRef.current.children[1], {
                    rotate: 0,
                    duration: duration,
                    ease: "power2.out",
                }, '<')
        }

    }
    function handleCickMenu() {

        const targetDomMenu = document.getElementById("navbarModal")
        const targetDomMenuWrapper = document.getElementById("w_navbarModal")
        const targetDomContent = document.getElementById(`${pathNameFormat}page`)
        if (!menuAnimRuning.current) {
            // console.log("Menu is opening...")
            openMenu(targetDomMenuWrapper, targetDomMenu, targetDomContent)
        }


    }
    function handleRedirectBaseHistory(e) {
        e.preventDefault()
        let elMenu = document.getElementById("navbarModal")
        let elMenuWrapper = document.getElementById("w_navbarModal")
        let elContent = document.getElementById(`${pathNameFormat}page`)
       
        router.push(e.target.getAttribute('data_link'))
        let duration = 1
        gsap.timeline({
            onComplete: () => {
                menuActive.current = false
                menuAnimRuning.current = false
                gsap.set([elMenuWrapper,elMenuWrapper.parentNode], { zIndex: -1 })
            }
        })
            .to(elMenuWrapper, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

                duration: duration,
                ease: "power2.out",
            }, '<')
            .to(elMenu, {
                rotate: -4,
                scale: 1.7,
                y: -600,
                '-webkit-filter': 'brightness(42%)',
                filter: 'brightness(42%)',
                duration: duration,
                ease: "power2.out",
            }, '<')
            .to(elContent, {
                rotate: 0,
                scale: 1,
                y: 0,
                '-webkit-filter': 'grayscale(0%) ',
                filter: 'grayscale(0%)',
                duration: duration,
                ease: "power2.out",
            }, "<")

    }
    return (
        <>

            <Suspense fallback={null}>
                <NavigationEvents />
            </Suspense>


            <ButtonMenu handleOpenMenu={handleCickMenu}/>
            <NavbarSectionDeskop handleRedirect={handleRedirectBaseHistory} />
            <NavbarModalSection handleRedirect={handleRedirectBaseHistory} />
            
            
            <ReactLenis root ref={lenisRef} autoRaf={false}>
                
                <PageTransition
                    preset={'roomToTop'}
                    transitionKey={pathName}
                >
                    {children}
                </PageTransition>
            </ReactLenis>
           

        </>

    )

}
