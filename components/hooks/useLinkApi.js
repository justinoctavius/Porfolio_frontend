import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { linkAction } from '../../redux/actions';

const useLinkApi = () => {
  const dispatch = useDispatch();
  const readerState = useSelector((state) => state.links);
  const writeState = useSelector((state) => state.link);

  const api = {
    getAll: async () => await linkAction.getAll()(dispatch),
    get: async (link_id) => await linkAction.get(link_id)(dispatch),
    add: async (name, url, project_id) =>
      await linkAction.add(name, url, project_id)(dispatch),
    delete: async (link_id) => await linkAction.delete(link_id)(dispatch),
    update: async (name, url, link_id) =>
      await linkAction.update(name, url, link_id)(dispatch),
  };

  return { readerState, api, writeState, dispatch };
};

export default useLinkApi;
