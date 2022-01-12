import React from 'react';
import ReactDOM from 'react-dom';
// import Crendering from './Crendering';
import './index.css';
// import Api from './Api'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import YupValidation from './YupValidation';

ReactDOM.render(
  <React.StrictMode>
    {/* <Crendering /> */}
    {/* <App /> */}
    {/* <Api /> */}
    <YupValidation />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
