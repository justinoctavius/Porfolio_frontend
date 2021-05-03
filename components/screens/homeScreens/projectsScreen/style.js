import styled from 'styled-components';
import { themes } from '../../../../constants';

const ProjectScreenStyled = styled.div`
  display: grid;
  grid-template-rows: 10em min-content;
  height: 100%;

  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 11fr;
    max-height: 100vmin;

    & > div:nth-child(1) {
      grid-column: 2;
      grid-row: 1/1;
      padding: 0;
    }
    & > div:nth-child(2) {
      grid-column: 2/1;
      grid-row: 1/3;
    }
    & > div:nth-child(3) {
      grid-column: 2;
      grid-row: 2/12;
    }
  }
`;

export default ProjectScreenStyled;
