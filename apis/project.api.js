import axios from 'axios';
import env from '../config/env';
import { SESSION } from '../constants';

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
api.add = async (user_id, name, date, images, technologies) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.post(
      `${env.BACKEND_API}/project/${user_id}`,
      {
        name,
        date,
        images,
        technologies,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return {
      msg: 'Ups unable to add the projects',
      payload: null,
      status: 500,
    };
  }
};
api.delete = async (project_id) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.delete(
      `${env.BACKEND_API}/project/${project_id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return {
      msg: 'Ups unable to delete the projects',
      payload: null,
      status: 500,
    };
  }
};
api.update = async (project_id, name, date, images, technologies) => {
  try {
    const token = sessionStorage.getItem(SESSION);
    const data = await axios.put(
      `${env.BACKEND_API}/project/${project_id}`,
      {
        name,
        date,
        images,
        technologies,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return {
      msg: 'Ups unable to update the projects',
      payload: null,
      status: 500,
    };
  }
};

export default api;
