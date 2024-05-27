'use client'
import { memo } from 'react';
import IntroWorkPage from '@/components/new/IntroWorkPage';

const Work3 = () => {

    return (
        <div id='work3page'>
             <IntroWorkPage  backgroundImage={"/clone/services3.webp"}/>
        </div>
    );
}

export default memo(Work3);
