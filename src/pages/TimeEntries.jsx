import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import EntryList from '../components/EntryList'

const dividerStyle = {
  marginTop: 15,
  marginBottom: 15
}

export default class TimeEntries extends Component {
  constructor () {
    super()
    this.state = {
      list: [
        {
          name: 'Armin',
          hour: 2,
          date: '2017-12-12',
          note: '双十二抢购',
          avatar: 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460'
        },{
          name: 'Armin',
          hour: 2,
          date: '2017-12-12',
          note: '双十二抢购',
          avatar: 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460'
        },{
          name: 'Armin',
          hour: 2,
          date: '2017-12-12',
          note: '双十二抢购',
          avatar: 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460'
        },
      ]
    }
  }

  onCreate (e) {
    console.log(e.preventDefault);
  }

  render () {
    return (
      <div>
        <RaisedButton
          onClick={this.onCreate}
          label="创建" primary
        />
        <Divider style={dividerStyle} />
        <EntryList list={this.state.list} />
      </div>
    )
  }
}