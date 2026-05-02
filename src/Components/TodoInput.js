// // import { useState } from 'react';

// // const TodoInput = ({ onAdd }) => {
// //   const [input, setInput] = useState('');

// //   const onChangeHandler = e => {
// //     setInput(e.target.value);
// //   };

// //   const onClickHandler = () => {
// //     if (!input.trim()) return;
// //     onAdd(input);
// //     setInput('');
// //   };

// //   const onEnterHandler = e => {
// //     if (e.key === 'Enter') {
// //       if (!input.trim()) return;
// //       onAdd(input);
// //       setInput('');
// //     }
// //   };

// //   return (
// //     <>
// //       <input
// //         onKeyDown={onEnterHandler}
// //         onChange={onChangeHandler}
// //         value={input}
// //       />
// //       <button onClick={onClickHandler}>add new element</button>
// //     </>
// //   );
// // };

// // export default TodoInput;

// // Д/З №4----------------------------

// import { useState } from 'react';

// const TodoInput = ({ onAdd }) => {
//   const [input, setInput] = useState('');

//   const onClickHandler = () => {
//     if (!input.trim()) return;
//     onAdd(input);
//     setInput('');
//   };

//   const onEnterHandler = e => {
//     if (e.key === 'Enter') onClickHandler();
//   };

//   return (
//     <>
//       <input
//         onKeyDown={onEnterHandler}
//         onChange={e => setInput(e.target.value)}
//         value={input}
//         placeholder="нове завдання"
//       />
//       <button onClick={onClickHandler}>Додати</button>
//     </>
//   );
// };

// export default TodoInput;
