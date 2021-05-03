import styled from 'styled-components';
import {
  borders,
  colors,
  margins,
  paddings,
  sizes,
} from '../../../styles/styles';
import { select } from '../../../utils';

const ButtonStyled = styled.button`
  cursor: ${select.cursor};
  ${sizes}
  ${colors}
  ${paddings}
  ${margins}
  ${borders}
  border: 0;
`;

export default ButtonStyled;
