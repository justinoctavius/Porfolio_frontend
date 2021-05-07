import { MsgPopup } from '../components/common';

const msg = {};

msg.error = (msg) => {
  return <MsgPopup msg={msg} bg={'danger'} center />;
};

msg.success = (msg) => {
  return <MsgPopup msg={msg} bg={'success'} center />;
};

export default msg;
