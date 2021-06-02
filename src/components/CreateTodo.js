const CreateTodo = ({ register, handleSubmit, handleAddTodo }) => {
  return (
    <form onSubmit={handleSubmit(handleAddTodo)}>
      <div>
        <label htmlFor=''>Todo</label>
        <input type='text' {...register('todo')} />
      </div>

      <div>
        <button>Create</button>
      </div>
    </form>
  )
}

export default CreateTodo
