import { useEffect, useState } from 'react';
import { useTechApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageTechPage from './page';

const ManageTechScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [level, setLevel] = useState(data?.level || '');
  const [errorMsg, setErrorMsg] = useState('');
  const { writeState, api } = useTechApi();

  const addAction = async () => {
    if (verifyFields()) {
      await api.add(name, level);
    }
  };

  const updateAction = async () => {
    if (verifyFields()) {
      await api.update(data?.tech_id, name, level);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (name && level) return true;
    setErrorMsg('Please fill all the fields');
    return false;
  };

  const getErrorMsg = () => {
    return writeState.error || errorMsg;
  };

  const getSuccessMsg = () => {
    if (writeState.success) {
      return 'success';
    }
  };

  return (
    <ManageLayout
      mode={mode}
      title="Tech"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageTechPage
        name={name}
        level={level}
        setName={setName}
        setLevel={setLevel}
        error={getErrorMsg()}
        success={getSuccessMsg()}
      />
    </ManageLayout>
  );
};

export default ManageTechScreen;
