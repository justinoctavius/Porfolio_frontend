import { useState } from 'react';
import { useLinkApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageLinkPage from './page';

const ManageLinkScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [url, setUrl] = useState(data?.url || '');
  const [projectId, setProjectId] = useState(data?.project_id || '');
  const [errorMsg, setErrorMsg] = useState('');
  const { addState, updateState, api } = useLinkApi();

  const addAction = () => {
    if (verifyFields()) {
      api.add(name, url, projectId);
    }
  };

  const updateAction = () => {
    if (verifyFields()) {
      api.update(name, url, data?.link_id);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (name && url && projectId) return true;
    setErrorMsg('Please fill all the fields');
    return false;
  };

  const getErrorMsg = () => {
    return addState.error || updateState.error || errorMsg;
  };

  const getSuccessMsg = () => {
    if (addState.success || updateState.success) {
      return 'success';
    }
  };

  return (
    <ManageLayout
      mode={mode}
      title="Link"
      addAction={addAction}
      updateAction={updateAction}
    >
      <ManageLinkPage
        name={name}
        url={url}
        projectId={projectId}
        setName={setName}
        setUrl={setUrl}
        setProjectId={setProjectId}
        error={getErrorMsg()}
        success={getSuccessMsg()}
      />
    </ManageLayout>
  );
};

export default ManageLinkScreen;
