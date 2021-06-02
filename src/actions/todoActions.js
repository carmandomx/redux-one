export const type = {
  add: 'add_todo',
  delete: 'delete_todo'
}

export const addTodo = todo => ({
  type: type.add,
  payload: todo
})

export const deleteTodo = todo => ({
  type: type.delete,
  payload: todo
})
