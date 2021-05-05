import styled from 'styled-components';
import { themes } from '../../../constants';
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
  font-size: ${themes.sizes.p};
  ${sizes}
  ${colors}
  ${paddings}
  ${margins}
  ${borders}
  border: 0;
`;

export default ButtonStyled;
