import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => setTimeout(() => setCount((count) => count + 1), 200)}
      >
        inc
      </button>
      <button
        onClick={() => setTimeout(() => setCount((count) => count - 1), 200)}
      >
        dec
      </button>
    </div>
  );
}
