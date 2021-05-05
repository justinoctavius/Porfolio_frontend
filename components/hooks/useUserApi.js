import { useDispatch, useSelector } from 'react-redux';

import { userAction } from '../../redux/actions';

const useUserApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.user);

  const api = {
    singIn: async (email, password) => {
      console.log('hola putos 2');
      await userAction.singIn(email, password)(dispatch);
    },
    getByToken: async () => await userAction.getByToken()(dispatch),
  };

  return { readerState, api, dispatch };
};

export default useUserApi;
