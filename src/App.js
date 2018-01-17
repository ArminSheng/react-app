import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import { Reboot } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm'
import Toolbar from 'material-ui/Toolbar';

import SidePanel from './components/SidePanel'
import TimeEntries from './pages/TimeEntries'
import HomeCard from './components/HomeCard'
import {Route, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      计划板
      <Button
        color="contrast"
        component={NavLink}
        exact
        activeClassName="active-link"
        to="/"
      >
        首页
      </Button>
      <Button
        color="contrast"
        component={NavLink}
        activeClassName="active-link"
        to="/time-entries"
      >
        计划列表
      </Button>
    </div>
  )
}

export default class App extends Component {
  render () {
    return (
      <div>
        <Reboot />
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast">
              <AccessAlarmIcon />
            </IconButton>
            <Header type="title" />
          </Toolbar>
        </AppBar>
        <div className="container">
          <div className="left">
            <SidePanel />
          </div>
          <div className="right">
            <Route path="/time-entries" component={TimeEntries} />
            <Route path="/" exact component={HomeCard} />
          </div>
        </div>
      </div>
    )
  }
}
