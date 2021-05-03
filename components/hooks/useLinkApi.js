import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { linkAction } from '../../redux/actions';

const useLinkApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.links);
  const deleteState = useSelector((state) => state.delete);
  const addState = useSelector((state) => state.add);
  const updateState = useSelector((state) => state.update);

  useEffect(() => {}, [state]);

  const api = {
    getAll: async () => await linkAction.getAll()(dispatch),
    get: async (link_id) => await linkAction.get(link_id)(dispatch),
    add: async (name, url, project_id) =>
      await linkAction.add(name, url, project_id)(dispatch),
    delete: async (link_id) => await linkAction.delete(link_id)(dispatch),
    update: async (name, url, link_id) =>
      await linkAction.update(name, url, link_id)(dispatch),
  };

  return { state, api, deleteState, addState, updateState, dispatch };
};

export default useLinkApi;
