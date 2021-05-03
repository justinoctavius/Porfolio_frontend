import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workAction } from '../../redux/actions';

const useWorkApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.techs);
  const deleteState = useSelector((state) => state.delete);
  const addState = useSelector((state) => state.add);
  const updateState = useSelector((state) => state.update);

  useEffect(() => {}, [state]);

  const api = {
    getAll: async () => await workAction.getAll()(dispatch),
    get: async (work_id) => await workAction.get(work_id)(dispatch),
    add: async (name, url, project_id) =>
      await workAction.add(name, url, project_id)(dispatch),
    delete: async (work_id) => await workAction.delete(work_id)(dispatch),
    update: async (name, url, work_id) =>
      await workAction.update(name, url, work_id)(dispatch),
  };

  return { state, api, deleteState, addState, updateState, dispatch };
};

export default useWorkApi;
