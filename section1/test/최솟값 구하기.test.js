import { solution15 } from '../최솟값 구하기.js';

describe('최솟값 구하기', () => {
  it('숫자 목록에서 최소값을 반환해야 한다', () => {
    expect(solution15(3, 1, 4, 1, 5, 9)).toBe(1);
    expect(solution15(-5, -1, -3, -2, -4)).toBe(-5);
    expect(solution15(0, 1, 2, 3, 4, 5)).toBe(0);
    expect(solution15(10, 20, 30, 40, 50)).toBe(10);
    expect(solution15(42)).toBe(42);
    expect(solution15(5, 5, 5, 5, 5)).toBe(5);
  });

  it('숫자가 제공되지 않으면 NaN을 반환해야 한다', () => {
    expect(solution15()).toBeNaN();
  });
});
