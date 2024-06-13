import { pickEvenNumbers, pickOddNumbers, sumNumbers } from '../array.js';

describe('array', () => {
  it('홀수 배열 추출 함수', () => {
    expect(pickOddNumbers([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([1, 3, 5, 7]);
    expect(pickOddNumbers([2, 4, 6, 8, 10, 12, 14])).toStrictEqual([]);
  });

  it('짝수 배열 추출 함수', () => {
    expect(pickEvenNumbers([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([2, 4, 6]);
    expect(pickEvenNumbers([2, 4, 6, 8, 10, 12, 14])).toStrictEqual([2, 4, 6, 8, 10, 12, 14]);
  });

  it('배열의 합을 구하는 함수', () => {
    expect(sumNumbers([1, 3, 5, 7])).toBe(16);
    expect(sumNumbers([1, 3, 5, 7, 9])).toBe(25);
  });
});
