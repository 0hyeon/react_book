import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './3.4.2.3_onecompo_anyuseState'; //import 함수 from 파일이름
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
