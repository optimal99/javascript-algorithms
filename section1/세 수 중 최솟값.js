import { areNumbersInRange } from '../util/boolean.js';

/*
 * 문제: 세 수 중 최솟값 구하기
 * [조건]
 * - 100이하의 자연수 입력 받기
 * - 정렬 사용하지 않고 최솟값 구하기
 *
 * [플로우]
 * 1. 세 수 입력 받기
 * 2. 세 수가 정수인지 확인
 * 3. 세 수가 1이상 100이하인지 확인
 * 4. 세 수 중 최솟값 구하기
 * */

// export function solution11(a, b, c) {
//   const isInRange = areNumbersInRange([a, b, c], 1, 100);
//   let minNumber;
//
//   if (isInRange) {
//     if (a < b) {
//       minNumber = a;
//     } else minNumber = b;
//     if (c < minNumber) {
//       minNumber = c;
//     }
//   } else return '100이하의 자연수를 입력해주세요.';
//
//   return minNumber;
// }

export function solution11(...numbers) {
  if (numbers.length === 0) return NaN;
  const isInRange = areNumbersInRange(numbers, 1, 100);
  return isInRange ? Math.min(...numbers) : '100이하의 자연수를 입력해주세요.';
}
