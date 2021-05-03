import { useEffect } from 'react';
import { SelectInput } from '../../../common';
import { useImageApi } from '../../../hooks';

const SelectImageInput = ({ setSelected, selected }) => {
  const { readerState, api } = useImageApi();
  useEffect(() => {
    api.getAll();
  }, []);

  return (
    <SelectInput
      setSelected={setSelected}
      selected={selected}
      options={readerState?.payload}
      element_id="image_id"
      label="Image"
    />
  );
};

export default SelectImageInput;
