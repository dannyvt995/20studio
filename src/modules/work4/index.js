'use client'
import { memo } from 'react';
import IntroWorkPage from '@/components/new/IntroWorkPage';

const Work4 = () => {

    return (
        <div id='work4page'>
             <IntroWorkPage  backgroundImage={"/clone/services4.webp"}/>
        </div>
    );
}

export default memo(Work4);
