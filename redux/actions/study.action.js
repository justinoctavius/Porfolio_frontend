import { studyApi } from '../../apis';
import {
  FAIL_STUDY_READER,
  FAIL_STUDY_WRITER,
  REQUEST_STUDY_READER,
  REQUEST_STUDY_WRITER,
  SUCCESS_STUDY_READER,
  SUCCESS_STUDY_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await studyApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_STUDY_READER,
    SUCCESS_STUDY_READER,
    FAIL_STUDY_READER
  );
};

action.get = (link_id) => async (dispatch) => {
  const query = async () => await studyApi.get(link_id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_STUDY_READER,
    SUCCESS_STUDY_READER,
    FAIL_STUDY_READER
  );
};

action.add = (user_id, name, date, place, description) => async (dispatch) => {
  const query = async () =>
    await studyApi.add(user_id, name, date, place, description);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_STUDY_WRITER,
    SUCCESS_STUDY_WRITER,
    FAIL_STUDY_WRITER
  );
};

action.delete = (study_id) => async (dispatch) => {
  const query = async () => await studyApi.delete(study_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_STUDY_WRITER,
    SUCCESS_STUDY_WRITER,
    FAIL_STUDY_WRITER
  );
};

action.update = (study_id, name, date, place, description) => async (
  dispatch
) => {
  const query = async () =>
    await studyApi.update(study_id, name, date, place, description);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_STUDY_WRITER,
    SUCCESS_STUDY_WRITER,
    FAIL_STUDY_WRITER
  );
};

export default action;
