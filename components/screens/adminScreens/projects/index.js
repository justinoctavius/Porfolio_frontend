import { useEffect, useState } from 'react';
import { DataGridCollection, ShowMsg } from '../../../../helpers';
import { useProjectApi } from '../../../hooks';
import AdminProjectsPage from './Page';

const AdminProjectsScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { readerState, writeState, api } = useProjectApi();
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
    <AdminProjectsPage
      projects={collection}
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminProjectsScreen;
