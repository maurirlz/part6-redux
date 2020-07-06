import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import noteReducer from "./reducers/noteReducer";
import { createStore } from "redux";

const store = createStore(noteReducer); // store
ReactDOM.render(
  // Provider provides the store to the App component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
