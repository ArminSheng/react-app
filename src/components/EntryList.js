import React, {Component} from 'react'
import Card, { CardHeader } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';

const style = {
  marginBottom: 15
}

export default class EntryList extends Component {
  render () {
    return (
      <div className="entry-list">
        {this.props.list.map((item, i) => {
          return (
            <Card key={i} style={style}>
              <CardHeader
                title={item.name}
                subheader={item.hour + ' 小时'}
                avatar={
                  <Avatar src={item.avatar} />
                }
              >
                {item.note}
              </CardHeader>
            </Card>
          )
        })}
      </div>
    )
  }
}