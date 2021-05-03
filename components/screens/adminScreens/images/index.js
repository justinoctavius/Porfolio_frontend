import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useImageApi } from '../../../hooks';
import AdminImagesPage from './Page';

const AdminImagesScreen = () => {
  const [selected, setSelected] = useState();
  const [collection, setCollection] = useState();
  const { readerState, api } = useImageApi();
  const { payload, error, loading } = readerState;

  const getCollection = async () => {
    if (payload) {
      const dataGridCollection = await new DataGridCollection().fill(payload);
      setCollection(dataGridCollection);
    }
  };

  const deleteAction = async () => {
    api.delete(selected);
  };

  useEffect(() => {
    api.getAll();
  }, []);

  useEffect(() => {
    getCollection();
  }, [loading]);

  return (
    <AdminImagesPage
      images={collection}
      deleteAction={deleteAction}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

export default AdminImagesScreen;
