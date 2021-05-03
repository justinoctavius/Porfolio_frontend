import {
  FAIL_WORK_READER,
  FAIL_WORK_WRITER,
  REQUEST_WORK_READER,
  REQUEST_WORK_WRITER,
  SUCCESS_WORK_READER,
  SUCCESS_WORK_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerWorkReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_WORK_READER,
    SUCCESS_WORK_READER,
    FAIL_WORK_READER,
    state,
    action
  );
};

const reducerWorkWriter = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_WORK_WRITER,
    SUCCESS_WORK_WRITER,
    FAIL_WORK_WRITER,
    state,
    action
  );
};

export { reducerWorkReader, reducerWorkWriter };
