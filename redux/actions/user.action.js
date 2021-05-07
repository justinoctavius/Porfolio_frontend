import { userApi } from '../../apis';
import {
  FAIL_USER_READER,
  REQUEST_USER_READER,
  SUCCESS_USER_READER,
} from '../../constants/redux';
import { dispatchReader } from './dispatch';

const action = {};
action.getByToken = () => async (dispatch) => {
  const query = async () => await userApi.getByToken();
  await dispatchReader(
    query,
    dispatch,
    REQUEST_USER_READER,
    SUCCESS_USER_READER,
    FAIL_USER_READER
  );
};

action.singIn = (email, password) => async (dispatch) => {
  const query = async () => await userApi.signIn(email, password);
  await dispatchReader(
    query,
    dispatch,
    REQUEST_USER_READER,
    SUCCESS_USER_READER,
    FAIL_USER_READER
  );
};

export default action;
