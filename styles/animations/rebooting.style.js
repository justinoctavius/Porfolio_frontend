import { keyframes } from 'styled-components';

const rebooting = keyframes`
    20% {
      transform: scale(1.3);
    }
    40% {
      transform: scale(0.7);
    }
    60% {
      transform: scale(1.2);
    }
    80% {
      transform: scale(0.8);
    }
    90% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.9);
    }
`;

export default rebooting;
