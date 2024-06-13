import { solution14 } from '../1부터 N까지 합 출력하기.js';

describe('1부터 N까지 합 출력하기', () => {
  it('1부터 N까지의 합을 반환해야 한다.', () => {
    expect(solution14(6)).toBe(21);
    expect(solution14(10)).toBe(55);
    expect(solution14(20)).toBe(210);
  });

  it('1 이상 20 이하의 자연수가 아닌 경우 false를 반환해야 한다.', () => {
    expect(solution14(0)).toBe(false);
    expect(solution14(21)).toBe(false);
  });

  it('자연수가 제공되지 않으면 false를 반환해야 한다.', () => {
    expect(solution14()).toBe(false);
  });
});
