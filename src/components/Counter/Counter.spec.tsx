import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('counter test', () => {
  const setup = () => render(<Counter />);

  //   beforeEach(() => {});

  it('def value 0', () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');
  });

  it('def value 0, then counter must be 1', () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');

    fireEvent.click(screen.getByRole('button', { name: /inc/ }));
    expect(count.textContent).toBe('Count: 1');
  });

  it('def value 0, then counter must be -1', async () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');

    // fireEvent.click(screen.getByRole('button', { name: /dec/ }));
    await userEvent.click(screen.getByRole('button', { name: /dec/ }));
    expect(count.textContent).toBe('Count: -1');
  });
});
