import { solution19 } from '../A를 #으로.js';

describe('A를 #으로', () => {
  it('A를 모두 #으로 바꾸어 반환해야 한다', () => {
    expect(solution19('BANANA')).toBe('B#N#N#');
    expect(solution19('APPLE')).toBe('#PPLE');
    expect(solution19('A')).toBe('#');
  });
});
