import axios from 'axios';
import env from '../config/env';
import { SESSION } from '../constants';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/certificate/${id}`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to get the certificate',
      payload: null,
      status: 500,
    };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/certificate`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to get the certificate',
      payload: null,
      status: 500,
    };
  }
};
api.add = async (name, image_id, study_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.post(
      `${env.BACKEND_API}/certificate/${study_id}`,
      { name, image_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to add the certificate',
      payload: null,
      status: 500,
    };
  }
};
api.delete = async (certificate_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.delete(
      `${env.BACKEND_API}/certificate/${certificate_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to delete the certificate',
      payload: null,
      status: 500,
    };
  }
};
api.update = async (name, image_id, certificate_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.put(
      `${env.BACKEND_API}/certificate/${certificate_id}`,
      { name, image_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to update the certificate',
      payload: null,
      status: 500,
    };
  }
};

export default api;
