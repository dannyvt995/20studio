import styled, { css } from 'styled-components';
import { TransitionStatus } from 'react-transition-group';
import { Animation } from './animations';
import { createAnimationStyles } from './createAnimationStyles';



const stateMap = {
  // entering: ({ enterAnimation }) => {
  //   return css`
  //     ${createAnimationStyles(enterAnimation)};
  //   `;
  // },
  // exiting: ({ exitAnimation }) => {
  //   return css`
  //     ${createAnimationStyles(exitAnimation)};
  //   `;
  // }
};

const PageTransitionWrapper = styled.div`
  backface-visibility: hidden;
  height: 100vh;
  left: 0;

  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  width: 100%;
  will-change: transform;
  overflow:hidden;
  ${({ state }) => stateMap[state]};
`;

export { PageTransitionWrapper };