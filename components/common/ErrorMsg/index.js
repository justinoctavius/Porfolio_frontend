import { Small } from '../../../styles';

const ErrorMsg = (props) => {
  const { msg } = props;
  return (
    <Small size1 bold center mt1 danger {...props}>
      {msg}
    </Small>
  );
};

export default ErrorMsg;
