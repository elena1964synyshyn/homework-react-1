// // import React from 'react';
// import './App.css';
// import UseEffectComponent from './Components/UseEffectComponent';
// import UseLayoutEffectComponent from './Components/UseLayoutEffectComponent';
// import UseStateComponent from './Components/UseStateComponent';
// import UseReducerComponent from './Components/UseReducerComponent';
// import UseRefComponent from './Components/UseRefComponent';
// import { useMemo, useState, memo, useEffect } from 'react';
// // import BookList from './Components/BookList';
// // import TodoList from './Components/TodoList';

// function App() {
//   // return (
//   //   <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//   //     <h1>Бібліотека Стівена Кінга</h1>
//   //     <BookList />
//   //     <TodoList />
//   //   </div>
//   // );

//   return (
//     <div className="App">
//       <UseEffectComponent />
//       <UseLayoutEffectComponent />
//       <UseStateComponent />
//       <UseReducerComponent />
//       <UseRefComponent />
//     </div>
//   );
// }

// // Кастомний хук
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return width;
// }

// // Компонент без ререндеру
// const SideComponent = memo(() => {
//   console.log('SideComponent рендер');
//   return <div>Я інший компонент</div>;
// });

// function App() {
//   // useMemo
//   const [list, setList] = useState([1, 2, 3, 4, 5]);
//   const sum = useMemo(() => {
//     return list.reduce((acc, num) => acc + num, 0);
//   }, [list]);

//   const addNumber = () => {
//     setList([...list, Math.floor(Math.random() * 10)]);
//   };

//   // React.memo
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
//   const removeItem = index => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   // useWindowWidth
//   const width = useWindowWidth();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>1) useMemo</h2>
//         <p>Список: {list.join(', ')}</p>
//         <p>Сума: {sum}</p>
//         <button onClick={addNumber}>Додати число</button>

//         <h2>2) React.memo</h2>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>
//               {item}
//               <button onClick={() => removeItem(index)}>Видалити</button>
//             </li>
//           ))}
//         </ul>
//         <SideComponent />

//         <h2>3) useWindowWidth</h2>
//         <p>Ширина вікна: {width}px</p>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import UseEffectComponent from './Components/UseEffectComponent';
import UseLayoutEffectComponent from './Components/UseLayoutEffectComponent';
import UseStateComponent from './Components/UseStateComponent';
import UseReducerComponent from './Components/UseReducerComponent';
import UseRefComponent from './Components/UseRefComponent';
import { useMemo, useState, memo, useEffect } from 'react';

// Кастомний хук
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Компонент без ререндеру
const SideComponent = memo(() => {
  console.log('SideComponent рендер');
  return <div>Я інший компонент</div>;
});

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const sum = useMemo(() => {
    return list.reduce((acc, num) => acc + num, 0);
  }, [list]);

  const addNumber = () => {
    setList([...list, Math.floor(Math.random() * 10)]);
  };

  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const removeItem = index => {
    setItems(items.filter((_, i) => i !== index));
  };

  const width = useWindowWidth();

  return (
    <div className="App">
      <header className="App-header">
        <UseEffectComponent />
        <UseLayoutEffectComponent />
        <UseStateComponent />
        <UseReducerComponent />
        <UseRefComponent />

        <h2> useMemo</h2>
        <p>Список: {list.join(', ')}</p>
        <p>Сума: {sum}</p>
        <button onClick={addNumber}>Додати число</button>

        <h2> React.memo</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>Видалити</button>
            </li>
          ))}
        </ul>
        <SideComponent />

        <h2> useWindowWidth</h2>
        <p>Ширина вікна: {width}px</p>
      </header>
    </div>
  );
}

export default App;
