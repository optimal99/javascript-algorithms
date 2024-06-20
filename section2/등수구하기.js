/*
 * 문제: 등수구하기
 * [조건]
 * - 입력: 점수로 구성된 정수 배열
 * - 정수 배열의 길이는 3 이상 1000 이하로 구성되어 있다.
 * - 정수 배열의 원소는 1 이상 100 이하로 구성되어 있다.
 * - 출력: 등수로 구성된 정수 배열
 * - 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
 *
 * [플로우]
 * 1. 정수 배열을 입력 받는다.
 * 2. 정수 배열의 길이가 3 이상 1000 이하인지 확인한다.
 * 3. 정수 배열의 원소가 1 이상 100 이하인지 확인한다.
 * 4. 정수 배열의 원소를 순회하며 등수를 구한다.
 * 5. 등수를 출력한다.
 *
 * [함수]
 * Array.prototype.some(): 배열의 원소 중 하나라도 조건을 만족하면 true를 반환한다.
 * Array.from(): 유사 배열 객체나 반복 가능한 객체를 복사하여 새로운 배열 객체를 만든다.
 * - Array.from({ length: 5 }, () => 1): [1, 1, 1, 1, 1]
 * - Array.from({ length: 5 }, (v, i) => i): [0, 1, 2, 3, 4]
 * Array.prototype.filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
 * Array.prototype.map(): 배열 내 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
 * Array.prototype.sort(): 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
 * - sort((a, b) => a - b): 오름차순 정렬
 * - sort((a, b) => b - a): 내림차순 정렬
 * */

// 시간 복잡도 O(n^2)인 방법
// export function solution25(numbers) {
//   let numLen = numbers.length;
//   if (numLen < 3 || numLen > 1000)
//     return '정수 배열의 길이는 3 이상 1000 이하로 구성되어야 합니다.';
//   if (numbers.some(number => number < 1 || number > 100))
//     return '정수 배열의 원소는 1 이상 100 이하로 구성되어야 합니다.';
//
//   // 1번 방법.
//   let answer = Array.from({ length: numLen }, () => 1);
//   for (let i = 0; i < numLen; i++) {
//     for (let j = 0; j < numLen; j++) {
//       if (numbers[i] < numbers[j]) answer[i]++;
//     }
//   }
//
//   return answer;
//
//   // 2번 방법.
//   let ranks = {};
//
//   for (let number of numbers) {
//     ranks[number] = numbers.filter(num => num > number).length + 1;
//   }
//
//   return numbers.map(number => ranks[number]);
// }

// 시간 복잡도 O(nlog n)인 방법
export function solution25(numbers) {
  let numLen = numbers.length;
  if (numLen < 3 || numLen > 1000)
    return '정수 배열의 길이는 3 이상 1000 이하로 구성되어야 합니다.';
  if (numbers.some(number => number < 1 || number > 100))
    return '정수 배열의 원소는 1 이상 100 이하로 구성되어야 합니다.';

  let sortedNumbers = [...numbers].sort((a, b) => b - a);
  let ranks = {};

  for (let i = 0; i < numLen; i++) {
    if (ranks[sortedNumbers[i]] === undefined) {
      ranks[sortedNumbers[i]] = i + 1;
    }
  }

  return numbers.map(number => ranks[number]);
}

console.log(solution25([1, 2, 5, 4, 5]));
