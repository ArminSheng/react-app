import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor (obj) {
    super(obj)
    this.state = {name: 'Armin'}
  }

  render () {
    return (
      <div>
        Welcome, <span>{this.state.name}</span>
        <div>{this.props.info}</div>
      </div>
    )
  }
}