import styled from 'styled-components';
import { Block, rebooting } from '../../../../styles';

const ItemStyled = styled(Block)`
  &:active {
    animation: ${rebooting} 0.3s ease;
  }
`;

export default ItemStyled;
