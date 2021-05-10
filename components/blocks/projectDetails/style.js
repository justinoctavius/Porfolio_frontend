import styled from 'styled-components';
import { themes } from '../../../constants';
import { rebooting } from '../../../styles';

const ProjectDetailsStyled = styled.div`
  top: 10%;
  position: absolute;
  z-index: 9;
  background-color: ${themes.colors.third};
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: ${themes.colors.secondary};
  border: 1px solid ${themes.colors.third};
  display: ${({ show }) => !show && 'none'};
  & {
    animation: ${rebooting} 0.5s ease;
  }

  .showBtn {
    position: absolute;
    z-index: 9;
    right: 0px;
  }
  .project__detailsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9;
    min-height: 10em;

    .project__descriptionBox {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 1em;
      overflow-y: scroll;
    }
  }

  @media (min-width: ${themes.screen.s3}) {
    position: static;
    display: grid;
    .showBtn {
      display: none;
    }
    .project__detailsContainer {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ProjectDetailsStyled;
