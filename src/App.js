import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm'

import SidePanel from './components/SidePanel'
import TimeEntries from './pages/TimeEntries'
import HomeCard from './components/HomeCard'
import {Route, IndexRoute, Link} from 'react-router-dom'

const linkStyle = {
  marginLeft: 20,
  color: '#fff',
  textDecoration: 'none'
}

const Header = () => {
  return (
    <div>
      <span>计划板</span>
      <FlatButton>
        <Link to="/home" style={linkStyle}>首页</Link>
      </FlatButton>
      <FlatButton>
        <Link to="/time-entries" style={linkStyle}>计划列表</Link>
      </FlatButton>
    </div>
  )
}

export default class App extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
        <AppBar
          iconElementLeft={<IconButton><AccessAlarmIcon /></IconButton>}
          title={<Header />}
        >
        </AppBar>
          <div className="container">
            <div className="left">
              <SidePanel />
            </div>
            <div className="right">
              <Route path="/time-entries" component={TimeEntries} />
              <Route path="/home" component={HomeCard} />
            </div>
          </div>
      </div>
    )
  }
}
