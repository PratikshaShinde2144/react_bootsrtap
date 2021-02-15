import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button_component from './Button_component';
import Table_component from './Table_component';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './Grid';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    {/* <Table_component/> */}
    {/* <Grid/> */}
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
