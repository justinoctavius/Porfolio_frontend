import { imageApi } from '../../apis';
import {
  FAIL_IMAGE_READER,
  FAIL_IMAGE_WRITER,
  REQUEST_IMAGE_READER,
  REQUEST_IMAGE_WRITER,
  SUCCESS_IMAGE_READER,
  SUCCESS_IMAGE_WRITER,
} from '../../constants/redux';
import { dispatchReader, dispatchWriter } from './dispatch';

const action = {};

action.getAll = () => async (dispatch) => {
  const query = async () => await imageApi.getAll();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_IMAGE_READER,
    SUCCESS_IMAGE_READER,
    FAIL_IMAGE_READER
  );
};

action.get = (image_id) => async (dispatch) => {
  const query = async () => await imageApi.get(image_id);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_IMAGE_READER,
    SUCCESS_IMAGE_READER,
    FAIL_IMAGE_READER
  );
};

action.add = (name, image) => async (dispatch) => {
  const query = async () => await imageApi.add(name, image);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_IMAGE_WRITER,
    SUCCESS_IMAGE_WRITER,
    FAIL_IMAGE_WRITER
  );
};

action.delete = (image_id) => async (dispatch) => {
  const query = async () => await imageApi.delete(image_id);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_IMAGE_WRITER,
    SUCCESS_IMAGE_WRITER,
    FAIL_IMAGE_WRITER
  );
};

action.update = (image_id, name, image) => async (dispatch) => {
  const query = async () => await imageApi.update(image_id, name, image);
  await dispatchWriter(
    query,
    dispatch,
    REQUEST_IMAGE_WRITER,
    SUCCESS_IMAGE_WRITER,
    FAIL_IMAGE_WRITER
  );
};

export default action;
