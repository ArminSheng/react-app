import React, { Component } from 'react'
import {InputAdornment, IconButton} from 'material-ui'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import { Button } from 'material-ui'
import { DatePicker } from 'material-ui-pickers'
import {Link} from 'react-router-dom'
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm'
import { withStyles } from 'material-ui/styles'

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

class CreateTask extends Component {
  constructor (opt) {
    super()
    this.state = {
      selectedDate: new Date(),
      duration: ''
    }
  }

  handleDateChange = date => {
    this.setState({selectedDate: date})
  }

  handleNumChange = event => {
    this.setState({duration:  event.target.value})
  }

  render () {
    const {selectedDate} = this.state
    return (
      <form noValidate autoComplete="off">
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
          value={selectedDate}
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
          label="时长"
          value={this.state.duration}
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
          helperText="非必填"
          fullWidth
          margin="normal"
        />

        <Button raised color="primary">
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

export default withStyles(styles)(CreateTask)