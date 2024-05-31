
import { gsap } from 'gsap';
import {  useCallback } from 'react';

export default function useContentBanner_Clone({
  refContent,
}) {

  const initAnimation = useCallback(() => {
    console.log(refContent,"initAnimation")
  }, [refContent]);


  const playAnimation = useCallback(() => {
    console.log(refContent,"playAnimation")
  }, [refContent]);


  return { initAnimation, playAnimation };
}
