import styled from 'styled-components';
import { themes } from '../../../constants';

const StudyCardCollectionStyled = styled.div`
  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default StudyCardCollectionStyled;
