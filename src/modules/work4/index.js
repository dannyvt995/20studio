'use client'
import {useEffect,useRef} from 'react';
import gsap from 'gsap'
import IntroWorkPage from '@/components/new/IntroWorkPage';

const Work4 = () => {
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
        <div id='work4page'>
          <IntroWorkPage backgroundImage={'/clone/services4.webp'}/>
        </div>
    );
}

export default Work4;
