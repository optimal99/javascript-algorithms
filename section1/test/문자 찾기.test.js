import { solution110 } from '../문자 찾기.js';

describe('문자 찾기', () => {
  it('문자열 내 특정 문자의 개수를 반환해야 한다.', () => {
    expect(solution110('COMPUTERPROGRAMMING', 'R')).toBe(3);
    expect(solution110('COMPUTERPROGRAMMING', 'G')).toBe(2);
  });

  it('문자열의 길이가 100을 넘어가면 안 된다.', () => {
    const str = 'A'.repeat(101);
    expect(str.length).toBeGreaterThan(100);
    expect(() => {
      solution110(str, 'A');
    }).toThrowError('문자열의 길이는 100을 넘을 수 없습니다.');
  });
});

/*
 * toBe(): 주어진 값과 정확히 같은지 확인한다.
 * repeat(): 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.
 * toBeGreaterThan(): 주어진 값보다 큰지 확인한다.
 * toThrowError(): 함수가 에러를 던지는지 확인한다.
 */
