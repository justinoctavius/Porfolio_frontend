import styled from 'styled-components';
import { themes } from '../../constants';

const HeaderStyled = styled.div`
  display: grid;
  position: sticky;
  z-index: 9;
  top: 0;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ transparent }) =>
    (transparent && 'transparent') || themes.colors.primary};
  padding: ${themes.padding.p1};
`;

export default HeaderStyled;
