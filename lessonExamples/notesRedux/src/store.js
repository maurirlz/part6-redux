import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterChange from './reducers/filterReducer';
import noteReducer from './reducers/noteReducer';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterChange,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
