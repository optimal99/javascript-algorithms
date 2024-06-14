import { solution112 } from '../대문자로 통일.js';

describe('대문자로 통일', () => {
  it('입력: 문자열의 길이는 100을 넘지 않는다.', () => {
    expect(solution112('A'.repeat(101))).toBe('100자 이하의 문자열을 입력해주세요.');
  });
  it('입력: 문자열은 영문자로만 이루어져 있다.', () => {
    expect(solution112('1Apple')).toBe('영문자로만 이루어진 문자열을 입력해주세요.');
    expect(solution112('App0e2')).toBe('영문자로만 이루어진 문자열을 입력해주세요.');
  });
  it('출력: 문자열을 모두 대문자로 바꾼 결과를 반환한다.', () => {
    expect(solution112('KoreaTimeGood')).toBe('KOREATIMEGOOD');
    expect(solution112('ItisTimeToStudy')).toBe('ITISTIMETOSTUDY');
  });
});
