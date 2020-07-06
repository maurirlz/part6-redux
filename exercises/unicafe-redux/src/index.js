import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  const actions = (type) => {
    return () => {
      store.dispatch({
        type,
      });
    };
  };

  return (
    <div>
      <button onClick={actions("GOOD")}>good</button>
      <button onClick={actions("OK")}>neutral</button>
      <button onClick={actions("BAD")}>bad</button>
      <button onClick={actions("ZERO")}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
