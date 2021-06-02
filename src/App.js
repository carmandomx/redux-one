import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counterActions'
import TodoContainer from './components/TodoContainer'
function App () {
  const value = useSelector(state => state.counter.counter)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Contador: {value}</h3>

        <button onClick={() => dispatch(increment())}>+</button>

        <button
          onClick={() => {
            if (value > 0) {
              dispatch(decrement())
            }
          }}
        >
          -
        </button>

        <br />

        <TodoContainer />
      </header>
    </div>
  )
}

export default App
