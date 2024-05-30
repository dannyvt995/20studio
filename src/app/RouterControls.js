"use client"


import { PageTransition } from '@/lib/TransitionPage';

import { usePathname, useRouter } from "next/navigation";

import { useRef, useEffect } from "react";
import gsap from "gsap";

import NavbarModalSection from '@/components/new/NavbarModalSection/index.js';
import NavbarSectionDeskop from '@/components/new/NavbarSectionDeskop/index.js';
import ButtonMenu from '@/components/new/ButtonMenu'

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
    if (listPathAndIdDom.pagesWork.includes(target)) {
        value = target.replace(/\/work\//g, "");

    } else {
        value = target.replace(/\//g, "");
        if (value == '') value = "home"
    }

    return value
}


export default function RouterControls({ children }) {


    console.log("RouterControls render )))))))))))))))))")
    const pathName = usePathname()
    const router = useRouter()
    const pathNameFormat = removeSplash(pathName)

    const buttonOpenMenu = useRef(null)
    const navbarDeskopRef = useRef(null)
    const navbarModalRef = useRef(null)
    const domContent = useRef(null)
    const menuAnimRuning = useRef(false)
    const menuActive = useRef(false)

    const timeTransition = .72
    const easeOpen = "power3.inOut"
    const easeClose = "power3.out"

    useEffect(() => {
        navbarDeskopRef.current = document.getElementById(`navbar`)
        buttonOpenMenu.current = document.getElementById(`button_menu`)
        navbarModalRef.current = document.getElementById(`w_navbarModal`)
        domContent.current = document.getElementById(`${pathNameFormat}page`)
        if (navbarDeskopRef.current) navbarDeskopRef.current.style.display = 'flex';
        if (buttonOpenMenu.current) buttonOpenMenu.current.style.display = 'none';
        return () => {
            navbarDeskopRef.current = null
            buttonOpenMenu.current = null
            navbarModalRef.current = null
            domContent.current = null
        }
    }, [pathName,pathNameFormat])



    const openMenu = ({elMenuWrapper, elMenu, elContent}) => {
        menuAnimRuning.current = true

        if (menuActive.current == true) {

            gsap.timeline({
                onComplete: () => {
                    menuActive.current = false
                    menuAnimRuning.current = false
                    gsap.set([elMenuWrapper, elMenuWrapper.parentNode], { zIndex: -1 })
                }
            })
                .to(buttonOpenMenu.current.children[1], {
                    rotate: 45,
                    duration: timeTransition,
                    ease: easeClose,
                }, '<')
                .to(elMenuWrapper, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

                    duration: timeTransition,
                    ease: easeClose,
                }, '<')
                .to(elMenu, {
                    rotate: -7,
                    scale: 1.2,
                    y: -window.innerHeight / 2,
                    '-webkit-filter': 'brightness(16%)',
                    filter: 'brightness(16%)',
                    duration: timeTransition,
                    ease: easeClose,
                }, '<')
                .to(elContent, {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                    '-webkit-filter': 'brightness(100%)',
                    filter: 'brightness(100%)',
                    duration: timeTransition,
                    ease: easeClose,
                }, "<")
        } else {
            // console.log("???",elMenuWrapper.parentNode)
            gsap.timeline({
                onComplete: () => {
                    menuActive.current = true
                    menuAnimRuning.current = false
                }
            })
                .set(elContent, {
                    '-webkit-filter': 'brightness(100%)',
                    filter: 'brightness(100%)',
                })

                .set(elMenuWrapper.parentNode, { zIndex: 500 })
                .set(elMenuWrapper, { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
                .set(elMenu, {
                    rotate: -7,
                    scale: 1.2,
                    y: -window.innerHeight / 2,
                })
                .to(elContent, {
                    rotate: 7,
                    scale: 1.2,
                    y: window.innerHeight / 2,
                    '-webkit-filter': 'brightness(16%)',
                    filter: 'brightness(16%)',
                    duration: timeTransition,
                    ease: easeOpen,
                }, '<')
                .to(elMenuWrapper, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 105%, 0% 100%)',
                    duration: timeTransition,
                    ease: easeOpen,
                }, '<')
                .to(elMenu, {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                    '-webkit-filter': 'brightness(100%)',
                    filter: 'brightness(100%)',
                    duration: timeTransition,
                    ease: easeOpen,
                }, '<')
                .to(buttonOpenMenu.current.children[1], {
                    rotate: 0,
                    duration: timeTransition,
                    ease: easeOpen,
                }, '<')
        }

    }
    const redirectPageOnModalMenu = ({elMenuWrapper, elMenu,targetUrl}) => {
     
        router.push(targetUrl)  
        gsap.timeline({
            onComplete: () => {
                menuActive.current = false
                menuAnimRuning.current = false
                gsap.set([elMenuWrapper, elMenuWrapper.parentNode], { zIndex: -1 })
            }
        })
            .to(elMenuWrapper, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

                duration: timeTransition,
                ease: easeOpen,
            }, '<')
            .to(elMenu, {
                rotate: -7,
                scale: 1.2,
                y: -window.innerHeight / 2,
                '-webkit-filter': 'brightness(16%)',
                filter: 'brightness(16%)',
                duration: timeTransition,
                ease: easeOpen
            }, '<')
    }
    useEffect(() => {
        console.log("render 1 lần thui nha")
        const handleClickMenu = () => {
            if (!menuAnimRuning.current) {
                openMenu({
                    elMenuWrapper: navbarModalRef.current,
                    elMenu: navbarModalRef.current.children[0],
                    elContent: domContent.current,
                });
            }
        };
       

       if(buttonOpenMenu.current) buttonOpenMenu.current.addEventListener("click", handleClickMenu);

        return () => {
            if(buttonOpenMenu.current) {
                buttonOpenMenu.current.removeEventListener("click", handleClickMenu);
            }
        };
    }, [menuAnimRuning]);

   
    function handleRedirectBaseHistory(e) {
        e.preventDefault()
        let data_link = e.target.getAttribute('data_link')
        if(data_link === pathName) return
        console.log(  data_link)
        redirectPageOnModalMenu({
            elMenuWrapper:navbarModalRef.current,
            elMenu:navbarModalRef.current.children[0],
            targetUrl:data_link
        })
    }
    return (
        <>



            <ButtonMenu />
            <NavbarSectionDeskop />
            <NavbarModalSection handleRedirect={handleRedirectBaseHistory} />
            <PageTransition
                preset={'roomToTop'}
                transitionKey={pathName}
            >
                {children}
            </PageTransition>




        </>

    )

}
