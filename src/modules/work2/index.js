'use client'
import {useEffect,useRef} from 'react';
import gsap from 'gsap'
import IntroWorkPage from '@/components/new/IntroWorkPage';

const Work2 = () => {
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
        <div id='work2page'>
              <IntroWorkPage backgroundImage={'/clone/services2.webp'}/>
        </div>
    );
}

export default Work2;
