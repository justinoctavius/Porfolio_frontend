import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useCertificateApi } from '../../../hooks';
import AdminCertificatesPage from './Page';

const AdminCertificatesScreen = () => {
  const [collection, setCollection] = useState();
  const [selected, setSelected] = useState();
  const { readerState, writeState, api } = useCertificateApi();
  const { payload, error, loading } = readerState;

  const getCollection = async () => {
    if (payload) {
      const dataGridCollection = await new DataGridCollection().fill(payload);
      setCollection(dataGridCollection);
    }
  };

  const deleteAction = async () => {
    api.delete(selected);
    setSelected('');
  };

  useEffect(() => {
    api.getAll();
  }, [writeState.loading]);

  useEffect(() => {
    getCollection();
  }, [loading]);

  return (
    <AdminCertificatesPage
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
      certificates={collection}
    />
  );
};

export default AdminCertificatesScreen;
