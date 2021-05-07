import { useEffect, useState } from 'react';
import { DataGridCollection, ShowMsg } from '../../../../helpers';
import { useWorkApi } from '../../../hooks';
import AdminWorksPage from './Page';

const AdminWorksScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { readerState, writeState, api } = useWorkApi();
  const { payload, error, loading } = readerState;
  const getCollection = async () => {
    if (payload) {
      const dataGridCollection = await new DataGridCollection().fill(payload);
      setCollection(dataGridCollection);
    }
  };

  const deleteAction = () => {
    api.delete(selected);
    setSelected('');
  };

  useEffect(() => {
    api.getAll();
  }, [writeState.loading]);

  useEffect(() => {
    getCollection();
  }, [loading]);

  if (error) {
    return ShowMsg.error(error);
  }

  return (
    <AdminWorksPage
      works={collection}
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminWorksScreen;
