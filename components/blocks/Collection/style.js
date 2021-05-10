import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles/common';

const CollectionStyled = styled(Block)`
  @media (min-width: ${themes.screen.s3}) {
    display: grid;
    padding: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    grid-gap: 1em;
  }
  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: ${({ maxCols }) =>
      maxCols ? `repeat(${maxCols} 1fr)` : '1fr 1fr 1fr'};
  }
`;

export default CollectionStyled;
