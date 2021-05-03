import axios from 'axios';
import env from '../config/env';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/tech/${id}`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to get the technology',
      payload: null,
      status: 500,
    };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/tech`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to get the technology',
      payload: null,
      status: 500,
    };
  }
};
api.add = async (name, level) => {
  try {
    const data = await axios.post(`${env.BACKEND_API}/tech/`, { name, level });
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to add the technology',
      payload: null,
      status: 500,
    };
  }
};
api.delete = async (technology_id) => {
  try {
    const data = await axios.delete(`${env.BACKEND_API}/tech/${technology_id}`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to delete the technology',
      payload: null,
      status: 500,
    };
  }
};
api.update = async (technology_id, name, level) => {
  try {
    const data = await axios.put(`${env.BACKEND_API}/tech/${technology_id}`, {
      name,
      level,
    });
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to update the technology',
      payload: null,
      status: 500,
    };
  }
};

export default api;
