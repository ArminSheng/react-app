export const ADD_TODO = 'add_todo';
const avatar = 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460'

// Action creators
export function addTodo (payload) {
  payload.name = 'Armin'
  payload.avatar = avatar

  return {
    type: ADD_TODO,
    payload
  }
}