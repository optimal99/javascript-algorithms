/*
 * 문제: 일곱 난쟁이
 * [조건]
 * - 이홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다.
 * - 주어지는 키는 100이하의 자연수이다.
 * - 난쟁이들의 키는 모두 다르다.
 * - 일곱 난쟁이의 키의 합은 100이다.
 * - 입력된 순서대로 일곱 난쟁이의 키를 출력해야 한다.
 *
 * [플로우]
 * 1. 아홉 난쟁이의 키를 입력받는다.
 * 2. 아홉 난쟁이의 키를 입력받았는지 확인한다.
 * 3. 주어지는 키가 100이하의 자연수인지 확인한다.
 * 4. 아홉 난쟁이의 키를 모두 더한다.
 * 5. 모두 더한 아홉 난쟁이의 키에서 두 난쟁이의 키를 뺀 값이 100인지 확인한다.
 * 6. 두 난쟁이의 키를 제외한 일곱 난쟁이의 키를 출력한다.
 *
 * [함수]
 * Set(): 중복을 허용하지 않는 데이터 집합을 제공하는 객체
 * Array.filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환(원본 수정 X)
 * Array.splice(): 배열의 요소를 삭제하고, 필요에 따라 새 요소를 추가하여 배열의 내용을 변경(원본 수정 O)
 * */

import { areNumbersInRange } from '../util/boolean.js';

export function solution18(numbers) {
  if (numbers.length !== 9) return '아홉 난쟁이의 키를 입력해주세요.';
  if (!areNumbersInRange(numbers, 1, 100)) return '100이하의 자연수를 입력해주세요.';
  const set = new Set(numbers);
  if (set.size !== 9) return '아홉 난쟁이의 키는 모두 달라야 합니다.';

  const sum = numbers.reduce((arr, cur) => arr + cur, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (numbers[i] + numbers[j]) === 100) {
        return numbers.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }
}

// function solutionAnswer18(arr) {
//   let answer = arr;
//   let sum = answer.reduce((a, b) => a + b, 0);
//   let flag = 0;
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (sum - (answer[i] + answer[j]) === 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//         flag = 1;
//         break;
//       }
//     }
//     if (flag === 1) break;
//   }
//   return answer;
// }
