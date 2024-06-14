import { solution111 } from '../대문자 찾기.js';

describe('대문자 찾기', () => {
  it('대문자가 몇 개 있는지 세어 반환한다.', () => {
    expect(solution111('KoreaTimeGood')).toBe(3);
    expect(solution111('KoreaTimeGoodGood')).toBe(4);
  });

  it('문자열의 길이가 100을 넘으면 "100자 이하의 문자열을 입력해주세요."를 반환한다.', () => {
    expect(solution111('A'.repeat(101))).toBe('100자 이하의 문자열을 입력해주세요.');
  });
});
