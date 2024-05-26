'use client'
import {useEffect,useRef} from 'react';
import gsap from 'gsap'
import IntroWorkPage from '@/components/new/IntroWorkPage';

const Work3 = () => {
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
        <div id='work3page'>
              <IntroWorkPage backgroundImage={'/clone/services3.webp'}/>
        </div>
    );
}

export default Work3;
