import { useEffect, useState } from 'react';
import { clearTimeout } from 'timers';

export function Counter({ defaultCount = 0 }: { defaultCount?: number }) {
  const [count, setCount] = useState(defaultCount);
  const [bigEnough, setBigEnough] = useState(defaultCount >= 2);

  useEffect(() => {
    let timeout_id: NodeJS.Timeout;

    if (count >= 2) {
      if (!bigEnough) {
        timeout_id = setTimeout(() => setBigEnough(true), 300);
      }
    } else {
      if (bigEnough) {
        timeout_id = setTimeout(() => setBigEnough(false), 300);
      }
    }

    return () => clearTimeout(timeout_id);
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
