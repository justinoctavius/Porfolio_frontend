import styled from 'styled-components';
import { themes } from '../../../../constants';
import { Block } from '../../../../styles';

const ImagesPage = styled(Block)`
  height: 30vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  background: ${themes.colors.primary};
  .images__Btn {
    position: absolute;
    z-index: 9;
  }

  .nextBtn {
    right: 0px;
    top: 40%;
  }

  .prevBtn {
    left: 0px;
    top: 40%;
  }

  .images__container {
    div {
      left: 100%;
      width: 100%;
      height: 100%;
      transition: 0.3s;
      img {
        width: 100%;
        height: 40vh;
      }
    }
    div:nth-child(${({ selected }) => selected}) {
      left: 0px;
    }
  }
`;

export default ImagesPage;
