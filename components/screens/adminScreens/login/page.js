import { themes } from '../../../../constants';
import { Block } from '../../../../styles';
import { Button, Form, Input, Title } from '../../../common';

const { colors } = themes;

const LoginScreenPage = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  submit,
}) => {
  return (
    <Block
      flex
      middle
      center
      bg={`linear-gradient(305deg, ${colors.primary} 50%,${colors.secondary})`}
      height="100vh"
      width="100vw"
    >
      <Block border radius2 bg={themes.colors.primary + '77'} height="70vh">
        <Block>
          <Title>Login</Title>
        </Block>
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
          <Button mt2 p1 onClick={submit} width="100%" color="third">
            Send
          </Button>
        </Form>
      </Block>
    </Block>
  );
};

export default LoginScreenPage;
