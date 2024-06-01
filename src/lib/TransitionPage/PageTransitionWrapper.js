import styled from 'styled-components';


const stateMap = {
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