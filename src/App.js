import React from 'react';
import './App.css';
import BookList from './Components/BookList';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Бібліотека Стівена Кінга</h1>
      <BookList />
      <TodoList />
    </div>
  );
}

export default App;
