/*
 * 문제: 가장 긴 문자열
 * [조건]
 * - 입력: 자연수 N, N개의 문자열
 * - 자연수 N을 입력받는다.(3<=N<=30)
 * - N개의 문자열을 입력받는다.
 * - 각 문자열의 길이는 100을 넘지 않는다.
 * - 각 문자열의 길이는 서로 다르다.
 * - 출력: 문자열
 * - N개의 문자열 중 가장 긴 문자열을 출력한다.
 *
 * [플로우]
 * 1. 자연수 N과 N개의 문자열을 입력받는다.
 * 2. 자연수 N이 3보다 작거나 30보다 크면 'N의 범위를 벗어났습니다.'를 출력하고 종료한다.
 * 3. N개의 문자열이 아니면 'N개의 문자열이 아닙니다.'를 출력하고 종료한다.
 * 4. 문자열의 길이가 100을 넘으면 '문자열의 길이가 100을 넘은 문자열이 존재합니다.'를 출력하고 종료한다.
 * 5. 문자열의 길이가 같으면 '문자열의 길이가 같은 문자열이 존재합니다.'를 출력하고 종료한다.
 * 6. N개의 문자열을 순회하며 max보다 긴 문자열이 나오면 max를 해당 문자열의 길이로 설정한다.
 * 7. max와 같은 길이의 문자열을 출력한다.
 *
 * [함수]
 * Array.some(): 배열의 요소 중 콜백 함수의 조건을 만족하는 요소가 있는지 확인한다. (하나라도 있으면 true, 아니면 false)
 * Array.find(): 배열의 요소 중 콜백 함수의 조건을 만족하는 첫 번째 요소를 반환한다. (없으면 undefined)
 * Array.map(): 배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
 * Array.forEach(): 배열의 각 요소에 대해 주어진 함수를 실행한다.
 * Set.size: Set 객체 내 값의 개수를 반환한다.
 * Number.MIN_SAFE_INTEGER: JavaScript에서 안전한 최소 정수값을 반환한다.
 * */

export function solution114(n, strArr) {
  if (n < 3 || n > 30) return 'N의 범위를 벗어났습니다.';
  if (strArr.length !== n) return 'N개의 문자열이 아닙니다.';
  if (strArr.some(str => str.length > 100))
    return '문자열의 길이가 100을 넘은 문자열이 존재합니다.';
  let newStrArr = strArr.map(str => str.length);
  if (new Set(newStrArr).size !== n) return '문자열의 길이가 같은 문자열이 존재합니다.';

  let max = Number.MIN_SAFE_INTEGER;
  strArr.forEach(str => {
    if (str.length > max) max = str.length;
  });

  return strArr.find(str => str.length === max);
}
