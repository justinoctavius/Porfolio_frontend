import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { certificateAction } from '../../redux/actions';

const useCertificateApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.techs);
  const deleteState = useSelector((state) => state.delete);
  const addState = useSelector((state) => state.add);
  const updateState = useSelector((state) => state.update);

  useEffect(() => {}, [state]);

  const api = {
    getAll: async () => await certificateAction.getAll()(dispatch),
    get: async (certificate_id) =>
      await certificateAction.get(certificate_id)(dispatch),
    add: async (name, image_id, study_id) =>
      await certificateAction.add(name, image_id, study_id)(dispatch),
    delete: async (certificate_id) =>
      await certificateAction.delete(certificate_id)(dispatch),
    update: async (name, image_id, certificate_id) =>
      await certificateAction.update(name, image_id, certificate_id)(dispatch),
  };

  return { state, api, deleteState, addState, updateState, dispatch };
};

export default useCertificateApi;
