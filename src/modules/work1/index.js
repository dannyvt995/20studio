'use client'
import { memo, useEffect } from 'react';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImage1 from '@/components/new/Some_Component_For_Post/GridImageStyle1';
import Layout_1 from '@/components/new/Some_Component_For_Post/Layout_1';
import Layout_2 from '@/components/new/Some_Component_For_Post/Layout_2';
import Layout_3 from '@/components/new/Some_Component_For_Post/Layout_3';
import Layout_4 from '@/components/new/Some_Component_For_Post/Layout_4';
import useAnimationParagraph from '@/hooks/useAnimationParagraph';
import useAnimationHeading from '@/hooks/useAnimationHeading';
import useAnimationHeadingTag from '@/hooks/useAnimationHeadingTag';
const Work1 = ({wftState}) => {
    const { animateHeading, cleanupAnimateHeading } = useAnimationHeading();
    const { animateHeadingTag, cleanupAnimateHeadingTag } = useAnimationHeadingTag();
    const { animateParagraph, cleanupAnimateParagraph } = useAnimationParagraph();
    const propsForGsap = {
        wftState: wftState,
        scrollerRef: "#work1page"
      }
      useEffect(() => {
        if(wftState === 'entered') {
  
     
            animateHeading()
            animateHeadingTag()
            animateParagraph()
       
        }
        return () => {
            cleanupAnimateHeading()
            cleanupAnimateHeadingTag()
            cleanupAnimateParagraph()
        }
      },[wftState])
    
      
    return (
        <div id='work1page'>
             <IntroWorkPage propsForGsap={propsForGsap}  backgroundImage={"/clone/services1.webp"}/>
             <ProjectText disableTitle={false}/>
             <GridImage1 propsForGsap={propsForGsap}/>
             <ProjectText disableTitle={true}/>
             <div className='cream_background'>
                <ProjectText disableTitle={false}/>
             </div>
             <div className='dark_background'>
                <ProjectText disableTitle={false}/>
             </div>
             <Layout_1/>
             <Layout_2/>
             <Layout_3/>
             <Layout_4/>
        </div>
    );
}


export default memo(Work1);