import { type as todoTypes } from '../actions/todoActions'

const INITIAL_STATE = {
  todos: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.add:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case todoTypes.delete:
      return {
        ...state,
        todos: state.todos.filter(value => value !== action.payload)
      }

    default:
      return state
  }
}

export default reducer
