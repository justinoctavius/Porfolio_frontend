import { useState } from 'react';
import { useProjectApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageProjectPage from './page';

const ManageProjectScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [date, setDate] = useState(data?.date || '');
  const [description, setDescription] = useState(data?.description || '');
  const [userId, setUserId] = useState(data?.user_id || '');
  const [images, setImages] = useState(data?.images || []);
  const [technologies, setTechnologies] = useState(data?.technologies || []);

  const [errorMsg, setErrorMsg] = useState('');
  const { writeState, api } = useProjectApi();

  const addAction = () => {
    if (verifyFields()) {
      api.add(name, date, userId);
    }
  };

  const updateAction = () => {
    if (verifyFields()) {
      api.update(name, date, data?.Project_id);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (
      name &&
      date &&
      userId &&
      images.length > 0 &&
      technologies.length > 0
    ) {
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
      title="Project"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageProjectPage
        name={name}
        date={date}
        userId={userId}
        images={images}
        technologies={technologies}
        description={description}
        setName={setName}
        setDate={setDate}
        setUserId={setUserId}
        setImages={setImages}
        setTechnologies={setTechnologies}
        setDescription={setDescription}
        error={getErrorMsg()}
        success={getSuccessMsg()}
      />
    </ManageLayout>
  );
};

export default ManageProjectScreen;
