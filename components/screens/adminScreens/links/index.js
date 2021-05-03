import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useLinkApi } from '../../../hooks';
import AdminLinksPage from './Page';

const AdminLinksScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { state, addState, updateState, deleteState, api } = useLinkApi();
  const { payload, error, loading } = state;

  const getCollection = async () => {
    if (payload) {
      const dataGridCollection = await new DataGridCollection().fill(payload);
      setCollection(dataGridCollection);
    }
  };

  const deleteAction = async () => {
    setSelected('');
    await api.delete(selected);
  };

  useEffect(() => {
    api.getAll();
  }, [addState.loading, updateState.loading, deleteState.loading]);

  useEffect(() => {
    getCollection();
  }, [loading]);

  return (
    <AdminLinksPage
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
      links={collection}
    />
  );
};

export default AdminLinksScreen;
