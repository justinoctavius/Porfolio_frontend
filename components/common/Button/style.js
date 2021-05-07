import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';
import { select } from '../../../utils';

const ButtonStyled = styled(Block)`
  cursor: ${select.cursor};
  display: inline-block;
  text-align: center;
  font-size: ${themes.sizes.p};
  border: 0;
`;

export default ButtonStyled;
