/*
 * 문제: 큰 수 출력하기
 * [조건]
 * - 입력: 정수 배열
 * - 정수 배열의 길이는 1 이상 100 이하의 숫자로 이루어져 있다.
 * - 출력: 정수 배열
 * - 정수 배열에서 자신의 바로 앞 수보다 큰 수만 출력한다.
 * - 첫 번째 수는 무조건 출력한다.
 *
 * [플로우]
 * 1. N개의 정수 배열을 입력 받는다.
 * 2. N개의 정수 배열을 순회하면서 자신의 바로 앞 수보다 큰 수만 출력한다.
 * 3. 결과를 출력한다.
 *
 * [함수]
 * Array.prototype.filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
 * */

// export function solution21(arr) {
//   if (arr.length < 1 || arr.length > 100) {
//     return '정수 배열의 길이는 1 이상 100 이하의 숫자로 이루어져야 합니다.';
//   }
//
//   const result = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }
//
//   return result;
// }

export function solution21(arr) {
  if (arr.length < 1 || arr.length > 100) {
    return '정수 배열의 길이는 1 이상 100 이하의 숫자로 이루어져야 합니다.';
  }

  return arr.filter((num, idx) => idx === 0 || num > arr[idx - 1]);
}
