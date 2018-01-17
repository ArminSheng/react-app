import React, {Component} from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

export default class HomeCard extends Component {
  render () {
    return (
      <Card>
        <CardContent>
          <h1 type="headline">任务追踪</h1>
          <Button
            raised
            component={Link}
            to="/time-entries"
            color="primary">
            创建一个任务
          </Button>
        </CardContent>
      </Card>
    )
  }
}