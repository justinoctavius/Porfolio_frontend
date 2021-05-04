import {
  FAIL_LINK_READER,
  FAIL_LINK_WRITER,
  REQUEST_LINK_READER,
  REQUEST_LINK_WRITER,
  SUCCESS_LINK_READER,
  SUCCESS_LINK_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerLinkReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_LINK_READER,
    SUCCESS_LINK_READER,
    FAIL_LINK_READER,
    state,
    action
  );
};

const reducerLinkWriter = (
  state = { loading: false, payload: [], error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_LINK_WRITER,
    SUCCESS_LINK_WRITER,
    FAIL_LINK_WRITER,
    state,
    action
  );
};

export { reducerLinkReader, reducerLinkWriter };
