import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm'
import Toolbar from 'material-ui/Toolbar';

import SidePanel from './components/SidePanel'
import TimeEntries from './pages/TimeEntries'
import HomeCard from './components/HomeCard'
import {Route, Link} from 'react-router-dom'

const linkStyle = {
  marginLeft: 20,
  color: '#fff',
  textDecoration: 'none'
}

const Header = () => {
  return (
    <div>
      <span>计划板</span>
      <Button>
        <Link to="/" style={linkStyle}>首页</Link>
      </Button>
      <Button>
        <Link to="/time-entries" style={linkStyle}>计划列表</Link>
      </Button>
    </div>
  )
}

export default class App extends Component {
  render () {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton>
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
