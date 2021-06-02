import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../actions/todoActions'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

const TodoContainer = () => {
  const { handleSubmit, register, reset } = useForm()
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)

  const handleDelete = todo => {
    dispatch(deleteTodo(todo))
  }

  const list = todos.map((value, i) => (
    <li key={i}>
      <TodoItem todo={value} onDelete={handleDelete} />
    </li>
  ))

  const handleAddTodo = ({ todo }) => {
    dispatch(addTodo(todo))
    reset()
  }

  return (
    <div>
      TodoContainer
      <div>
        <CreateTodo
          handleSubmit={handleSubmit}
          register={register}
          handleAddTodo={handleAddTodo}
        />
      </div>
      <ul>{list}</ul>
    </div>
  )
}

export default TodoContainer
