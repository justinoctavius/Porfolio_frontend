import { certificateApi } from '../../apis';
import {
  FAIL_CERTIFICATE_READER,
  FAIL_CERTIFICATE_WRITER,
  REQUEST_CERTIFICATE_READER,
  REQUEST_CERTIFICATE_WRITER,
  SUCCESS_CERTIFICATE_READER,
  SUCCESS_CERTIFICATE_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await certificateApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_CERTIFICATE_READER,
    SUCCESS_CERTIFICATE_READER,
    FAIL_CERTIFICATE_READER
  );
};

action.get = (certificate_id) => async (dispatch) => {
  const query = async () => await certificateApi.get(certificate_id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_CERTIFICATE_READER,
    SUCCESS_CERTIFICATE_READER,
    FAIL_CERTIFICATE_READER
  );
};

action.add = (name, image_id, study_id) => async (dispatch) => {
  const query = async () => await certificateApi.add(name, image_id, study_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_CERTIFICATE_WRITER,
    SUCCESS_CERTIFICATE_WRITER,
    FAIL_CERTIFICATE_WRITER
  );
};

action.delete = (certificate_id) => async (dispatch) => {
  const query = async () => await certificateApi.delete(certificate_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_CERTIFICATE_WRITER,
    SUCCESS_CERTIFICATE_WRITER,
    FAIL_CERTIFICATE_WRITER
  );
};

action.update = (name, image_id, certificate_id) => async (dispatch) => {
  const query = async () =>
    await certificateApi.update(name, image_id, certificate_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_CERTIFICATE_WRITER,
    SUCCESS_CERTIFICATE_WRITER,
    FAIL_CERTIFICATE_WRITER
  );
};

export default action;
