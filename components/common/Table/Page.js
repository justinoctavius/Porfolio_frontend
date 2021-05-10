import { themes } from '../../../constants';
import { Block, P } from '../../../styles';
import { TableStyled } from './style';

const TablePage = ({ rows, columns, idIndex, selected, setSelected }) => {
  return (
    <Block bg="secondary">
      <TableStyled
        size2
        border={themes.colors.third + '88'}
        size={rows?.length}
      >
        <thead>
          <tr>
            <th></th>
            {columns?.map((column, index) => {
              return <th key={index}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  value={row[idIndex]}
                  checked={selected == row[idIndex]}
                  onChange={setSelected}
                />
              </td>
              {row.map((field, index) => (
                <td key={index}>
                  <P
                    className="td_text"
                    maxH="2em"
                    size1
                    scroll
                    primary
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {field}
                  </P>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </Block>
  );
};

export default TablePage;
