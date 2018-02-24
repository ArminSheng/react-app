import React, { Component } from 'react'
import {InputAdornment, IconButton} from 'material-ui'
import { connect } from 'react-redux'

import {Link} from 'react-router-dom'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import { Button } from 'material-ui'
import { DatePicker } from 'material-ui-pickers'
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm'
import { withStyles } from 'material-ui/styles'

import {addTodo} from '../reducers/actions'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dayWrapper: {
    position: 'relative',
  },
  datePicker: {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: 'inherit',
    },
    customDayHighlight: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '2px',
      right: '2px',
      border: `2px solid ${theme.palette.primary[100]}`,
      borderRadius: '50%',
    },
    nonCurrentMonthDay: {
      color: theme.palette.common.minBlack,
    },
    highlightNonCurrentMonthDay: {
      color: '#676767',
    },
    highlight: {
      background: theme.palette.primary[500],
      color: theme.palette.common.white,
    },
    firstHighlight: {
      extend: 'highlight',
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    },
    endHighlight: {
      extend: 'highlight',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    },
  }
});

const initialState = {
    date: new Date(),
    hour: '',
    note: ''
  }

class CreateTask extends Component {
  state = Object.assign({}, initialState)

  handleDateChange = date => {
    this.setState({date})
  }

  handleNumChange = event => {
    this.setState({hour:  event.target.value})
  }

  handleSave = e => {
    const {note, date, hour} = this.state
    const entry = {
      note,
      date: date && date.toString(),
      hour: +hour
    }

    if (this.validate(entry)) {
      this.props.dispatch(addTodo(entry))
      this.reset()
    }
  }

  reset = () => {
    console.log(Object.assign({}, initialState));
    this.setState(Object.assign({}, initialState))
  }

  validate = (entry) => {
    let isValidate = true
    for (let i in entry) {
      if (!entry[i]) {
        isValidate = false
        break;
      }
    }

    return isValidate
  }

  handleTextChange = ({target}) => {
    this.setState({note: target.value})
  }

  render () {
    const {
      date,
      hour,
      note
    } = this.state
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={this.handleSave}
      >
        <h2>创建</h2>
        <Divider />

        <DatePicker
          className="my-datepicker"
          disablePast
          label="日期"
          format="YYYY-MM-DD"
          clearable
          animateYearScrolling
          okLabel="确认"
          cancelLabel="取消"
          clearLabel="清空"
          helperText="必填"
          value={date}
          onChange={this.handleDateChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton><AccessAlarmIcon /></IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          style={{
            marginLeft: 10
          }}
          value={hour}
          required
          error={this.required}
          label="时长"
          type="number"
          onChange={this.handleNumChange}
          helperText="必填"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />

        <TextField
          label="备注"
          value={note}
          helperText="非必填"
          fullWidth
          onChange={this.handleTextChange}
          margin="normal"
        />

        <Button
          raised
          type="submit"
          color="primary"
        >
          保存
        </Button>

        <Button
          style={{marginLeft: 8}}
          component={Link}
          replace
          to="/time-entries"
        >
          取消
        </Button>
      </form>
    )
  }
}

CreateTask = withStyles(styles)(CreateTask)

export default connect()(CreateTask)