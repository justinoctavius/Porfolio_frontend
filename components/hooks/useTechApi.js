import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { techAction } from '../../redux/actions';

const useTechApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.techs);
  const writeState = useSelector((state) => state.tech);

  const api = {
    getAll: async () => await techAction.getAll()(dispatch),
    get: async (tech_id) => await techAction.get(tech_id)(dispatch),
    add: async (name, level) => await techAction.add(name, level)(dispatch),
    delete: async (tech_id) => await techAction.delete(tech_id)(dispatch),
    update: async (tech_id, name, level) =>
      await techAction.update(tech_id, name, level)(dispatch),
  };

  return { readerState, api, writeState, dispatch };
};

export default useTechApi;
