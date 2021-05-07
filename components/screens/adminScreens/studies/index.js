import { useEffect, useState } from 'react';
import { DataGridCollection, ShowMsg } from '../../../../helpers';
import { useStudyApi } from '../../../hooks';
import AdminStudiesPage from './Page';

const AdminStudiesScreen = () => {
  const { readerState, writeState, api } = useStudyApi();
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
    <AdminStudiesPage
      studies={collection}
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminStudiesScreen;
