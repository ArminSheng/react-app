import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './reducers'

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route path="" component={App} />
    </Router>
  </Provider>
 ), document.getElementById('root'));
