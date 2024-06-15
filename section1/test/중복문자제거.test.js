import { solution116 } from '../중복문자제거.js';

describe('중복문자제거', () => {
  it('입력: 문자열은 영소문자로 구성되어 있어야 한다.', () => {
    expect(solution116('123')).toBe('영소문자로 이루어진 문자열이 아닙니다.');
    expect(solution116('ABC')).toBe('영소문자로 이루어진 문자열이 아닙니다.');
    expect(solution116('a1b2')).toBe('영소문자로 이루어진 문자열이 아닙니다.');
  });
  it('출력: 문자열은 중복된 문자가 제거되어야 한다.', () => {
    expect(solution116('ksekkset')).toEqual('kset');
    expect(solution116('banana')).toEqual('ban');
  });
});
