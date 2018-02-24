import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import EntryList from '../components/EntryList'
import CreateTask from './CreateTask'
import {Link, Route} from 'react-router-dom'

const dividerStyle = {
  marginTop: 15,
  marginBottom: 15
}

const TimeEntries = ({todos}) => (
  <div>
    <Route exact path="/time-entries" component={CreateButton} />
    <Route path="/time-entries/create" component={CreateTask} />
    <Divider style={dividerStyle} />
    <EntryList list={todos} />
  </div>
)

const CreateButton = () => {
  return (
    <Button
      raised
      color="primary"
      component={Link}
      to="/time-entries/create"
    >
      创建
    </Button>
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

const mapState = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapState)(TimeEntries)