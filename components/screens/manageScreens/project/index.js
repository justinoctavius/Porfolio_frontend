import { useEffect, useState } from 'react';
import { useProjectApi, useUserApi } from '../../../hooks';
import { ManageLayout } from '../../../layouts';
import ManageProjectPage from './page';

const ManageProjectScreen = ({ data, mode }) => {
  const [name, setName] = useState(data?.name || '');
  const [date, setDate] = useState(data?.date || '');
  const [description, setDescription] = useState(data?.description || '');
  const [userId, setUserId] = useState('');
  const [images, setImages] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const { writeState, api } = useProjectApi();
  const {
    readerState: { payload },
  } = useUserApi();

  const addAction = () => {
    if (verifyFields()) {
      api.add(payload.user_id, name, date, images, technologies);
    }
  };

  const getImagesIds = async () => {
    const imagesIds =
      (await data?.images?.map((image) => image.image_id)) || [];
    setImages(imagesIds);
  };

  const getTechsIds = async () => {
    const techsIds =
      (await data?.technologies?.map((tech) => tech.tech_id)) || [];
    setTechnologies(techsIds);
  };

  useEffect(() => {
    getImagesIds();
    getTechsIds();
  }, []);

  const updateAction = () => {
    if (verifyFields()) {
      api.update(data?.project_id, name, date, images, technologies);
    }
  };

  const verifyFields = () => {
    setErrorMsg('');
    if (name && date && images.length > 0 && technologies.length > 0) {
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
