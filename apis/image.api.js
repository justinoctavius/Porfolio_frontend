import axios from 'axios';
import env from '../config/env';

const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/image/${id}`);
    return data.data;
  } catch (error) {
    return { msg: 'Ups unable to get the image', payload: null, status: 500 };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/image`);
    return data.data;
  } catch (error) {
    return { msg: 'Ups unable to get the image', payload: null, status: 500 };
  }
};
api.add = async (name, image) => {
  try {
    const data = await axios.post(`${env.BACKEND_API}/image`, { name, image });
    return data.data;
  } catch (error) {
    return { msg: 'Ups unable to add the image', payload: null, status: 500 };
  }
};
api.delete = async (image_id) => {
  try {
    const data = await axios.delete(`${env.BACKEND_API}/image/${image_id}`);
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to delete the image',
      payload: null,
      status: 500,
    };
  }
};
api.update = async (image_id, name, image) => {
  try {
    const data = await axios.put(`${env.BACKEND_API}/image/${image_id}`, {
      name,
      image,
    });
    return data.data;
  } catch (error) {
    return {
      msg: 'Ups unable to update the image',
      payload: null,
      status: 500,
    };
  }
};

export default api;
