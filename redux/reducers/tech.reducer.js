import {
  FAIL_TECH_READER,
  FAIL_TECH_WRITER,
  REQUEST_TECH_READER,
  REQUEST_TECH_WRITER,
  SUCCESS_TECH_READER,
  SUCCESS_TECH_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerTechReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_TECH_READER,
    SUCCESS_TECH_READER,
    FAIL_TECH_READER,
    state,
    action
  );
};

const reducerTechWriter = (
  state = { loading: false, payload: [], error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_TECH_WRITER,
    SUCCESS_TECH_WRITER,
    FAIL_TECH_WRITER,
    state,
    action
  );
};

export { reducerTechReader, reducerTechWriter };
