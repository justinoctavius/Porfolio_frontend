import { workApi } from '../../apis';
import {
  FAIL_WORK_READER,
  FAIL_WORK_WRITER,
  REQUEST_WORK_READER,
  REQUEST_WORK_WRITER,
  SUCCESS_WORK_READER,
  SUCCESS_WORK_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await workApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_WORK_READER,
    SUCCESS_WORK_READER,
    FAIL_WORK_READER
  );
};

action.get = (work_id) => async (dispatch) => {
  const query = async () => await workApi.get(work_id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_WORK_READER,
    SUCCESS_WORK_READER,
    FAIL_WORK_READER
  );
};

action.add = (user_id, name, date, description) => async (dispatch) => {
  const query = async () => await workApi.add(user_id, name, date, description);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_WORK_WRITER,
    SUCCESS_WORK_WRITER,
    FAIL_WORK_WRITER
  );
};

action.delete = (work_id) => async (dispatch) => {
  const query = async () => await workApi.delete(work_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_WORK_WRITER,
    SUCCESS_WORK_WRITER,
    FAIL_WORK_WRITER
  );
};

action.update = (work_id, name, date, description) => async (dispatch) => {
  const query = async () =>
    await workApi.update(work_id, name, date, description);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_WORK_WRITER,
    SUCCESS_WORK_WRITER,
    FAIL_WORK_WRITER
  );
};

export default action;
