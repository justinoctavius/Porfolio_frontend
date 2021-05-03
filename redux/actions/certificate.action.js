import { certificateApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await certificateApi.getAll();
  await dispatchReader(query, dispatch);
};

action.get = (certificate_id) => async (dispatch) => {
  const query = async () => await certificateApi.get(certificate_id);
  await dispatchReader(query, dispatch);
};

action.add = (name, image_id, study_id) => async (dispatch) => {
  const query = async () => await certificateApi.add(name, image_id, study_id);
  await dispatchWriter(query, dispatch);
};

action.delete = (certificate_id) => async (dispatch) => {
  const query = async () => await certificateApi.delete(certificate_id);
  await dispatchWriter(query, dispatch);
};

action.update = (name, image_id, certificate_id) => async (dispatch) => {
  const query = async () =>
    await certificateApi.update(name, image_id, certificate_id);
  await dispatchWriter(query, dispatch);
};

export default action;
