import styled from 'styled-components';
import { colors, margin, padding, radius } from '../../../../constants/themes';
import { Block, rebooting, scale, scaleIn } from '../../../../styles';

const LinksStyled = styled(Block)`
  height: 7em;
  overflow-y: scroll;
  scrollbar-width: none;

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    padding: 1em;
    li:hover {
      animation: ${scale} 0.3s forwards;
      a {
        color: ${colors.third};
      }
    }
    li:active {
      animation: ${scaleIn} 0.3s forwards;
    }
  }
`;

export default LinksStyled;
