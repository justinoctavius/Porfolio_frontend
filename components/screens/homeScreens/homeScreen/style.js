import styled from 'styled-components';
import { themes } from '../../../../constants';
import { colors } from '../../../../constants/themes';
import { Block, rebooting, scale } from '../../../../styles';

const HomeStyled = styled(Block)`
  flex-wrap: wrap;
  & > div {
    transition: 0.3s;
  }
  & > div:hover {
    transform: scale(1.2);
  }
  & > div {
    background: ${colors.third + '55'};
    display: grid;
    cursor: pointer;
    div:nth-child(3) {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: ${themes.screen.s4}) {
    & > div:hover {
      transform: scale(1);
    }
  }
`;

export default HomeStyled;
