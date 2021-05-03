import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { techAction } from '../../redux/actions';

const useTechApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.techs);
  const deleteState = useSelector((state) => state.delete);
  const addState = useSelector((state) => state.add);
  const updateState = useSelector((state) => state.update);

  useEffect(() => {}, [state]);

  const api = {
    getAll: async () => await techAction.getAll()(dispatch),
    get: async (tech_id) => await techAction.get(tech_id)(dispatch),
    add: async (name, level) => await techAction.add(name, level)(dispatch),
    delete: async (tech_id) => await techAction.delete(tech_id)(dispatch),
    update: async (tech_id, name, level) =>
      await techAction.update(tech_id, name, level)(dispatch),
  };

  return { state, api, deleteState, addState, updateState, dispatch };
};

export default useTechApi;
