import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserApi } from '../../../hooks';
import LoginScreenPage from './page';
import { SESSION } from './../../../../constants/api';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { api, readerState } = useUserApi();

  const router = useRouter();

  const submit = async () => {
    if (validateFields()) {
      await api.singIn(email, password);
      if (
        typeof window !== 'undefined' &&
        !readerState?.error &&
        sessionStorage.getItem(SESSION)
      ) {
        router.push('/admin');
      }
    }
  };

  const validateFields = () => {
    setErrorMsg('');
    if (email && password) {
      return true;
    }
    setErrorMsg('Please fill all the fields');
    return false;
  };

  return (
    <LoginScreenPage
      email={email}
      password={password}
      setPassword={setPassword}
      setEmail={setEmail}
      submit={submit}
      error={errorMsg || readerState?.error}
    />
  );
};

export default LoginScreen;
