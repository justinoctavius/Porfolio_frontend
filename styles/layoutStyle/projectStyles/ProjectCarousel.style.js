import styled from 'styled-components';
import { themes } from '../../../constants';

const ProjectCarouselStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  & > div {
    height: min-content;
    img {
      width: 14em;
      height: 14em;
    }
  }
  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    overflow-x: visible;
    overflow-y: scroll;
    & > div {
      margin: ${themes.margin.m1};
      height: min-content;
      img {
        border-radius: ${themes.radius.r1};
        width: 20em;
        height: 20em;
      }
    }
  }
`;

export default ProjectCarouselStyled;
