import { useEffect } from 'react';
import { SelectInput } from '../../../common';
import { useStudyApi } from '../../../hooks';

const SelectStudyInput = ({ setSelected, selected }) => {
  const { readerState, api } = useStudyApi();
  useEffect(() => {
    api.getAll();
  }, []);

  return (
    <SelectInput
      setSelected={setSelected}
      selected={selected}
      options={readerState?.payload}
      element_id="study_id"
      label="Study"
    />
  );
};

export default SelectStudyInput;
