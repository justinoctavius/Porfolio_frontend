import styled from 'styled-components';
import { themes } from '../../../constants';

const ProjectCarouselStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100vw;
  & > div {
    height: min-content;
    display: block;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;
    div {
      width: 15em;
      height: 15em;
    }
    & > div:nth-child(2) {
      display: none;
    }
  }
  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    overflow-x: visible;
    overflow-y: scroll;
    & > div {
      display: grid;
      margin: ${themes.margin.m1};
      & > div:nth-child(2) {
        display: block;
      }
    }
  }
`;

export default ProjectCarouselStyled;
