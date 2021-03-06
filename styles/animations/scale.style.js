import { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(.5);
  }
`;

export { scale, scaleIn };
