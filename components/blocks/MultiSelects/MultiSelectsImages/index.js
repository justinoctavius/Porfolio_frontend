import { useEffect } from 'react';
import { MultiSelects } from '../../../common';
import { useImageApi } from '../../../hooks';

const MultiSelectsImages = ({ selects, setSelects }) => {
  const { readerState, api } = useImageApi();

  useEffect(() => {
    api.getAll();
  }, []);
  return (
    <MultiSelects
      id_name={'image_id'}
      name="name"
      options={readerState.payload}
      selects={selects}
      setSelects={setSelects}
      title={'Images'}
    />
  );
};

export default MultiSelectsImages;
