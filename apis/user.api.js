import axios from 'axios';
import env from '../config/env';
import { SESSION } from '../constants';

const api = {};

api.signIn = async (email, password) => {
  try {
    const data = await axios.post(`${env.BACKEND_API}/user`, {
      email,
      password,
    });
    const { msg, payload, status } = data.data;
    sessionStorage.setItem(SESSION, payload?.token);
    return { msg, payload: payload?.user, status };
  } catch (error) {
    return { msg: 'Unable to signin', payload: null, status: 500 };
  }
};

api.getByToken = async () => {
  try {
  } catch (error) {}
};

export default api;
