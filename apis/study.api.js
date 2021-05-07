import axios from 'axios';
import env from '../config/env';
import { SESSION } from '../constants';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/study/${id}`);
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to get the study',
      payload: null,
      status: 500,
    };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/study`);
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to get the study',
      payload: null,
      status: 500,
    };
  }
};
api.add = async (user_id, name, date, place, description) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.post(
      `${env.BACKEND_API}/study/${user_id}`,
      {
        name,
        date,
        place,
        description,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to add the study',
      payload: null,
      status: 500,
    };
  }
};
api.delete = async (study_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.delete(`${env.BACKEND_API}/study/${study_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to delete the study',
      payload: null,
      status: 500,
    };
  }
};
api.update = async (study_id, name, date, place, description) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.put(
      `${env.BACKEND_API}/study/${study_id}`,
      {
        name,
        date,
        place,
        description,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    return {
      msg: error?.response?.data?.msg || 'Ups unable to update the study',
      payload: null,
      status: 500,
    };
  }
};

export default api;
