import styled from 'styled-components';
import { themes } from '../../../constants';
import { select } from '../../../utils';

const TableStyled = styled.table`
  font-size: ${select.fontSize};
  min-width: 100%;
  & > tbody > tr:nth-child(even) {
    background-color: #bbb;
  }
  & > thead > tr {
    background-color: ${themes.colors.primary};
    color: ${themes.colors.secondary};
    font-weight: bold;
  }
  th,
  td {
    text-align: right;
    padding: 0.5em;
    border: ${select.border};
  }
`;

export { TableStyled };
