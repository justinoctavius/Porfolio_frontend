import ErrorMsg from '../ErrorMsg';
import FormPage from './page';

const Form = ({ children, error, success }) => {
  console.log(success);
  return (
    <FormPage>
      {children}
      <ErrorMsg
        msg={error || success}
        third={success && !error ? true : false}
      />
    </FormPage>
  );
};

export default Form;
