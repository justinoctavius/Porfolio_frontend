import axios from 'axios';
import env from '../config/env';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/work/${id}`);
    return data.data;
  } catch (error) {
    return { msg: 'Ups unable to get the work', payload: null, status: 500 };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/work`);
    return data.data;
  } catch (error) {
    console.log(error);
    return { msg: 'Ups unable to get the work', payload: null, status: 500 };
  }
};
api.add = async (user_id, name, date, description) => {
  try {
    const data = await axios.post(`${env.BACKEND_API}/work/${user_id}`, {
      name,
      date,
      description,
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return { msg: 'Ups unable to add the work', payload: null, status: 500 };
  }
};
api.delete = async (work_id) => {
  try {
    const data = await axios.delete(`${env.BACKEND_API}/work/${work_id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    return { msg: 'Ups unable to delete the work', payload: null, status: 500 };
  }
};
api.update = async (work_id, name, date, description) => {
  try {
    const data = await axios.put(`${env.BACKEND_API}/work/${work_id}`, {
      name,
      date,
      description,
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return { msg: 'Ups unable to update the work', payload: null, status: 500 };
  }
};

export default api;
