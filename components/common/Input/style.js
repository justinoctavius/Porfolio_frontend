import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';
import {
  margins,
  borders,
  colors,
  paddings,
  sizes,
  texts,
} from '../../../styles/styles';

const InputStyled = styled.input`
  ${texts}
  ${sizes}
  ${borders}
  ${colors}
  ${paddings}
  ${margins}
  border-top: 0;
  border-right: 0;
  border-left: 0;
  transition: 0.3s;
  &:focus {
    border-color: ${themes.colors.hover};
  }
`;

const InputContainerStyled = styled(Block)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em;

  label {
    transition: 0.3s;
    position: absolute;
    top: ${({ focus, value, selected }) =>
      focus || value || selected ? 0 : '25%'};
    left: ${({ focus, value, selected }) =>
      focus || value || selected ? 0 : '8%'};
    color: ${({ focus }) =>
      !focus ? themes.colors.secondary : themes.colors.hover};
  }

  input {
    border-color: ${({ error }) => error && themes.colors.danger};
  }
`;

export { InputStyled, InputContainerStyled };
