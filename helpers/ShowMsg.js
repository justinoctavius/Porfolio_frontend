import { Block, P, Strong } from '../styles';

const msg = {};

msg.error = (msg) => {
  return (
    <Block bg={'primary'} height={'90vh'}>
      <P center>{msg}</P>
    </Block>
  );
};

msg.success = (msg) => {
  return <P third>{msg}</P>;
};

export default msg;
