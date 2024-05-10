'use client'
import {useEffect,useRef} from 'react';
import gsap from 'gsap'

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
            <section className='part1'>
                    <h1 ref={title} style={{opacity:0}}>Work page 3</h1>
            </section>
            <section className='part2'></section>
        </div>
    );
}

export default Work3;
