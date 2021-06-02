const TodoItem = ({ todo, onDelete }) => (
  <div onClick={() => onDelete(todo)}>{todo}</div>
)

export default TodoItem
