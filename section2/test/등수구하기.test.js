import { solution25 } from '../등수구하기.js';

describe('등수구하기', () => {
  it('입력: 정수 배열의 길이는 3 이상 1000 이하로 구성되어 있다.', () => {
    expect(solution25([1, 2])).toBe('정수 배열의 길이는 3 이상 1000 이하로 구성되어야 합니다.');
    expect(solution25([])).toBe('정수 배열의 길이는 3 이상 1000 이하로 구성되어야 합니다.');
    expect(solution25(Array(1001).fill(1))).toBe(
      '정수 배열의 길이는 3 이상 1000 이하로 구성되어야 합니다.',
    );
  });
  it('입력: 정수 배열의 원소는 1 이상 100 이하로 구성되어 있다.', () => {
    expect(solution25([0, 1, 2])).toBe('정수 배열의 원소는 1 이상 100 이하로 구성되어야 합니다.');
    expect(solution25([1, 2, 101])).toBe('정수 배열의 원소는 1 이상 100 이하로 구성되어야 합니다.');
  });
  it('출력: 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.', () => {
    expect(solution25([1, 1, 1])).toStrictEqual([1, 1, 1]);
    expect(solution25([1, 2, 2])).toStrictEqual([3, 1, 1]);
    expect(solution25([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });
});
