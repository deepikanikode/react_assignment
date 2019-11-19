import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
})

serviceWorker.unregister();