import { projectApi } from '../../apis';
import {
  FAIL_PROJECT_READER,
  FAIL_PROJECT_WRITER,
  REQUEST_PROJECT_READER,
  REQUEST_PROJECT_WRITER,
  SUCCESS_PROJECT_READER,
  SUCCESS_PROJECT_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await projectApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_PROJECT_READER,
    SUCCESS_PROJECT_READER,
    FAIL_PROJECT_READER
  );
};

action.get = (project_id) => async (dispatch) => {
  const query = async () => await projectApi.get(project_id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_PROJECT_READER,
    SUCCESS_PROJECT_READER,
    FAIL_PROJECT_READER
  );
};

action.add = (user_id, name, date, images, technologies) => async (
  dispatch
) => {
  const query = async () =>
    await projectApi.add(user_id, name, date, images, technologies);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_PROJECT_WRITER,
    SUCCESS_PROJECT_WRITER,
    FAIL_PROJECT_WRITER
  );
};

action.delete = (id) => async (dispatch) => {
  const query = async () => await projectApi.delete(id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_PROJECT_WRITER,
    SUCCESS_PROJECT_WRITER,
    FAIL_PROJECT_WRITER
  );
};

action.update = (project_id, name, date, images, technologies) => async (
  dispatch
) => {
  const query = async () =>
    await projectApi.update(project_id, name, date, images, technologies);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_PROJECT_WRITER,
    SUCCESS_PROJECT_WRITER,
    FAIL_PROJECT_WRITER
  );
};

export default action;
