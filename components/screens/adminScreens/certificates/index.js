import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useCertificateApi } from '../../../hooks';
import AdminCertificatesPage from './Page';

const AdminCertificatesScreen = () => {
  const [collection, setCollection] = useState();
  const [selected, setSelected] = useState();
  const { state, api } = useCertificateApi();
  const { payload, error, loading } = state;

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
    <AdminCertificatesPage
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
      certificates={collection}
    />
  );
};

export default AdminCertificatesScreen;
