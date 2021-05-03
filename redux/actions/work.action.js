import { workApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await workApi.getAll();
  await dispatchReader(query, dispatch);
};

action.get = (work_id) => async (dispatch) => {
  const query = async () => await workApi.get(work_id);
  await dispatchReader(query, dispatch);
};

action.add = (user_id, name, date, description) => async (dispatch) => {
  const query = async () => await workApi.add(user_id, name, date, description);
  await dispatchWriter(query, dispatch);
};

action.delete = (work_id) => async (dispatch) => {
  const query = async () => await workApi.delete(work_id);
  await dispatchWriter(query, dispatch);
};

action.update = (work_id, name, date, description) => async (dispatch) => {
  const query = async () =>
    await workApi.update(work_id, name, date, description);
  await dispatchWriter(query, dispatch);
};

export default action;
