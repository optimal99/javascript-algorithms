import { solution13 } from '../연필 개수.js';

describe('연필 개수', () => {
  it('학생 수에 따라 필요한 연필 다스 수를 반환해야 한다.', () => {
    expect(solution13(25)).toBe(3);
    expect(solution13(178)).toBe(15);
  });

  it('1000명 이하의 학생 수를 입력 받아야 한다.', () => {
    expect(solution13(0)).toBe(false);
    expect(solution13(1)).toBe(1);
    expect(solution13(1000)).toBe(84);
    expect(solution13(1001)).toBe(false);
  });

  it('학생 수가 제공되지 않으면 false를 반환해야 한다.', () => {
    expect(solution13()).toBe(false);
  });
});
