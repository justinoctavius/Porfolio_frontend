import {
  FAIL_USER_READER,
  REQUEST_USER_READER,
  SUCCESS_USER_READER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerUserReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_USER_READER,
    SUCCESS_USER_READER,
    FAIL_USER_READER,
    state,
    action
  );
};

export { reducerUserReader };
