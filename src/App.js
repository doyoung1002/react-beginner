import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import './App.css';



const App = () => {
  <div className="done"> 🔥 Done!</div>
  const [todos, setTodos] = useState([
    {

      id: 1,
      text: '1주차 숙제해보자',
      content: '왜 이리 어려워',
      checked: true,
    },
    {
      id: 2,
      text: '자 이제 시작이야 내 꿈을',
      content: '프론트',
      checked: true,
    },
    {
      id: 3,
      text: '10시간 코딩하기',
      content: '힘들다',
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  // 알고리즘화 

  const onInsert = useCallback(
    (text, content) => {
      const todo = {
        id: nextId.current,
        text,
        content,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} selected={true} />
      <div className="done"> 🔥 Done!</div>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} selected={false} />
    </TodoTemplate>
  );
};

export default App;
