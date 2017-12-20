import React, {Component} from 'react'
import {Card, CardText, CardActions} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

export default class HomeCard extends Component {
  render () {
    return (
      <Card>
        <CardText>
          <h1>任务追踪</h1>
        </CardText>
        <CardText>
          <RaisedButton label="创建一个任务" primary />
        </CardText>
      </Card>
    )
  }
}