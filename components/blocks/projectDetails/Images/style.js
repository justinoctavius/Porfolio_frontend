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
    background-color: ${themes.colors.secondary + '88'};
    border-radius: 50%;
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
    width: 100%;
    height: 100%;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    background-color: ${themes.colors.secondary};
    overflow: hidden;
    img {
      position: absolute;
      left: 200%;
      height: 100%;
    }
    img:nth-child(${({ selected }) => selected}) {
      position: static;
    }
  }

  @media (min-width: ${themes.screen.s3}) {
    height: 40em;
  }
`;

export default ImagesPage;
