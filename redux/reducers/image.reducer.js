import {
  FAIL_IMAGE_READER,
  FAIL_IMAGE_WRITER,
  REQUEST_IMAGE_READER,
  REQUEST_IMAGE_WRITER,
  SUCCESS_IMAGE_READER,
  SUCCESS_IMAGE_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerImageReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_IMAGE_READER,
    SUCCESS_IMAGE_READER,
    FAIL_IMAGE_READER,
    state,
    action
  );
};

const reducerImageWriter = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_IMAGE_WRITER,
    SUCCESS_IMAGE_WRITER,
    FAIL_IMAGE_WRITER,
    state,
    action
  );
};

export { reducerImageReader, reducerImageWriter };
