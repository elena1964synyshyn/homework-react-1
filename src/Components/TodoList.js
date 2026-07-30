import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  createTodo,
  removeTodo,
  editTodo,
  clearError,
} from '../store/todosSlice';
import TodoForm from './TodoForm';
import EditTodoModal from './EditTodoModal';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector(state => state.todos);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = todo => {
    dispatch(createTodo(todo));
    setShowForm(false);
  };

  const handleDelete = id => {
    dispatch(removeTodo(id));
  };

  const handleToggle = todo => {
    dispatch(editTodo({ id: todo.id, todo: { ...todo, checked: !todo.checked } }));
  };

  if (loading && todos.length === 0) return <Loader />;

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Todo List</h2>

      {error && <ErrorMessage message={error} onClose={() => dispatch(clearError())} />}

      {todos.length === 0 && !showForm && (
        <div style={{ textAlign: 'center' }}>
          <p>Наразі у вас немає ще завдань</p>
          <button onClick={() => setShowForm(true)}>Додати todo</button>
        </div>
      )}

      {todos.length > 0 && !showForm && (
        <button onClick={() => setShowForm(true)} style={{ marginBottom: '12px' }}>
          Додати todo
        </button>
      )}

      {showForm && <TodoForm onSubmit={handleAdd} onCancel={() => setShowForm(false)} />}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '8px',
            }}
          >
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleToggle(todo)}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 'bold',
                  textDecoration: todo.checked ? 'line-through' : 'none',
                }}
              >
                {todo.title}
              </div>
              <div style={{ fontSize: '13px', color: '#777' }}>{todo.description}</div>
            </div>
            <button onClick={() => setEditingId(todo.id)}>Редагувати</button>
            <button onClick={() => handleDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>

      {editingId && <EditTodoModal id={editingId} onClose={() => setEditingId(null)} />}
    </div>
  );
};

export default TodoList;
