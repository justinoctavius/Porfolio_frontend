import { studyApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await studyApi.getAll();
  await dispatchReader(query, dispatch);
};

action.get = (link_id) => async (dispatch) => {
  const query = async () => await studyApi.get(link_id);
  await dispatchReader(query, dispatch);
};

action.add = (user_id, name, date, place, description) => async (dispatch) => {
  const query = async () =>
    await studyApi.add(user_id, name, date, place, description);
  await dispatchWriter(query, dispatch);
};

action.delete = (study_id) => async (dispatch) => {
  const query = async () => await studyApi.delete(study_id);
  await dispatchWriter(query, dispatch);
};

action.update = (study_id, name, date, place, description) => async (
  dispatch
) => {
  const query = async () =>
    await studyApi.update(study_id, name, date, place, description);
  await dispatchWriter(query, dispatch);
};

export default action;
