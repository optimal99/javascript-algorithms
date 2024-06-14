/*
 * 문제: 문자 찾기
 * [조건]
 * - 한 개의 문자열과 문자를 입력 받아 문자열에서 문자가 몇 개 있는지 반환한다.
 * - 문자열의 길이는 100을 넘지 않는다.
 *
 * [플로우]
 * 1. 한 개의 문자열과 문자를 입력 받는다.
 * 2. 문자열을 순회하며 문자가 있는 경우, count를 증가시킨다.
 * 3. 문자열 순회가 종료되면 count를 출력한다.
 * */

export function solution110(str, char) {
  if (str.length > 100) throw '문자열의 길이는 100을 넘을 수 없습니다.';
  let count = 0;
  for (let s of str) {
    if (s === char) count++;
  }

  return count;
}
