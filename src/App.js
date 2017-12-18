import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

import SidePanel from './components/SidePanel'

// function handleClickTitle (e) {
//   console.log(this, e)
// }


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {s: 1}
    // this.handleClickTitle = this.handleClickTitle.bind(this)
  }

  handleClickTitle = (e) => {
    console.log(this.state.s, e)
  };

  render () {
    return (
      <div>
        <AppBar
          onTitleClick={this.handleClickTitle}
          iconElementLeft={<IconButton iconClassName="muidocs-icon-custom-github" />}
          title="计划板"
        />
          <div className="container">
            <div className="left">
              <SidePanel />
            </div>
            <div className="right">
              <SidePanel />
            </div>
          </div>
      </div>
    )
  }
}
