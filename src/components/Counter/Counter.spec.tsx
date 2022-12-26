import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
// import userEvent from '@testing-library/user-event';

describe('init with def value 0', () => {
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

  it('def value 0, then counter must be -1', () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');

    fireEvent.click(screen.getByRole('button', { name: /dec/ }));
    expect(count.textContent).toBe('Count: -1');
  });
});
