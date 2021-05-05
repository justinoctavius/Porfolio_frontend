import { useState } from 'react';
import { useUserApi, useWorkApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageWorkPage from './page';

const ManageWorkScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [date, setDate] = useState(data?.date || '');
  const [description, setDescription] = useState(data?.description || '');
  const [errorMsg, setErrorMsg] = useState('');
  const { writeState, api } = useWorkApi();
  const {
    readerState: { payload },
  } = useUserApi();

  const addAction = async () => {
    if (verifyFields()) {
      await api.add(payload.user_id, name, date, description);
    }
  };

  const updateAction = async () => {
    if (verifyFields()) {
      await api.update(data?.work_id, name, date, description);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (name && date) return true;
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
      title="Work"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageWorkPage
        name={name}
        date={date}
        description={description}
        setName={setName}
        setDate={setDate}
        setDescription={setDescription}
        error={getErrorMsg()}
        success={getSuccessMsg()}
      />
    </ManageLayout>
  );
};

export default ManageWorkScreen;
