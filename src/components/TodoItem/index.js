// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p className="description">{title}</p>
        <button type="button" onClick={onDeleteTodo} className="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
