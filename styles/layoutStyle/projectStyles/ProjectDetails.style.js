import styled from 'styled-components';
import { themes } from '../../../constants';

const ProjectDetailsStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 50vmax;

  & > div:nth-child(1) {
    position: absolute;
    height: 100%;
    left: 0px;
    top: 0px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:nth-child(2) {
    width: 50%;
    background-color: ${themes.colors.secondary + 'dd'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${themes.padding.p1};
    z-index: 9;
  }

  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-rows: 1fr 2fr;
    min-height: 87vh;
    & > div:nth-child(1) {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ProjectDetailsStyled;
