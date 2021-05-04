import { useEffect } from 'react';
import { SelectInput } from '../../../common';
import { useImageApi } from '../../../hooks';

const SelectImageInput = ({ setSelected, selected }) => {
  const levels = [
    { name: 'basic', level: 1 },
    { name: 'intermediate', level: 2 },
    { name: 'advance', level: 3 },
  ];
  return (
    <SelectInput
      setSelected={setSelected}
      selected={selected}
      options={levels}
      element_id="level"
      label="Level"
    />
  );
};

export default SelectImageInput;
