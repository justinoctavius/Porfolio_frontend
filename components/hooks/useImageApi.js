import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imageAction } from '../../redux/actions';

const useImageApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.images);
  const writeState = useSelector((state) => state.image);

  const api = {
    getAll: async () => await imageAction.getAll()(dispatch),
    get: async (image_id) => await imageAction.get(image_id)(dispatch),
    add: async (name, image) => await imageAction.add(name, image)(dispatch),
    delete: async (image_id) => await imageAction.delete(image_id)(dispatch),
    update: async (image_id, name, image) =>
      await imageAction.update(image_id, name, image)(dispatch),
  };

  return { readerState, api, writeState, dispatch };
};

export default useImageApi;
