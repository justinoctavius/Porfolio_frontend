import { technologyApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await technologyApi.getAll();
  await dispatchReader(query, dispatch);
};

action.get = (id) => async (dispatch) => {
  const query = async () => await technologyApi.get(id);
  await dispatchReader(query, dispatch);
};

action.add = (name, level) => async (dispatch) => {
  const query = async () => await technologyApi.add(name, level);
  await dispatchWriter(query, dispatch);
};

action.delete = (id) => async (dispatch) => {
  const query = async () => await technologyApi.delete(id);
  await dispatchWriter(query, dispatch);
};

action.update = (id, name, level) => async (dispatch) => {
  const query = async () => await technologyApi.update(id, name, level);
  await dispatchWriter(query, dispatch);
};

export default action;
