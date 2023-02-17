import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX
import {GetSelectOptions} from "./redux/actions/dogs.actions"
import {Provider} from 'react-redux';
import store from './redux/store.js';

// Since GetSelectOptions is making multiple API calls, a return from a Promise.all won't work 
// unless the calling point is being done asynchronously. 
const loadOptions = async() => {
  await store.dispatch(GetSelectOptions()).then(() => {
    console.log('All options lists have been loaded!');
  });
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,document.getElementById('root'),
  loadOptions
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
