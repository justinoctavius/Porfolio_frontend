import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studyAction } from '../../redux/actions';

const useStudyApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.studies);
  const writeState = useSelector((state) => state.study);

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

  return { readerState, api, writeState, dispatch };
};

export default useStudyApi;
