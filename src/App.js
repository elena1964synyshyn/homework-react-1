// import React from 'react';
import './App.css';
import UseEffectComponent from './Components/UseEffectComponent';
import UseLayoutEffectComponent from './Components/UseLayoutEffectComponent';
import UseStateComponent from './Components/UseStateComponent';
import UseReducerComponent from './Components/UseReducerComponent';
import UseRefComponent from './Components/UseRefComponent';

// import BookList from './Components/BookList';
// import TodoList from './Components/TodoList';

function App() {
  // return (
  //   <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
  //     <h1>Бібліотека Стівена Кінга</h1>
  //     <BookList />
  //     <TodoList />
  //   </div>
  // );

  return (
    <div className="App">
      <UseEffectComponent />
      <UseLayoutEffectComponent />
      <UseStateComponent />
      <UseReducerComponent />
      <UseRefComponent />
    </div>
  );
}

export default App;
