import { combineReducers, createStore } from 'redux';
import user from './user';
import caseData from './case';

const reducers = combineReducers({
  user,
  case: caseData
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
