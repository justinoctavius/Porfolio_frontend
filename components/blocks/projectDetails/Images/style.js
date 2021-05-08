import styled from 'styled-components';
import { themes } from '../../../../constants';
import { Block } from '../../../../styles';

const ImagesPage = styled(Block)`
  height: 25em;
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
      display: flex;
      justify-content: center;
      img {
        height: 100%;
      }
    }
    div:nth-child(${({ selected }) => selected}) {
      left: 0px;
    }
  }

  @media (min-width: ${themes.screen.s3}) {
    height: 40em;
  }
`;

export default ImagesPage;
