import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect , count:', count);
  });

  return (
    <div>
      <h2>Count</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Оновити</button>
    </div>
  );
}

export default UseEffectComponent;
