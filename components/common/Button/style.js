import styled from 'styled-components';
import {
  borders,
  colors,
  margins,
  paddings,
  sizes,
} from '../../../styles/styles';
import { select } from '../../../utils';

const ButtonStyled = styled.div`
  cursor: ${select.cursor};
  display: inline-block;
  text-align: center;
  ${sizes}
  ${colors}
  ${paddings}
  ${margins}
  ${borders}
  border: 0;
`;

export default ButtonStyled;
