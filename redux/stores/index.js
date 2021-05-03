import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducerReader, reducerWriter } from '../reducers';

const rootReducer = combineReducers({
  certificates: reducerReader,
  images: reducerReader,
  links: reducerReader,
  projects: reducerReader,
  studies: reducerReader,
  techs: reducerReader,
  works: reducerReader,
  delete: reducerWriter,
  update: reducerWriter,
  add: reducerWriter,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
