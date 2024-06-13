/*
 * 문제: 최솟값 구하기
 * [조건]
 * - 7개의 수를 입력받아 그 중 가장 작은 수를 출력
 *
 * [플로우]
 * 1. 7개의 수를 입력받기
 * 2. 7개의 수 중 가장 작은 수를 찾기
 * 3. 가장 작은 수를 출력하기
 * */

function solution(...numbers) {
  let minNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }

  return minNumber;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17)); // 2
