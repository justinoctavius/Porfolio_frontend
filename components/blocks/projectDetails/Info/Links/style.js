import styled from 'styled-components';
import {
  colors,
  margin,
  padding,
  radius,
} from '../../../../../constants/themes';
import { Block, rebooting, scale, scaleIn } from '../../../../../styles';

const LinksStyled = styled(Block)`
  overflow-y: scroll;
  scrollbar-width: none;

  & > ul {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    li {
      background: ${colors.primary};
      padding: 0.5em;
      text-align: center;
      border-radius: ${radius.r2};
      margin: ${margin.m1};
      cursor: pointer;
    }
    li:active {
      animation: ${scaleIn} 0.3s forwards;
    }
  }
`;

export default LinksStyled;
