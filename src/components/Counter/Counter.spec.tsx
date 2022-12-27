import {
  render,
  screen,
  /*fireEvent,*/ waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('counter test', () => {
  const setup = (def?: number) => render(<Counter defaultCount={def} />);

  //   beforeEach(() => {});

  it('def value 0', () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');
  });

  it('def value 0, then counter must be 1', async () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');

    const btn = screen.getByRole('button', { name: /inc/ });
    await userEvent.click(btn);
    await waitFor(() => expect(count.textContent).toBe('Count: 1'));
    // await expect(count.textContent).toBe('Count: 1');
  });

  it('def value 0, then counter must be -1', async () => {
    setup();
    const count = screen.queryByRole('heading') as HTMLHeadingElement;
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('Count: 0');

    // fireEvent.click(screen.getByRole('button', { name: /dec/ }));
    await userEvent.click(screen.getByRole('button', { name: /dec/ }));
    await waitFor(() => expect(count.textContent).toBe('Count: -1'));
  });

  it('renders too big, and will disappear after 300 ms', async () => {
    setup();
    // click 2 times
    for (let index = 0; index < 2; index++) {
      userEvent.click(screen.getByRole('button', { name: /inc/ }));
    }

    await waitForElementToBeRemoved(() => screen.queryByText(/I am too small/));
  });
});
