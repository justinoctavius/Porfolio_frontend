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
    return {
      msg: error?.response?.data?.msg || 'Unable to sign-in',
      payload: null,
      status: 500,
    };
  }
};

api.getByToken = async () => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.get(`${env.BACKEND_API}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data.data)
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Unable to sign-in',
      payload: null,
      status: 500,
    };
  }
};

export default api;
