import { solution22 } from '../보이는 학생.js';

describe('보이는 학생', () => {
  it('입력: 정수 배열의 길이는 1 이상 1000이하로 이루어져 있다.', () => {
    expect(solution22([])).toBe('정수 배열의 길이는 1 이상 1000이하로 이루어져야 합니다.');
    expect(solution22(Array(1001).fill(0))).toBe(
      '정수 배열의 길이는 1 이상 1000이하로 이루어져야 합니다.',
    );
  });
  it('출력: 학생들의 키가 주어질 때, 보이는 학생의 수를 구한다.(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않는다.)', () => {
    expect(solution22([130, 135, 148, 140, 145, 150, 150, 153])).toBe(5);
    expect(solution22([130, 135, 148, 140, 145, 150, 150, 150])).toBe(4);
    expect(solution22([130, 130, 130, 130, 130, 130, 130, 130])).toBe(1);
  });
});
