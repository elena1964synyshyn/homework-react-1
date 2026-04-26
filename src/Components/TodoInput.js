import { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const onChangeHandler = e => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  const onEnterHandler = e => {
    if (e.key === 'Enter') {
      if (!input.trim()) return;
      onAdd(input);
      setInput('');
    }
  };

  return (
    <>
      <input
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        value={input}
      />
      <button onClick={onClickHandler}>add new element</button>
    </>
  );
};

export default TodoInput;
