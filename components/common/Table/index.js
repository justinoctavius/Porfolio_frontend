import React from 'react';
import TablePage from './Page';

const Table = ({ collection, idField, selected, setSelected }) => {
  const idIndex = collection?.columns?.indexOf(idField);
  const _setSelectedHandler = (e) => {
    setSelected(e.target.checked ? e.target.value : '');
  };
  return (
    <TablePage
      columns={collection?.columns}
      idIndex={idIndex}
      selected={selected}
      setSelected={_setSelectedHandler}
      rows={collection?.rows}
    />
  );
};

export default Table;
