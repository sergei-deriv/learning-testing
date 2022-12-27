import { useEffect, useState } from 'react';

export function Counter({ defaultCount = 0 }: { defaultCount?: number }) {
  const [count, setCount] = useState(defaultCount);
  const [bigEnough, setBigEnough] = useState(defaultCount >= 2);

  useEffect(() => {
    if (count >= 2) {
      !bigEnough && setTimeout(() => setBigEnough(true), 300);
    } else {
      bigEnough && setTimeout(() => setBigEnough(false), 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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

      {!bigEnough && <div>I am too small</div>}
    </div>
  );
}
