/*
 * 문제: 점수계산
 * [조건]
 * - 입력: 정수 배열
 * - 정수 배열의 길이는 1 이상 100 이하로 구성되어 있다.
 * - 정수 배열의 원소는 문제를 맞추면 1, 틀리면 0이다.
 * - 출력: 정수
 * - 연속으로 문제를 맞추면 첫 번째 문제에서는 1점, 두 번째 문제에서는 2점, 세 번째 문제에서는 3점, ...를 얻는다.
 *
 * [플로우]
 * 1. 정수 배열을 입력 받는다.
 * 2. 정수 배열의 길이가 1 이상 100 이하인지 확인한다.
 * 3. 정수 배열의 원소가 0 또는 1로 구성되어 있는지 확인한다.
 * 4. 정수 배열의 원소의 값이 1로 연속되면 두번째 값부터 1씩 증가시킨다. 0이 나오면 초기화한다.
 * 5. 결과 변수를 출력한다.
 *
 * [함수]
 * Array.prototype.some(): 배열의 원소 중 하나라도 조건을 만족하면 true를 반환한다.
 * Array.prototype.reduce(): 배열의 각 요소에 대해 주어진 함수를 실행하고 하나의 결과값을 반환한다.
 * */

export function solution24(numbers) {
  if (numbers.length < 1 || numbers.length > 100)
    return '정수 배열의 길이는 1 이상 100 이하로 구성되어야 합니다.';
  if (numbers.some(number => number !== 0 && number !== 1))
    return '정수 배열의 원소는 0 또는 1로 구성되어야 합니다.';

  let connectedNumber = 0;

  return numbers.reduce((acc, cur) => {
    if (cur === 1) {
      connectedNumber++;
      return acc + connectedNumber;
    }
    connectedNumber = 0;
    return acc;
  }, 0);
}
