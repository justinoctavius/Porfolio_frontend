import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useStudyApi } from '../../../hooks';
import AdminStudiesPage from './Page';

const AdminStudiesScreen = () => {
  const { readerState, api } = useStudyApi();
  const [collection, setCollection] = useState();
  const [selected, setSelected] = useState();
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
    <AdminStudiesPage
      studies={collection}
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminStudiesScreen;
