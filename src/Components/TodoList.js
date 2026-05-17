// import { Component } from 'react';
// import TodoInput from './TodoInput';

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: JSON.parse(localStorage.getItem('todos')) || [
//         { id: 1, name: 'Прочитати "Воно"' },
//         { id: 2, name: 'Переглянути "Сяйво"' },
//         { id: 3, name: 'Написати рецензію' },
//       ],
//     };
//   }

//   onAddHandler = name => {
//     const newTodo = { id: Date.now(), name };
//     const updatedTodos = [...this.state.todos, newTodo];
//     this.setState({ todos: updatedTodos });
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   };

//   onDeleteHandler = id => {
//     const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
//     this.setState({ todos: updatedTodos });
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   };

//   clearTodos = () => {
//     this.setState({ todos: [] });
//     localStorage.removeItem('todos');
//   };

//   render() {
//     const { todos } = this.state;
//     return (
//       <>
//         <TodoInput onAdd={this.onAddHandler} />
//         <h2>{todos.length}</h2>
//         <button onClick={this.clearTodos}>Clear Todo List</button>
//         <ul>
//           {todos.map(todo => (
//             <li key={todo.id}>
//               #{todo.id} — <input type="text" value={todo.name} readOnly />
//               <button onClick={() => this.onDeleteHandler(todo.id)}>
//                 Видалити
//               </button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default TodoList;

import { Component } from 'react';
import TodoInput from './TodoInput';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [
        { id: 1, name: 'Прочитати "Воно"', completed: false },
        { id: 2, name: 'Переглянути "Сяйво"', completed: false },
        { id: 3, name: 'Написати рецензію', completed: false },
      ],
      filter: 'all', // 'all' | 'active' | 'completed'
      search: '',
    };
  }

  saveTodos = todos => {
    this.setState({ todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  onAddHandler = name => {
    const newTodo = { id: Date.now(), name, completed: false };
    this.saveTodos([...this.state.todos, newTodo]);
  };

  onDeleteHandler = id => {
    this.saveTodos(this.state.todos.filter(todo => todo.id !== id));
  };

  onToggleHandler = id => {
    const updated = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    this.saveTodos(updated);
  };

  clearTodos = () => {
    this.setState({ todos: [] });
    localStorage.removeItem('todos');
  };

  getFilteredTodos = () => {
    const { todos, filter, search } = this.state;
    return todos
      .filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
      })
      .filter(todo => todo.name.toLowerCase().includes(search.toLowerCase()));
  };

  render() {
    const { filter, search, todos } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <h2>Todo List</h2>

        {/* Інпут з валідацією — пункти 6, 7, 8 */}
        <TodoInput onAdd={this.onAddHandler} />

        {/* Пошук — пункт 9 */}
        <input
          type="text"
          placeholder="Пошук по завданнях..."
          value={search}
          onChange={e => this.setState({ search: e.target.value })}
          style={{
            width: '100%',
            padding: '8px 12px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '14px',
            boxSizing: 'border-box',
          }}
        />

        {/* Фільтр — пункти 2, 3, 4, 5 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
          }}
        >
          <label style={{ fontSize: '14px', color: '#555' }}>Показати:</label>
          <select
            value={filter}
            onChange={e => this.setState({ filter: e.target.value })}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            <option value="all">Всі</option>
            <option value="active">Активний</option>
            <option value="completed">Завершений</option>
          </select>

          <span style={{ fontSize: '13px', color: '#888', marginLeft: 'auto' }}>
            {todos.filter(t => !t.completed).length} активних / {todos.length}{' '}
            всього
          </span>
        </div>

        {/* Список — пункт 1 (чекбокс + закреслення) */}
        {filteredTodos.length === 0 ? (
          <p
            style={{
              color: '#aaa',
              fontSize: '14px',
              textAlign: 'center',
              padding: '16px 0',
            }}
          >
            Немає завдань
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {filteredTodos.map(todo => (
              <li
                key={todo.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  marginBottom: '6px',
                  backgroundColor: todo.completed ? '#f9f9f9' : '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                }}
              >
                {/* Пункт 1 — чекбокс */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.onToggleHandler(todo.id)}
                  style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                />

                {/* Пункт 1 — закреслення */}
                <span
                  style={{
                    flex: 1,
                    fontSize: '14px',
                    color: todo.completed ? '#aaa' : '#333',
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.name}
                </span>

                <button
                  onClick={() => this.onDeleteHandler(todo.id)}
                  style={{
                    padding: '4px 10px',
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        )}

        {todos.length > 0 && (
          <button
            onClick={this.clearTodos}
            style={{
              marginTop: '12px',
              padding: '8px 16px',
              backgroundColor: '#95a5a6',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Очистити всі
          </button>
        )}
      </div>
    );
  }
}

export default TodoList;
