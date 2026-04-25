import { useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState(['First Element']);
  const onClickHandler = input => {
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput('');
  };

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = e => {
    if (e.key === 'Enter') {
      const updatedElement = [...item, input];
      setItem(updatedElement);
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
      <h2>{item.length}</h2>
      <ul>
        {item.map((element, index) => (
          <li key={`${element}${index}`}>
            {element}
            {index}
          </li>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}> add new element</button>
    </>
  );
};

export default TodoList;
