import { solution16 } from '../홀수.js';

describe('홀수', () => {
  it('1부터 100사이의 자연수가 아니라면 "1부터 100사이의 자연수를 입력해주세요."를 반환해야 한다.', () => {
    expect(solution16(0)).toBe('1부터 100사이의 자연수를 입력해주세요.');
    expect(solution16(101)).toBe('1부터 100사이의 자연수를 입력해주세요.');
  });

  it('7개의 자연수 중 홀수만 골라내야 한다.', () => {
    expect([1, 2, 3, 4, 5, 6, 7].filter(number => number % 2 !== 0)).toStrictEqual([1, 3, 5, 7]);
    expect([2, 4, 6, 8, 10, 12, 14].filter(number => number % 2 !== 0)).toStrictEqual([]);
  });

  it('홀수들의 합을 반환해야 한다.', () => {
    expect([1, 3, 5, 7].reduce((arr, cur) => arr + cur, 0)).toBe(16);
    expect([1, 3, 5, 7, 9].reduce((arr, cur) => arr + cur, 0)).toBe(25);
  });

  it('홀수들 중 최소값을 반환해야 한다.', () => {
    expect(Math.min(1, 3, 5, 7)).toBe(1);
    expect(Math.min(3, 5, 7, 9)).toBe(3);
  });

  it('홀수들의 합과 최소값을 반환해야 한다.', () => {
    expect(solution16(1, 2, 3, 4, 5, 6, 7)).toBe('16\n1');
    expect(solution16(1, 3, 5, 7, 9, 11, 13)).toBe('49\n1');
  });
});
