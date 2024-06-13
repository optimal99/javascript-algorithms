import { solution11 } from '../세 수 중 최솟값.js';

describe('세 수 중 최솟값', () => {
  it('세 수 중 최솟값을 반환해야 한다', () => {
    expect(solution11(6, 5, 11)).toBe(5);
    expect(solution11(3, 5, 7)).toBe(3);
    expect(solution11(10, 20, 30)).toBe(10);
    expect(solution11(5, 5, 5)).toBe(5);
  });

  it('100이하의 자연수가 아닌 경우 "100이하의 자연수를 입력해주세요."를 반환해야 한다', () => {
    expect(solution11(-1, -2, -3)).toBe('100이하의 자연수를 입력해주세요.');
    expect(solution11(0, 101, 102)).toBe('100이하의 자연수를 입력해주세요.');
    expect(solution11(101, 102, 103)).toBe('100이하의 자연수를 입력해주세요.');
  });

  it('세 수가 제공되지 않으면 NaN을 반환해야 한다', () => {
    expect(solution11()).toBeNaN();
  });
});
