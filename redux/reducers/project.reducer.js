import {
  FAIL_PROJECT_READER,
  FAIL_PROJECT_WRITER,
  REQUEST_PROJECT_READER,
  REQUEST_PROJECT_WRITER,
  SUCCESS_PROJECT_READER,
  SUCCESS_PROJECT_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerProjectReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_PROJECT_READER,
    SUCCESS_PROJECT_READER,
    FAIL_PROJECT_READER,
    state,
    action
  );
};

const reducerProjectWriter = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_PROJECT_WRITER,
    SUCCESS_PROJECT_WRITER,
    FAIL_PROJECT_WRITER,
    state,
    action
  );
};

export { reducerProjectReader, reducerProjectWriter };
