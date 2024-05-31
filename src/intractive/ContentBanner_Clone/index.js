'use client';

import useContentBanner_Clone from '@/intractive/ContentBanner_Clone/useContentBanner_Clone';
import React, { PropsWithChildren, ReactElement, useRef } from 'react';



export default function HeadingChars({
  children,
}) {
  const refContent = useRef(null);

  const { initAnimation, playAnimation } = useContentBanner_Clone({
    refContent,
   
  });

  initAnimation()
  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }

  return React.cloneElement(children, { ...{ ref: refContent } });
}
