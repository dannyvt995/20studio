'use client'
import {useEffect,useRef} from 'react';
import gsap from 'gsap'
import Image from 'next/image';
import DetailWorkPage from '@/components/new/DetailWorkPage';
import Banner_DetailWorkPage from '@/components/new/DetailWorkPage/components/Banner_DetailWorkPage';
import IntroWorkPage from '@/components/new/IntroWorkPage';
Image
const Work1 = () => {
    const title = useRef(null)
    useEffect(() => {
        if(title.current) {
            const tl = gsap.timeline();
            tl.to(title.current,{
                delay:.5, // listencd router change to map exacly js fire
                opacity:1,
                y: -100,
                duration:1
            })
            return () => {
                tl.kill();
              };
        }
    },[])
    return (
        <div id='work1page'>
             <IntroWorkPage backgroundImage={'/clone/services1.webp'}/>
        </div>
    );
}

export default Work1;
