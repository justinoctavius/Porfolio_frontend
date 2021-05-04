import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';

const ManageLayoutStyled = styled(Block)`
  & > div {
    & > div:nth-child(2) {
      scrollbar-width: none;
    }
  }
  @media (max-width: ${themes.screen.s4}) {
    & > div {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      background-color: ${themes.colors.primary + '55'};
    }
  }
  @media (min-width: ${themes.screen.s4}) {
    & > div {
      width: 70vw;
      height: max-content;
    }
  }
`;

export default ManageLayoutStyled;
