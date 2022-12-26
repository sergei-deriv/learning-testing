import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

it('counter must work', () => {
  render(<Counter />);
  const count = screen.queryByRole('heading') as HTMLHeadingElement;
  expect(count.textContent).toBe('Count: 0');
});
