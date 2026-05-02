import { useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffectComponent() {
  const containerRef = useRef();
  const [clicked, setClicked] = useState(false);

  useLayoutEffect(() => {
    if (clicked) {
      const p = document.createElement('p');
      p.textContent = 'Новий абзац!';
      containerRef.current.appendChild(p);
      setClicked(false);
    }
  }, [clicked]);

  return (
    <div ref={containerRef}>
      <h2>Абзац</h2>
      <button onClick={() => setClicked(true)}>Додати абзац</button>
    </div>
  );
}

export default UseLayoutEffectComponent;
