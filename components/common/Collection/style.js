import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles/common/';

const CollectionStyled = styled(Block)`
  @media (min-width: ${themes.screen.s3}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default CollectionStyled;
