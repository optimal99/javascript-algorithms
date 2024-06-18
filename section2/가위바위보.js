/*
 * 문제: 가위바위보
 * [조건]
 * - 입력: 정수 배열 2개
 * - 정수 배열의 길이는 1 이상 100이하로 구성되어야 합니다.
 * - 두 정수 배열의 길이는 같아야 합니다.
 * - 가위는 1, 바위는 2, 보는 3으로 표현합니다.
 * - 출력: 승자 문자열
 * - 첫 번째 정수 배열의 원소가 이긴 경우, A를 출력합니다.
 * - 두 번째 정수 배열의 원소가 이긴 경우, B를 출력합니다.
 * - 두 정수 배열의 원소가 비겼을 경우에 D를 출력합니다.
 *
 * [플로우]
 * 1. 두 정수 배열을 입력 받는다.
 * 2. 정수 배열의 길이만큼 반복하면서, 각 원소를 비교한다.
 * 3. A가 이기는 경우, B가 이기는 경우, 비기는 경우를 각각 출력 배열에 저장한다.
 * 4. 결과를 출력한다.
 *
 * [함수]
 * Array.prototype.some(): 특정 조건을 만족하는지 확인하는 함수(하나라도 만족하면 true 반환)
 * Array.prototype.forEach(): 배열을 순회하면서 반복 작업을 수행하는 함수
 * Array.prototype.map(): 배열을 순회하면서 각 원소에 대해 작업을 수행하고, 새로운 배열을 반환하는 함수
 *
 * [분석]
 * - A가 이기는 경우: (1, 3), (2, 1), (3, 2) / A - B = -2, 1
 * - B가 이기는 경우: (1, 2), (2, 3), (3, 1) / A - B = -1, 2
 * - 비기는 경우: (1, 1), (2, 2), (3, 3) / A - B = 0
 * */

export function solution23(arr1, arr2) {
  const [arr1Len, arr2Len] = [arr1.length, arr2.length];
  if (arr1Len === 0 || arr2Len === 0 || arr1Len > 100 || arr2Len > 100) {
    return '정수 배열의 길이는 1 이상 100이하로 구성되어야 합니다.';
  }
  if (arr1Len !== arr2Len) {
    return '두 정수 배열의 길이는 같아야 합니다.';
  }
  if (arr1.some(el => el < 1 || el > 3) || arr2.some(el => el < 1 || el > 3)) {
    return '가위는 1, 바위는 2, 보는 3으로 표현합니다.';
  }

  // const result = [];
  // arr1.forEach((el, i) => {
  //   if (el === arr2[i]) {
  //     result.push('D');
  //   } else if (
  //     (el === 1 && arr2[i] === 3) ||
  //     (el === 2 && arr2[i] === 1) ||
  //     (el === 3 && arr2[i] === 2)
  //   ) {
  //     result.push('A');
  //   } else {
  //     result.push('B');
  //   }
  // });

  // const result = arr1.map((el, i) => {
  //   if (el === arr2[i]) {
  //     return 'D';
  //   } else if (el - arr2[i] === -2 || el - arr2[i] === 1) {
  //     return 'A';
  //   } else {
  //     return 'B';
  //   }
  // });

  return arr1.map((el, i) => {
    return el === arr2[i] ? 'D' : el - arr2[i] === -2 || el - arr2[i] === 1 ? 'A' : 'B';
  });
}
