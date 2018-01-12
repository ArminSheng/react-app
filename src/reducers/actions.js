export const ADD_TODO = 'add_todo';

// Action creators
export function addTodo (payload) {
  return {
    type: ADD_TODO,
    payload
  }
}