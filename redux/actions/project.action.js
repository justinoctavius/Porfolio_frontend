import { projectApi } from '../../apis';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await projectApi.getAll();
  await dispatchReader(query, dispatch);
};

action.get = (project_id) => async (dispatch) => {
  const query = async () => await projectApi.get(project_id);
  await dispatchReader(query, dispatch);
};

action.add = (user_id, name, date, images, technologies) => async (
  dispatch
) => {
  const query = async () =>
    await projectApi.add(user_id, name, date, images, technologies);
  await dispatchWriter(query, dispatch);
};

action.delete = (id) => async (dispatch) => {
  const query = async () => await projectApi.delete(id);
  await dispatchWriter(query, dispatch);
};

action.update = (project_id, name, date, images, technologies) => async (
  dispatch
) => {
  const query = async () =>
    await projectApi.update(project_id, name, date, images, technologies);
  await dispatchWriter(query, dispatch);
};

export default action;
