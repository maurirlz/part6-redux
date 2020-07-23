import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reduxStore from './store';

ReactDOM.render(
  // Provider provides the store to the App component
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
