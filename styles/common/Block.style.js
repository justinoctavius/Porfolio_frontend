import styled from 'styled-components';
import { select } from '../../utils';
import {
  borders,
  colors,
  margins,
  paddings,
  positions,
  layouts,
  sizes,
  texts,
} from '../styles';

const Block = styled.div`
  overflow: ${select.overflow};
  cursor: ${select.cursor};
  //borders
  ${borders}
  //margin
  ${margins}
  //padding
  ${paddings}
  //color
  ${colors}
  //positions
  ${positions}
  //layouts
  ${layouts}
  //sizes
  ${sizes}
`;

export default Block;
