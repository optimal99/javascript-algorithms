import { solution12 } from '../삼각형 판별하기.js';

describe('삼각형 판별하기', () => {
  it('삼각형이면 YES를 반환해야 한다', () => {
    expect(solution12(3, 5, 7)).toBe('YES');
    expect(solution12(6, 7, 11)).toBe('YES');
    expect(solution12(11, 22, 30)).toBe('YES');
  });

  it('삼각형이 아니면 NO를 반환해야 한다', () => {
    expect(solution12(6, 5, 11)).toBe('NO');
    expect(solution12(10, 20, 30)).toBe('NO');
    expect(solution12(1, 2, 3)).toBe('NO');
    expect(solution12(3, 2, 1)).toBe('NO');
  });

  it('삼각형의 세 변이 서로 다른 길이가 아니면 false를 반환해야 한다.', () => {
    expect(solution12(1, 1, 1)).toBe('정삼각형');
    expect(solution12(2, 2, 1)).toBe('이등변 삼각형');
    expect(solution12(3, 2, 3)).toBe('이등변 삼각형');
    expect(solution12(5, 4, 4)).toBe('이등변 삼각형');
  });
});
