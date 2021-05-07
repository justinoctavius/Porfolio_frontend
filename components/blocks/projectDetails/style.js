import styled from 'styled-components';
import { themes } from '../../../constants';

const ProjectDetailsStyled = styled.div`
  background-color: ${themes.colors.third + '99'};
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: ${themes.colors.secondary};
  border: 1px solid ${themes.colors.third + '99'};

  & > div:nth-child(1) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    background: ${themes.colors.primary};
    img {
      width: auto;
      height: 30vh;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9;

    div:nth-child(2) {
      overflow-y: scroll;
    }
  }

  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-rows: 1fr 2fr;
    & > div:nth-child(1) {
      position: relative;
      background-color: #000;
      img {
        height: 30em;
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ProjectDetailsStyled;
