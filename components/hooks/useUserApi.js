import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userAction } from '../../redux/actions';

const useUserApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.user);

  useEffect(() => {
    if (!readerState.payload) {
      api.getByToken();
    }
  }, []);

  const api = {
    singIn: async (email, password) => {
      await userAction.singIn(email, password)(dispatch);
    },
    getByToken: async () => await userAction.getByToken()(dispatch),
  };

  return { readerState, api, dispatch };
};

export default useUserApi;
