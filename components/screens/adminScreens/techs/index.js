import { useEffect, useState } from 'react';
import { DataGridCollection } from '../../../../helpers';
import { useTechApi } from '../../../hooks';
import AdminTechsPage from './Page';

const AdminTechsScreen = () => {
  const [collection, setCollection] = useState();
  const [selected, setSelected] = useState();
  const { readerState, api } = useTechApi();
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
    <AdminTechsPage
      techs={collection}
      selected={selected}
      setSelected={setSelected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminTechsScreen;
