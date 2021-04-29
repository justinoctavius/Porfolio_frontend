import axios from 'axios';
import env from '../config/env';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/project/${id}`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to get the projects',
      payload: null,
      status: 500,
    };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/project`);
    return data.data;
  } catch (error) {
    console.log(error);
    return {
      msg: 'Ups unable to get the projects',
      payload: null,
      status: 500,
    };
  }
};
api.add = () => {};
api.delete = () => {};
api.update = () => {};

export default api;
