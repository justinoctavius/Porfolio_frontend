import {
  FAIL_CERTIFICATE_READER,
  FAIL_CERTIFICATE_WRITER,
  REQUEST_CERTIFICATE_READER,
  REQUEST_CERTIFICATE_WRITER,
  SUCCESS_CERTIFICATE_READER,
  SUCCESS_CERTIFICATE_WRITER,
} from '../../constants/redux';
import { reducerState } from '../../utils';

const reducerCertificateReader = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.reader(
    REQUEST_CERTIFICATE_READER,
    SUCCESS_CERTIFICATE_READER,
    FAIL_CERTIFICATE_READER,
    state,
    action
  );
};

const reducerCertificateWriter = (
  state = { loading: false, payload: {}, error: null },
  action
) => {
  return reducerState.writer(
    REQUEST_CERTIFICATE_WRITER,
    SUCCESS_CERTIFICATE_WRITER,
    FAIL_CERTIFICATE_WRITER,
    state,
    action
  );
};

export { reducerCertificateReader, reducerCertificateWriter };
