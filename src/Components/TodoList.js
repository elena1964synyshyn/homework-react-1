import { Component } from 'react';
import TodoInput from './TodoInput';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [
        { id: 1, name: 'Прочитати "Воно"' },
        { id: 2, name: 'Переглянути "Сяйво"' },
        { id: 3, name: 'Написати рецензію' },
      ],
    };
  }

  onAddHandler = name => {
    const newTodo = { id: Date.now(), name };
    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({ todos: updatedTodos });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  onDeleteHandler = id => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  clearTodos = () => {
    this.setState({ todos: [] });
    localStorage.removeItem('todos');
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoInput onAdd={this.onAddHandler} />
        <h2>{todos.length}</h2>
        <button onClick={this.clearTodos}>Clear Todo List</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              #{todo.id} — <input type="text" value={todo.name} readOnly />
              <button onClick={() => this.onDeleteHandler(todo.id)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
