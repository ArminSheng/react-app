import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

import SidePanel from './components/SidePanel'
import TimeEntries from './pages/TimeEntries'

export default class App extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
        <AppBar
          iconElementLeft={
            <IconButton
              iconClassName="muidocs-icon-custom-github"
            />
          }
          title="计划板"
        />
          <div className="container">
            <div className="left">
              <SidePanel />
            </div>
            <div className="right">
              <TimeEntries />
            </div>
          </div>
      </div>
    )
  }
}
