import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';

const ProjectCollectionStyled = styled(Block)`
  & > div {
    margin: 0;
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

export default ProjectCollectionStyled;
