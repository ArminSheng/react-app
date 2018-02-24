import React from 'react'
import Card, { CardHeader } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';

const style = {
  marginBottom: 15
}

const EntryList = ({list}) => (
  <div className="entry-list">
    {list.map((item, i) => (
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
    ))}
  </div>
)

export default EntryList