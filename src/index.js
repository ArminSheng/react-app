import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SidePanel from './components/SidePanel'

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {component: SidePanel}
  }
]

ReactDOM.render((
  <MuiThemeProvider>
    <Router routes={routes}>
      <Route path="/" component={App}/>
    </Router>
  </MuiThemeProvider>
 ), document.getElementById('root'));
