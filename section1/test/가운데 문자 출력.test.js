import { solution115 } from '../가운데 문자 출력.js';

describe('가운데 문자 출력', () => {
  it('입력: 문자열의 길이는 1 이상 100 이하로 구성한다.', () => {
    expect(solution115('')).toBe('문자열의 길이가 1 이상 100 이하가 아닙니다.');
    expect(solution115('A'.repeat(101))).toBe('문자열의 길이가 1 이상 100 이하가 아닙니다.');
  });
  it('입력: 문자열은 영소문자로 구성되어야 한다.', () => {
    expect(solution115('123')).toBe('문자열은 영소문자로 구성되어야 합니다.');
    expect(solution115('A')).toBe('문자열은 영소문자로 구성되어야 합니다.');
    expect(solution115('a1')).toBe('문자열은 영소문자로 구성되어야 합니다.');
  });
  it('출력: 문자열의 길이가 홀수라면 가운데 문자를 출력한다.', () => {
    expect(solution115('apple')).toBe('p');
    expect(solution115('phone')).toBe('o');
  });
  it('출력: 문자열의 길이가 짝수라면 가운데 두 글자를 출력한다.', () => {
    expect(solution115('banana')).toBe('na');
    expect(solution115('orange')).toBe('an');
  });
});
