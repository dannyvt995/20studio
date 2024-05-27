'use client'
import { memo } from 'react';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import Layout_1 from '@/components/new/Some_Component_For_Post/Layout_1';
import Layout_2 from '@/components/new/Some_Component_For_Post/Layout_2';

const Work2 = () => {

    return (
        <div id='work2page'>
             <IntroWorkPage  backgroundImage={"/clone/services2.webp"}/>
             <Layout_1/>
                <Layout_2/>
        </div>
    );
}

export default memo(Work2);
