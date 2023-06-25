import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos, selected, onRemove, onToggle }) => {
  const filteredTodos = selected
    ? todos.filter((todo) => todo.checked === false)
    : todos.filter((todo) => todo.checked === true)

  return (
    <div className="TodoList">
      {filteredTodos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;