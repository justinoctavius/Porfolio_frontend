import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../common';

const ProjectCardStyled = styled(Block)`
  cursor: pointer;
  & > div:nth-child(2) {
    display: none;
  }

  @media (min-width: ${themes.screen.s2}) {
    display: grid;
    grid-template-columns: min-content 1fr;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${themes.padding.p1};
    }
  }
`;

export default ProjectCardStyled;