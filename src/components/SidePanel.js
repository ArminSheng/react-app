import React, {Component} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

export default class SidePanel extends Component {
  constructor (props) {
    super(props)
    this.state = {duration: 10}
  }

  render () {
    return (
      <Card>
        <CardHeader title="已有时长" />
        <CardText>
          <span>{this.state.duration} 小时</span>
        </CardText>
      </Card>
    )
  }
}