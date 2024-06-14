/*
 * 문제: 대소문자 변환
 * [조건]
 * - 입력: 문자열
 * - 1. 문자열의 길이는 100을 넘지 않는다.
 * - 2. 문자열은 영문자로만 이루어져 있다.
 * - 출력: 문자열
 * - 1. 문자열의 대소문자를 변환한 결과를 반환한다.
 *
 * [플로우]
 * 1. 문자열을 입력 받는다.
 * 2. 문자열의 길이가 100을 넘는지 확인한다.
 * 3. 문자열이 영문자로만 이루어져 있는지 확인한다.
 * 4. 문자열을 순회하며 소문자의 경우, 대문자로 변환하고 대문자의 경우, 소문자로 변환한다.
 * 5. 변환된 문자열을 반환한다.
 *
 * [함수]
 * regex.test(): 문자열이 정규식을 만족하는지 확인한다.
 * String.toUpperCase(): 문자열을 대문자로 변환한다.
 * String.toLowerCase(): 문자열을 소문자로 변환한다.
 * */

export function solution113(str) {
  if (str.length > 100) return '100자 이하의 문자열을 입력해주세요.';
  if (/[^a-z]/i.test(str)) return '영문자로만 이루어진 문자열을 입력해주세요.';

  let answer = '';
  for (let s of str) {
    answer += s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();
  }

  return answer;
}
