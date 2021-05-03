import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useWorkApi } from '../../../hooks';
import AdminWorksPage from './Page';

const AdminWorksScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { readerState, api } = useWorkApi();
  const { payload, error, loading } = readerState;
  const getCollection = async () => {
    if (payload) {
      const dataGridCollection = await new DataGridCollection().fill(payload);
      setCollection(dataGridCollection);
    }
  };

  const deleteAction = () => {
    api.delete(selected);
  };

  useEffect(() => {
    api.getAll();
  }, []);

  useEffect(() => {
    getCollection();
  }, [loading]);

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
