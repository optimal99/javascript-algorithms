/*
 * 문제: 보이는 학생
 * [조건]
 * - 입력: 정수 배열
 * - 정수 배열의 길이는 1 이상 1000이하로 이루어져 있다.
 * - 출력: 정수
 * - 학생들의 키가 주어질 때, 보이는 학생의 수를 구한다.(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않는다.)
 *
 * [플로우]
 * 1. 정수 배열을 입력 받는다.
 * 2. 정수 배열을 순회하면서 자신의 앞에 있는 사람들과 비교한다.
 * 3. 앞에 서 있는 사람들 중 자신보다 큰 사람이 없으면 보이는 학생으로 카운트한다.
 * 4. 결과를 출력한다.
 * */

// 최소 시간 복잡도(n)
export function solution22(numbers) {
  if (numbers.length < 1 || numbers.length > 1000) {
    return '정수 배열의 길이는 1 이상 1000이하로 이루어져야 합니다.';
  }

  let count = 0;
  let max = -Infinity;

  for (const number of numbers) {
    if (number > max) {
      count++;
      max = number;
    }
  }

  return count;
}

// export function solution22(numbers) {
//   if (numbers.length < 1 || numbers.length > 1000) {
//     return '정수 배열의 길이는 1 이상 1000이하로 이루어져야 합니다.';
//   }
//
//   let count = 1;
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       count++;
//       max = numbers[i];
//     }
//   }
//
//   return count;
// }
//
// export function solution22(numbers) {
//   if (numbers.length < 1 || numbers.length > 1000) {
//     return '정수 배열의 길이는 1 이상 1000이하로 이루어져야 합니다.';
//   }
//
//   let max = numbers[0];
//
//   return numbers.reduce((acc, cur) => {
//     if (cur > max) {
//       max = cur;
//       return acc + 1;
//     }
//
//     return acc;
//   }, 1);
// }

// export function solution22(numbers) {
//   if (numbers.length < 1 || numbers.length > 1000) {
//     return '정수 배열의 길이는 1 이상 1000이하로 이루어져야 합니다.';
//   }
//
//   return numbers.filter((num, idx) => {
//     return numbers.slice(0, idx).every(prev => prev < num);
//   }).length;
// }
