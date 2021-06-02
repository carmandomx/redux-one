const INITAL_STATE = {
  counter: 0
}

const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      }

    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1
      }

    default:
      return state
  }
}

export default reducer
