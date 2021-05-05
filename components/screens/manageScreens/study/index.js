import { useState } from 'react';
import { useStudyApi, useUserApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageStudyPage from './page';

const ManageStudyScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [place, setPlace] = useState(data?.place || '');
  const [date, setDate] = useState(data?.date || '');
  const [description, setDescription] = useState(data?.description || '');

  const [errorMsg, setErrorMsg] = useState('');
  const { writeState, api } = useStudyApi();
  const {
    readerState: { payload },
  } = useUserApi();

  const addAction = () => {
    if (verifyFields()) {
      api.add(payload.user_id, name, date, place, description);
    }
  };

  const updateAction = () => {
    if (verifyFields()) {
      api.update(data?.study_id, name, date, place, description);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (name && date && place) {
      return true;
    }
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
      title="Study"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageStudyPage
        name={name}
        date={date}
        place={place}
        description={description}
        setName={setName}
        setDate={setDate}
        setDescription={setDescription}
        setPlace={setPlace}
        error={getErrorMsg()}
        success={getSuccessMsg()}
      />
    </ManageLayout>
  );
};

export default ManageStudyScreen;
