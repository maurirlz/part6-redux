import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterChange from './reducers/filterReducer';
import noteReducer from './reducers/noteReducer';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterChange,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
