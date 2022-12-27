import { useEffect, useState } from 'react';
// import { clearTimeout } from 'timers';

export function Counter({ defaultCount = 0 }: { defaultCount?: number }) {
  const tooBigNumber = 2;
  const [count, setCount] = useState(defaultCount);
  const [bigEnough, setBigEnough] = useState(defaultCount >= tooBigNumber);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (count >= tooBigNumber && !bigEnough) {
      id = setTimeout(() => setBigEnough(true), 300);
      //   setTimeout(() => setBigEnough(true), 300);
    } else if (count < tooBigNumber && bigEnough) {
      id = setTimeout(() => setBigEnough(false), 300);
      //   setTimeout(() => setBigEnough(false), 300);
    }

    return () => clearTimeout(id);

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
