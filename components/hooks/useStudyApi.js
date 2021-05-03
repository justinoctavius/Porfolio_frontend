import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studyAction } from '../../redux/actions';

const useStudyApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.techs);
  const deleteState = useSelector((state) => state.delete);
  const addState = useSelector((state) => state.add);
  const updateState = useSelector((state) => state.update);

  useEffect(() => {}, [state]);

  const api = {
    getAll: async () => await studyAction.getAll()(dispatch),
    get: async (study_id) => await studyAction.get(study_id)(dispatch),
    add: async (user_id, name, date, place, description) =>
      await studyAction.add(user_id, name, date, place, description)(dispatch),
    delete: async (study_id) => await studyAction.delete(study_id)(dispatch),
    update: async (study_id, name, date, place, description) =>
      await studyAction.update(
        study_id,
        name,
        date,
        place,
        description
      )(dispatch),
  };

  return { state, api, deleteState, addState, updateState, dispatch };
};

export default useStudyApi;
