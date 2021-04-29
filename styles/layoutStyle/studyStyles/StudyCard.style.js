import styled from 'styled-components';
import { themes } from '../../../constants';
import { select } from '../../../utils';

const CardStyled = styled.div`
  display: grid;
  margin: ${select.margin({ m1: true })};
  border: ${select.border({ border: 'third' })};
  grid-template-columns: ${({ image }) => (image ? '1fr 2fr' : '1fr')};
  min-height: 15em;

  img {
    border-radius: ${select.radius({ radius1: true })};
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
