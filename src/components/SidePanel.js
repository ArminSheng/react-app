import React, {Component} from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'
import { number } from 'prop-types'

class SidePanel extends Component {
  render () {
    const {totalTime} = this.props
    return (
      <Card>
        <CardContent>
          <p type="headline">
            已有时长
          </p>
          <Divider />
          <h2>{totalTime} 小时</h2>
        </CardContent>
      </Card>
    )
  }
};

SidePanel.propTypes = {
  totalTime: number.isRequired
}

export default connect(state => {
  const totalTime = state.todos
    .reduce((sum, prev) => sum + +prev.hour, 0)

  return {
    totalTime
  }
})(SidePanel)