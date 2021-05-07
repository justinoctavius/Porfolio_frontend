import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectAction } from '../../redux/actions';

const useProjectApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.projects);
  const writeState = useSelector((state) => state.project);

  const api = {
    getAll: async () => await projectAction.getAll()(dispatch),
    get: async (project_id) => await projectAction.get(project_id)(dispatch),
    add: async (user_id, name, date, description, images, technologies) =>
      await projectAction.add(
        user_id,
        name,
        date,
        description,
        images,
        technologies
      )(dispatch),
    delete: async (project_id) =>
      await projectAction.delete(project_id)(dispatch),
    update: async (project_id, name, date, description, images, technologies) =>
      await projectAction.update(
        project_id,
        name,
        date,
        description,
        images,
        technologies
      )(dispatch),
  };

  return { readerState, api, writeState, dispatch };
};

export default useProjectApi;
