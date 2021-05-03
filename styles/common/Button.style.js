import styled from 'styled-components';
import { sizes } from '../../constants/themes';
import { borders, colors, margins, paddings } from '../styles';
import { select } from './../../utils';

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
