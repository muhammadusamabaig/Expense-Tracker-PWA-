import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import swDev from './swDev'
import {Contaxt} from './contaxt'


ReactDOM.render(
  <Contaxt>
    <App />
    </Contaxt>
,  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
swDev()