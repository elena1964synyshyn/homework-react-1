import { useState } from 'react';
import TodoInput from './TodoInput';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Прочитати "Воно"' },
    { id: 2, name: 'Переглянути "Сяйво"' },
    { id: 3, name: 'Написати рецензію' },
  ]);

  const onAddHandler = name => {
    const newTodo = { id: Date.now(), name };
    setTodos([...todos, newTodo]);
  };

  const onDeleteHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <TodoInput onAdd={onAddHandler} />
      <h2>{todos.length}</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            #{todo.id} — <input type="text" value={todo.name} readOnly />
            <button onClick={() => onDeleteHandler(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
