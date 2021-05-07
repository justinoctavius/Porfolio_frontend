import styled, { keyframes } from 'styled-components';
import { Block } from '../../../../styles';

const heart = keyframes`
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const heartInverse = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

const WelcomeScreenStyled = styled(Block)`
  h1 {
    animation: ${heart} 3s infinite;
  }
  p {
    animation: ${heartInverse} 3s infinite;
  }
`;

export default WelcomeScreenStyled;
