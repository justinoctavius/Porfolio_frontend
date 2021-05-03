import { linkApi } from '../../apis';
import {
  FAIL_LINK_READER,
  FAIL_LINK_WRITER,
  REQUEST_LINK_READER,
  REQUEST_LINK_WRITER,
  SUCCESS_LINK_READER,
  SUCCESS_LINK_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await linkApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_LINK_READER,
    SUCCESS_LINK_READER,
    FAIL_LINK_READER
  );
};

action.get = (link_id) => async (dispatch) => {
  const query = async () => await linkApi.get(link_id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_LINK_READER,
    SUCCESS_LINK_READER,
    FAIL_LINK_READER
  );
};

action.add = (name, url, project_id) => async (dispatch) => {
  const query = async () => await linkApi.add(name, url, project_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_LINK_WRITER,
    SUCCESS_LINK_WRITER,
    FAIL_LINK_WRITER
  );
};

action.delete = (link_id) => async (dispatch) => {
  const query = async () => await linkApi.delete(link_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_LINK_WRITER,
    SUCCESS_LINK_WRITER,
    FAIL_LINK_WRITER
  );
};

action.update = (name, url, link_id) => async (dispatch) => {
  const query = async () => await linkApi.update(name, url, link_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_LINK_WRITER,
    SUCCESS_LINK_WRITER,
    FAIL_LINK_WRITER
  );
};

export default action;
