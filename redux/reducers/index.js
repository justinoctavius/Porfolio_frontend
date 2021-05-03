import {
  FAIL_READER,
  REQUEST_READER,
  SUCCESS_READER,
  SUCCESS_WRITER,
  REQUEST_WRITER,
  FAIL_WRITER,
} from '../../constants';

const reducerReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  switch (action.type) {
    case REQUEST_READER:
      return { loading: true, payload: null, error: null };
    case SUCCESS_READER:
      return {
        loading: false,
        payload: action.payload,
        error: null,
        success: true,
      };
    case FAIL_READER:
      return {
        loading: false,
        payload: action.payload,
        error: action.error,
        success: false,
      };
    default:
      return state;
  }
};

const reducerWriter = (
  state = { loading: false, payload: [], error: null },
  action
) => {
  switch (action.type) {
    case REQUEST_WRITER:
      return { loading: true, payload: [...state.payload], error: null };
    case SUCCESS_WRITER:
      return {
        loading: false,
        payload: [...state.payload, { ...action.payload }],
        success: true,
        error: null,
      };
    case FAIL_WRITER:
      return {
        loading: false,
        success: false,
        payload: [...state.payload, { ...action.payload }],
        error: action.error,
      };
    default:
      return state;
  }
};

export { reducerReader, reducerWriter };
