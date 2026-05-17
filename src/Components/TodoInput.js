// import { useState } from 'react';

// const TodoInput = ({ onAdd }) => {
//   const [input, setInput] = useState('');

//   const onChangeHandler = e => {
//     setInput(e.target.value);
//   };

//   const onClickHandler = () => {
//     if (!input.trim()) return;
//     onAdd(input);
//     setInput('');
//   };

//   const onEnterHandler = e => {
//     if (e.key === 'Enter') {
//       if (!input.trim()) return;
//       onAdd(input);
//       setInput('');
//     }
//   };

//   return (
//     <>
//       <input
//         onKeyDown={onEnterHandler}
//         onChange={onChangeHandler}
//         value={input}
//       />
//       <button onClick={onClickHandler}>add new element</button>
//     </>
//   );
// };

// export default TodoInput;

// Д/З №4----------------------------

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
import { useState } from 'react';

const MIN_LENGTH = 3;
const MAX_LENGTH = 50;

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const validate = value => {
    if (value.trim().length < MIN_LENGTH) {
      return `Мінімальна кількість символів: ${MIN_LENGTH}`;
    }
    if (value.trim().length > MAX_LENGTH) {
      return `Максимальна кількість символів: ${MAX_LENGTH}`;
    }
    return '';
  };

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
    if (error) setError(validate(value));
  };

  const onClickHandler = () => {
    const validationError = validate(input);
    if (validationError) {
      setError(validationError);
      return;
    }
    onAdd(input.trim());
    setInput('');
    setError('');
  };

  const onEnterHandler = e => {
    if (e.key === 'Enter') onClickHandler();
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          onKeyDown={onEnterHandler}
          onChange={onChangeHandler}
          value={input}
          placeholder={`Нове завдання (${MIN_LENGTH}–${MAX_LENGTH} символів)`}
          style={{
            flex: 1,
            padding: '8px 12px',
            border: error ? '1px solid #e74c3c' : '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '14px',
          }}
        />
        <button
          onClick={onClickHandler}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Додати
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4px',
        }}
      >
        {error ? (
          <span style={{ color: '#e74c3c', fontSize: '12px' }}>{error}</span>
        ) : (
          <span />
        )}
        <span
          style={{
            fontSize: '12px',
            color: input.length > MAX_LENGTH ? '#e74c3c' : '#999',
          }}
        >
          {input.length}/{MAX_LENGTH}
        </span>
      </div>
    </div>
  );
};

export default TodoInput;
