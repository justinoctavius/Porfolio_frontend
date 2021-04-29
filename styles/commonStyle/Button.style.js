import styled from 'styled-components';
import { select } from './../../utils';

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: ${select.background};
  color: ${select.color};
  padding: ${select.padding};
  margin: ${select.margin};
  border-radius: ${select.radius};
  border: 0;
`;

export default ButtonStyled;
