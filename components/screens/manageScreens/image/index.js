import { useEffect, useState } from 'react';
import { useImageApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageImagePage from './page';

const ManageImageScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const { writeState, api } = useImageApi();

  const addAction = () => {
    if (verifyFields()) {
      api.add(name, image);
    }
  };

  const updateAction = () => {
    if (verifyFields()) {
      api.update(data?.image_id, name, image);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (name && image) return true;
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

  console.log(writeState.error);

  useEffect(() => {}, [writeState.loading]);

  return (
    <ManageLayout
      mode={mode}
      title="Image"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageImagePage
        name={name}
        image={image}
        setName={setName}
        setImage={setImage}
        error={getErrorMsg()}
        success={getSuccessMsg()}
      />
    </ManageLayout>
  );
};

export default ManageImageScreen;
