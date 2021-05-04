import {
  FAIL_STUDY_READER,
  FAIL_STUDY_WRITER,
  REQUEST_STUDY_READER,
  REQUEST_STUDY_WRITER,
  SUCCESS_STUDY_READER,
  SUCCESS_STUDY_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerStudyReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_STUDY_READER,
    SUCCESS_STUDY_READER,
    FAIL_STUDY_READER,
    state,
    action
  );
};

const reducerStudyWriter = (
  state = { loading: false, payload: [], error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_STUDY_WRITER,
    SUCCESS_STUDY_WRITER,
    FAIL_STUDY_WRITER,
    state,
    action
  );
};

export { reducerStudyReader, reducerStudyWriter };
