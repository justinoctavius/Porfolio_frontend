import { useEffect, useState } from 'react';
import { DataGridCollection, ShowMsg } from '../../../../helpers';
import { useLinkApi } from '../../../hooks';
import AdminLinksPage from './Page';

const AdminLinksScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { readerState, writeState, api } = useLinkApi();
  const { payload, error, loading } = readerState;

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
  }, [writeState.loading]);

  useEffect(() => {
    getCollection();
  }, [loading]);

  if (error) {
    return ShowMsg.error(error);
  }

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
