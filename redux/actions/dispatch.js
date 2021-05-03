const dispatchReader = async (
  query,
  dispatch,
  REQUEST_READER,
  SUCCESS_READER,
  FAIL_READER
) => {
  try {
    dispatch({ type: REQUEST_READER });
    const { msg, payload, status } = await query();
    if (status == 200) {
      dispatch({ type: SUCCESS_READER, payload: payload });
    } else {
      dispatch({ type: FAIL_READER, payload: null, error: msg });
    }
  } catch (error) {
    dispatch({ type: FAIL_READER, error: 'An error has ocurred' });
  }
};

const dispatchWriter = async (
  query,
  dispatch,
  REQUEST_WRITER,
  SUCCESS_WRITER,
  FAIL_WRITER
) => {
  try {
    dispatch({ type: REQUEST_WRITER });
    const { msg, payload, status } = await query();
    if (status == 200) {
      dispatch({ type: SUCCESS_WRITER, payload: { msg, payload, status } });
    } else {
      dispatch({
        type: FAIL_WRITER,
        payload: { msg, payload, status },
        error: msg,
      });
    }
  } catch (error) {
    dispatch({
      type: FAIL_WRITER,
      payload: { msg: 'An error has ocurred', payload: null, status: null },
      error: 'An error has ocurred',
    });
  }
};
export { dispatchReader, dispatchWriter };
