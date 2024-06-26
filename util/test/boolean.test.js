import { areNumbersInRange } from '../boolean.js';

describe('boolean', () => {
  it('숫자가 범위 내에 속하는지 확인하는 함수', () => {
    expect(areNumbersInRange(1, 1, 5)).toBe(true);
    expect(areNumbersInRange(1, 2, 5)).toBe(false);
  });

  it('숫자 배열이 범위 내에 속하는지 확인하는 함수', () => {
    expect(areNumbersInRange([1, 3, 5], 1, 5)).toBe(true);
    expect(areNumbersInRange([1, 3, 6], 1, 5)).toBe(false);
  });
});
