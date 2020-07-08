import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./Reducers/filterReducer";
import noteReducer from "./Reducers/noteReducer";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools()); // store

console.log(store.getState());

ReactDOM.render(
  // Provider provides the store to the App component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
