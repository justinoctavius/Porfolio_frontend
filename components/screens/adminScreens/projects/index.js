import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useProjectApi } from '../../../hooks';
import AdminProjectsPage from './Page';

const AdminProjectsScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { state, api } = useProjectApi();
  const { payload, error, loading } = state;

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
    <AdminProjectsPage
      projects={collection}
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminProjectsScreen;
