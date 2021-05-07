import { themes } from '../../../../constants';
import { Block } from '../../../../styles';
import { Button, Form, Input, Title } from '../../../common';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faShare } from '@fortawesome/free-solid-svg-icons';

const LoginScreenPage = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  submit,
}) => {
  const router = useRouter();
  return (
    <Block flex middle center gradient2 height="100vh" width="100vw">
      <Block
        border
        radius2
        bg={themes.colors.primary + '55'}
        flex
        fColumn
        width="35em"
        height="min-content"
      >
        <Block>
          <Title>Login</Title>
        </Block>
        <Block>
          <Form error={error}>
            <Input
              type="email"
              errorEmail="Invalid email"
              label="Email"
              value={email}
              setValue={setEmail}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              setValue={setPassword}
            />
          </Form>
        </Block>
        <Block width="100%" flex center relative>
          <img src="/login_design.png" style={{ width: '70%' }} />
        </Block>
        <Block p2>
          <Button mt2 p1 onClick={submit} width="100%" color="third">
            Send <FontAwesomeIcon icon={faShare} />
          </Button>
          <Button
            mt1
            p1
            onClick={() => router.push('/')}
            width="100%"
            color="danger"
          >
            Close <FontAwesomeIcon icon={faDoorOpen} />
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default LoginScreenPage;
