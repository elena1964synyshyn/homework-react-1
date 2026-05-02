import { useRef } from 'react';

function UseRefComponent() {
  const inputRef = useRef();

  return (
    <div>
      <h2>5 useRef</h2>
      <input ref={inputRef} placeholder="Текстове поле" />
      <button onClick={() => inputRef.current.focus()}>Фокус</button>
      <button onClick={() => inputRef.current.blur()}>Блюр</button>
    </div>
  );
}

export default UseRefComponent;
