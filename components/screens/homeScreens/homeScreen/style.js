import styled from 'styled-components';
import { themes } from '../../../../constants';
import { colors } from '../../../../constants/themes';
import { Block, rebooting, scale } from '../../../../styles';

const HomeStyled = styled(Block)`
  flex-wrap: wrap;
  position: relative;
  background-image: url('/home_background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;

  &:before {
    content: '';
    background-color: #0005;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
  }
  .home_card {
    z-index: 9;
  }

  & > div {
    transition: 0.3s;
  }
  & > div:hover {
    transform: scale(1.1);
  }
  & > div {
    background: ${colors.third + 'dd'};
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
    height: min-content;
    padding: 1em;
    & > div:hover {
      transform: scale(1);
    }
  }
`;

export default HomeStyled;
