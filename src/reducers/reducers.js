import {ADD_TODO} from './actions'

function todoApp (state = initialState, action) {
  switch (action.tyle) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.payload
        ]
      })
    default:
      return state
  }
}

const avatar = 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460'
const initialState = {
  todos: [
    {
      name: 'Armin',
      hour: 1,
      date: '2017-12-12',
      note: '双十二抢购',
      avatar
    },{
      name: 'Armin',
      hour: 2,
      date: '2017-12-12',
      note: '双十二抢购',
      avatar
    },{
      name: 'Armin',
      hour: 4,
      date: '2017-12-12',
      note: '双十一抢购',
      avatar
    },
  ]
}

export default todoApp