import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workAction } from '../../redux/actions';

const useWorkApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.works);
  const writeState = useSelector((state) => state.work);

  const api = {
    getAll: async () => await workAction.getAll()(dispatch),
    get: async (work_id) => await workAction.get(work_id)(dispatch),
    add: async (user_id, name, date, description) =>
      await workAction.add(user_id, name, date, description)(dispatch),
    delete: async (work_id) => await workAction.delete(work_id)(dispatch),
    update: async (work_id, name, date, description) =>
      await workAction.update(work_id, name, date, description)(dispatch),
  };

  return { readerState, api, writeState, dispatch };
};

export default useWorkApi;
