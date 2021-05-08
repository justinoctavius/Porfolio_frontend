import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';

const ManageLayoutStyled = styled(Block)`
  & > div {
    height: 70em;
    & > div:nth-child(2) {
      scrollbar-width: none;
      overflow-x: hidden;
    }
  }
  @media (max-width: ${themes.screen.s4}) {
    & > div {
      width: 100%;
      height: 100%;
      border-radius: 0;

      .manage_btn {
        position: absolute;
        padding: 1em;
        bottom: 0px;
        right: 0px;
      }
    }
  }
`;

export default ManageLayoutStyled;
