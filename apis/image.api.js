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
api.add = () => {};
api.delete = () => {};
api.update = () => {};

export default api;
