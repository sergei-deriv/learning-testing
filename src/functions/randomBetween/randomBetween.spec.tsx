import { randomBetween } from './randomBetween';

const randomSpy = jest.spyOn(Math, 'random');

describe('random between', () => {
  beforeEach(() => {
    randomSpy.mockReturnValue(0.5);
  });

  it('called with min=3 and max=5 returns 4', () => {
    expect(randomBetween(3, 5)).toBe(4);
  });
});
