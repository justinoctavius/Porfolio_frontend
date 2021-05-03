import { technologyApi } from '../../apis';
import {
  FAIL_TECH_READER,
  FAIL_TECH_WRITER,
  REQUEST_TECH_READER,
  REQUEST_TECH_WRITER,
  SUCCESS_TECH_READER,
  SUCCESS_TECH_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await technologyApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_TECH_READER,
    SUCCESS_TECH_READER,
    FAIL_TECH_READER
  );
};

action.get = (id) => async (dispatch) => {
  const query = async () => await technologyApi.get(id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_TECH_READER,
    SUCCESS_TECH_READER,
    FAIL_TECH_READER
  );
};

action.add = (name, level) => async (dispatch) => {
  const query = async () => await technologyApi.add(name, level);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_TECH_WRITER,
    SUCCESS_TECH_WRITER,
    FAIL_TECH_WRITER
  );
};

action.delete = (id) => async (dispatch) => {
  const query = async () => await technologyApi.delete(id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_TECH_WRITER,
    SUCCESS_TECH_WRITER,
    FAIL_TECH_WRITER
  );
};

action.update = (id, name, level) => async (dispatch) => {
  const query = async () => await technologyApi.update(id, name, level);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_TECH_WRITER,
    SUCCESS_TECH_WRITER,
    FAIL_TECH_WRITER
  );
};

export default action;
