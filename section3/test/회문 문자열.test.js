import { solution31 } from '../회문 문자열.js';

describe('회문 문자열', () => {
  it('입력: 정수 길이 100을 넘지 않는지 확인한다.', () => {
    expect(solution31('a'.repeat(101))).toBe('정수 길이 100을 넘지 않습니다.');
  });

  it('입력: 문자열에 공백에 없는지 확인한다.', () => {
    expect(solution31('a b')).toBe('공백이 없어야 합니다.');
  });

  it('출력: 입력받은 문자열이 회문 문자열이면 YES, 아니면 NO를 출력한다.', () => {
    expect(solution31('gooG')).toBe('YES');
    expect(solution31('goo')).toBe('NO');
  });
});
