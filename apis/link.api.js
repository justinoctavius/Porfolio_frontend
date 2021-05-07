import axios from 'axios';
import env from '../config/env';
import { SESSION } from '../constants';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/link/${id}`);
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to get the link',
      payload: null,
      status: 500,
    };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/link`);
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to get the link',
      payload: null,
      status: 500,
    };
  }
};
api.add = async (name, url, project_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.post(
      `${env.BACKEND_API}/link/${project_id}`,
      {
        name,
        url,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to add the link',
      payload: null,
      status: 500,
    };
  }
};
api.delete = async (link_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);

    const data = await axios.delete(`${env.BACKEND_API}/link/${link_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to delete the link',
      payload: null,
      status: 500,
    };
  }
};
api.update = async (name, url, link_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);

    const data = await axios.put(
      `${env.BACKEND_API}/link/${link_id}`,
      {
        name,
        url,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to update the link',
      payload: null,
      status: 500,
    };
  }
};

export default api;
