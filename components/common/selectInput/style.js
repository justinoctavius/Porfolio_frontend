import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';

const { colors } = themes;

const SelectStyled = styled(Block)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: right;

  label {
    transition: 0.3s;
    position: absolute;
    top: ${({ focus }) => (focus ? 0 : '0')};
    left: ${({ focus }) => (focus ? 0 : '45%')};
    color: ${({ focus }) => (!focus ? colors.secondary : colors.third)};
  }
  & > select {
    width: 10em;
    padding: 0.5em;
    margin: 1em;
    border-bottom: 1px solid ${colors.secondary};
    transition: 0.3s;
    appearance: none;
    color: ${colors.secondary};
  }
  & > select:focus {
    width: 20em;
    border-color: ${colors.third};
  }
`;

export default SelectStyled;