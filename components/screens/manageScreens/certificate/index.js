import { useEffect, useState } from 'react';
import { useCertificateApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageCertificatePage from './page';

const ManageCertificateScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [studyId, setStudyId] = useState(data?.study_id || '');
  const [imageId, setImageId] = useState(data?.image?.image_id || '');
  const [errorMsg, setErrorMsg] = useState('');
  const { writeState, api } = useCertificateApi();

  const addAction = () => {
    if (verifyFields()) {
      api.add(name, imageId, studyId);
      setStudyId('');
    }
  };

  const updateAction = () => {
    if (verifyFields()) {
      api.update(name, imageId, data?.certificate_id);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if ((name && imageId && studyId) || (name && imageId && mode == 'update')) {
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
      title="Certificate"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageCertificatePage
        name={name}
        studyId={studyId}
        imageId={imageId}
        setName={setName}
        setStudyId={setStudyId}
        setImageId={setImageId}
        error={getErrorMsg()}
        success={getSuccessMsg()}
        mode={mode}
      />
    </ManageLayout>
  );
};
export default ManageCertificateScreen;
