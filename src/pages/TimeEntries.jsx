import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import EntryList from '../components/EntryList'
import CreateTask from './CreateTask'
import { connect } from 'react-redux'
import {Link, Route} from 'react-router-dom'

const dividerStyle = {
  marginTop: 15,
  marginBottom: 15
}

class TimeEntries extends Component {
  onCreate (e) {
    console.log(e.preventDefault);
  }

  render () {
    const {todos} = this.props
    return (
      <div>
        <Route exact path="/time-entries" component={CreateButton} />
        <Route path="/time-entries/create" component={CreateTask} />
        <Divider style={dividerStyle} />
        <EntryList list={todos} />
      </div>
    )
  }
}

const CreateButton = () => {
  return (
    <Link to="/time-entries/create">
      <Button
        raised
        color="primary"
      >
        创建
      </Button>
    </Link>
  )
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