import { useState } from 'react';

const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan'];

function UseStateComponent() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setMessage(`Hello ${randomName}`);
  };

  return (
    <div>
      <h2>Вітання</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Привітатись</button>
    </div>
  );
}

export default UseStateComponent;
