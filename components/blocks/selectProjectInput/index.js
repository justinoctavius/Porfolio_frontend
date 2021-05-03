import { useEffect } from 'react';
import { SelectInput } from '../../common';
import { useProjectApi } from '../../hooks';

const SelectProjectInput = ({ setSelected, selected }) => {
  const { readerState, api } = useProjectApi();
  useEffect(() => {
    api.getAll();
  }, []);

  return (
    <SelectInput
      setSelected={setSelected}
      selected={selected}
      options={readerState?.payload}
      element_id="project_id"
      label="Project"
    />
  );
};

export default SelectProjectInput;
