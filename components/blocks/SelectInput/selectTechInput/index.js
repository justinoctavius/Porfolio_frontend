import { useEffect } from 'react';
import { SelectInput } from '../../../common';
import { useTechApi } from '../../../hooks';

const SelectTechInput = ({ setSelected, selected }) => {
  const { readerState, api } = useTechApi();
  useEffect(() => {
    api.getAll();
  }, []);

  return (
    <SelectInput
      setSelected={setSelected}
      selected={selected}
      options={readerState?.payload}
      element_id="tech_id"
      label="Tech"
    />
  );
};

export default SelectTechInput;
