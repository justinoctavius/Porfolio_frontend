import { linkApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await linkApi.getAll();
  console.log(query());
  await dispatchReader(query, dispatch);
};

action.get = (link_id) => async (dispatch) => {
  const query = async () => await linkApi.get(link_id);
  await dispatchReader(query, dispatch);
};

action.add = (name, url, project_id) => async (dispatch) => {
  const query = async () => await linkApi.add(name, url, project_id);
  await dispatchWriter(query, dispatch);
};

action.delete = (link_id) => async (dispatch) => {
  const query = async () => await linkApi.delete(link_id);
  await dispatchWriter(query, dispatch);
};

action.update = (name, url, link_id) => async (dispatch) => {
  const query = async () => await linkApi.update(name, url, link_id);
  await dispatchWriter(query, dispatch);
};

export default action;
