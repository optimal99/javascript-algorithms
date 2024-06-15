import { solution117 } from '../중복단어제거.js';

describe('중복단어제거', () => {
  it('입력: 자연수 N은 문자열 배열의 길이로, 3이상 100이하의 숫자이다.', () => {
    expect(solution117(2, ['a', 'b'])).toBe('N의 범위를 벗어났습니다.');
    expect(solution117(101, ['a', 'b', 'c'])).toBe('N의 범위를 벗어났습니다.');
  });
  it('입력: 문자열 배열의 문자열 길이는 1이상 100이하로 구성되어야 한다.', () => {
    expect(solution117(3, ['a', 'b', ''])).toBe('문자열의 길이가 1이상 100이하가 아닙니다.');
    expect(solution117(3, ['a', 'b'.repeat(101), 'c'])).toBe(
      '문자열의 길이가 1이상 100이하가 아닙니다.',
    );
  });
  it('출력: 중복된 단어를 제거한 문자열 배열을 출력한다.', () => {
    expect(solution117(3, ['banana', 'apple', 'apple'])).toEqual(['banana', 'apple']);
    expect(solution117(3, ['orange', 'orange', 'orange'])).toEqual(['orange']);
    expect(solution117(3, ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });
});
