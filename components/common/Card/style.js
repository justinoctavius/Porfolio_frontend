import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';

const CardStyled = styled(Block)`
  img {
    border-radius: ${themes.radius.r1};
    height: 100%;
    width: 100%;
  }

  & > div:nth-child(${({ image }) => (image ? 2 : 1)}) {
    padding: ${themes.padding.p1};
    display: grid;
    grid-template-rows: 3em 1fr 1em;

    & > div:nth-child(3) {
      text-align: right;
      time {
        color: ${themes.colors.secondary};
      }
    }
  }
`;

export default CardStyled;
