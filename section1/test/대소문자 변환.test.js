import { solution113 } from '../대소문자 변환.js';

describe('대문자로 변환', () => {
  it('입력: 문자열의 길이는 100을 넘지 않는다.', () => {
    expect(solution113('A'.repeat(101))).toBe('100자 이하의 문자열을 입력해주세요.');
  });
  it('입력: 문자열은 영문자로만 이루어져 있다.', () => {
    expect(solution113('1Apple')).toBe('영문자로만 이루어진 문자열을 입력해주세요.');
    expect(solution113('App0e2')).toBe('영문자로만 이루어진 문자열을 입력해주세요.');
  });

  it('출력: 문자열의 대소문자를 변환한 결과를 반환한다.', () => {
    expect(solution113('StuDY')).toBe('sTUdy');
    expect(solution113('KoreaTimeGood')).toBe('kOREAtIMEgOOD');
  });
});
