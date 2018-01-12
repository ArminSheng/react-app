import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import SidePanel from './components/SidePanel'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/reducers'

const store = createStore(todoApp)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route path="" component={App} />
    </Router>
  </Provider>
 ), document.getElementById('root'));
