import { imageApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await imageApi.getAll();
  await dispatchReader(query, dispatch);
};

action.get = (image_id) => async (dispatch) => {
  const query = async () => await imageApi.get(image_id);
  await dispatchReader(query, dispatch);
};

action.add = (name, image) => async (dispatch) => {
  const query = async () => await imageApi.add(name, image);
  await dispatchWriter(query, dispatch);
};

action.delete = (image_id) => async (dispatch) => {
  const query = async () => await imageApi.delete(image_id);
  await dispatchWriter(query, dispatch);
};

action.update = (image_id, name, image) => async (dispatch) => {
  const query = async () => await imageApi.update(image_id, name, image);
  await dispatchWriter(query, dispatch);
};

export default action;
