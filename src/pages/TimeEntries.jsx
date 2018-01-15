import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import EntryList from '../components/EntryList'
import { connect } from 'react-redux'

const dividerStyle = {
  marginTop: 15,
  marginBottom: 15
}

class TimeEntries extends Component {
  // constructor () {
  //   super()
  // }

  onCreate (e) {
    console.log(e.preventDefault);
  }

  render () {
    const {todos} = this.props
    return (
      <div>
        <RaisedButton
          onClick={this.onCreate}
          label="创建" primary
        />
        <Divider style={dividerStyle} />
        <EntryList list={todos} />
      </div>
    )
  }
}

TimeEntries.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default connect(state => {
  return {
    todos: state.todos
  }
})(TimeEntries)