const api = {};

api.get = async (id) => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/link/${id}`);
    return data.data;
  } catch (error) {
    return { msg: 'Ups unable to get the link', payload: null, status: 500 };
  }
};
api.getAll = async () => {
  try {
    const data = await axios.get(`${env.BACKEND_API}/link`);
    return data.data;
  } catch (error) {
    return { msg: 'Ups unable to get the link', payload: null, status: 500 };
  }
};
api.add = () => {};
api.delete = () => {};
api.update = () => {};

export default api;
