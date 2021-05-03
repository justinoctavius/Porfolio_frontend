const reducerState = {};

reducerState.reader = (
  REQUEST_CASE,
  SUCCESS_CASE,
  FAIL_CASE,
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CASE:
      return { loading: true, payload: null, error: null };
    case SUCCESS_CASE:
      return {
        loading: false,
        payload: action.payload,
        error: null,
        success: true,
      };
    case FAIL_CASE:
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

reducerState.writer = (
  REQUEST_CASE,
  SUCCESS_CASE,
  FAIL_CASE,
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CASE:
      return { loading: true, payload: [...state.payload], error: null };
    case SUCCESS_CASE:
      return {
        loading: false,
        payload: [...state.payload, { ...action.payload }],
        success: true,
        error: null,
      };
    case FAIL_CASE:
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

export default reducerState;
