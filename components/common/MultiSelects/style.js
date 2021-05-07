import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block, scale, scaleIn } from '../../../styles';

const MultiSelectsStyled = styled(Block)`
  position: relative;
  input {
    margin: 0 1em;
  }
  input {
    cursor: pointer;
  }
  & > strong {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    width: 27em;
  }
  input:hover {
    animation: ${scale} 0.3s ease-out forwards;
  }
  input:active {
    animation: ${scaleIn} 0.3s ease;
  }
  & > div {
    transition: 0.3s;
  }
  & > div:nth-child(2) > div:hover {
    color: ${themes.colors.hover};
  }
`;

export default MultiSelectsStyled;
