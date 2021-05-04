import { useDispatch, useSelector } from 'react-redux';
import { certificateAction } from '../../redux/actions';

const useCertificateApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.certificates);
  const writeState = useSelector((state) => state.certificate);

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

  return { readerState, api, writeState, dispatch };
};

export default useCertificateApi;
