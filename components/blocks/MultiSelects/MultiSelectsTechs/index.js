import { useEffect } from 'react';
import { MultiSelects } from '../../../common';
import { useTechApi } from '../../../hooks';

const MultiSelectsTechs = ({ selects, setSelects }) => {
  const { readerState, api } = useTechApi();

  useEffect(() => {
    api.getAll();
  }, []);
  return (
    <MultiSelects
      id_name={'tech_id'}
      name="name"
      options={readerState.payload}
      selects={selects}
      setSelects={setSelects}
      title={'Techs'}
    />
  );
};

export default MultiSelectsTechs;
