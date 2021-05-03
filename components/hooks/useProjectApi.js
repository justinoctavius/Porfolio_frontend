import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectAction } from '../../redux/actions';

const useProjectApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.projects);
  const deleteState = useSelector((state) => state.delete);
  const addState = useSelector((state) => state.add);
  const updateState = useSelector((state) => state.update);

  useEffect(() => {}, [state]);

  const api = {
    getAll: async () => await projectAction.getAll()(dispatch),
    get: async (project_id) => await projectAction.get(project_id)(dispatch),
    add: async (user_id, name, date, images, technologies) =>
      await projectAction.add(
        user_id,
        name,
        date,
        images,
        technologies
      )(dispatch),
    delete: async (project_id) =>
      await projectAction.delete(project_id)(dispatch),
    update: async (project_id, name, date, images, technologies) =>
      await projectAction.update(
        project_id,
        name,
        date,
        images,
        technologies
      )(dispatch),
  };

  return { state, api, deleteState, addState, updateState, dispatch };
};

export default useProjectApi;
