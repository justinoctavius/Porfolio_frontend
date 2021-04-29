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
api.add = () => {};
api.delete = () => {};
api.update = () => {};

export default api;
