import styled from 'styled-components';
import { colors, margin, padding, radius } from '../../../../constants/themes';
import { Block } from '../../../../styles';

const TechsStyled = styled(Block)`
  height: 8em;
  overflow-y: scroll;
  scrollbar-width: none;

  & > ul {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    li {
      text-align: center;
      background: ${colors.third};
      padding: ${padding.p1};
      margin: ${margin.m1};
      border-radius: ${radius.r2};
      color: ${colors.secondary};
    }
  }
`;

export default TechsStyled;
