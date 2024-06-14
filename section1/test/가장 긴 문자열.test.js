import { solution114 } from '../가장 긴 문자열.js';

describe('가장 긴 문자열', () => {
  it('입력: 자연수 N을 입력받는다.(3<=N<=30)', () => {
    expect(solution114(2)).toBe('N의 범위를 벗어났습니다.');
    expect(solution114(31)).toBe('N의 범위를 벗어났습니다.');
  });
  it('입력: N개의 문자열을 입력받는다.', () => {
    expect(solution114(3, ['abc', 'apple', 'banana', 'strawberry'])).toBe(
      'N개의 문자열이 아닙니다.',
    );
    expect(solution114(4, ['abc', 'apple'])).toBe('N개의 문자열이 아닙니다.');
  });
  it('입력: 각 문자열의 길이는 100을 넘지 않는다.', () => {
    expect(solution114(4, ['apple', 'banana', 'strawberry', 'A'.repeat(101)])).toBe(
      '문자열의 길이가 100을 넘은 문자열이 존재합니다.',
    );
  });
  it('입력: 각 문자열의 길이는 서로 달라야 한다.', () => {
    expect(solution114(3, ['abc', 'def', 'abc'])).toBe('문자열의 길이가 같은 문자열이 존재합니다.');
    expect(solution114(4, ['abc', 'apple', 'banana', 'melon'])).toBe(
      '문자열의 길이가 같은 문자열이 존재합니다.',
    );
  });
  it('출력: N개의 문자열 중 가장 긴 문자열을 출력한다.', () => {
    expect(solution114(3, ['abc', 'apple', 'banana'])).toBe('banana');
    expect(solution114(4, ['abc', 'strawberry', 'banana', 'melon'])).toBe('strawberry');
  });
});
