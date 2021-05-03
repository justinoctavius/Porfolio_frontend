import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import {
  reducerCertificateReader,
  reducerCertificateWriter,
  reducerImageReader,
  reducerImageWriter,
  reducerLinkReader,
  reducerLinkWriter,
  reducerProjectReader,
  reducerProjectWriter,
  reducerStudyReader,
  reducerStudyWriter,
  reducerTechReader,
  reducerTechWriter,
  reducerWorkReader,
  reducerWorkWriter,
} from '../reducers';

const rootReducer = combineReducers({
  certificates: reducerCertificateReader,
  certificate: reducerCertificateWriter,
  images: reducerImageReader,
  image: reducerImageWriter,
  links: reducerLinkReader,
  link: reducerLinkWriter,
  projects: reducerProjectReader,
  project: reducerProjectWriter,
  studies: reducerStudyReader,
  study: reducerStudyWriter,
  techs: reducerTechReader,
  tech: reducerTechWriter,
  works: reducerWorkReader,
  work: reducerWorkWriter,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
