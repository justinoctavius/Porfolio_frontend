import styled from 'styled-components';
import { themes } from '../../../constants';

const ProjectDetailsStyled = styled.div`
  background-color: ${themes.colors.third + '99'};
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: ${themes.colors.secondary};
  border: 1px solid ${themes.colors.third + '99'};

  .project__detailsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9;

    .project__descriptionBox {
      height: 100%;
      display: flex;
      align-items: flex-start;
      padding: 1em;
      overflow-y: scroll;
    }
  }

  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-rows: 1fr 2fr;
    .project__images {
      position: relative;
      background-color: #000;
      img {
        height: 30em;
      }
    }

    .project__detailsContainer {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ProjectDetailsStyled;
