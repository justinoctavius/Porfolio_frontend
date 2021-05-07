import styled from 'styled-components';
import { themes } from '../../../../constants';
import { Block, scale, scaleIn } from '../../../../styles';

const InfoStyled = styled(Block)`
  position: relative;
  .info__container {
    transition: 0.3s;
    height: ${({ show }) => (show ? '8em' : '0px')};
    overflow: hidden;
  }

  .info__showBtn:hover {
    animation: ${scale} 0.3s forwards;
  }
  .info__showBtn:active {
    animation: ${scaleIn} 0.3s forwards;
  }

  @media (min-width: ${themes.screen.s2}) {
    .info__container {
      height: ${({ show }) => (show ? '15em' : '0px')};
    }
  }
`;

export default InfoStyled;
