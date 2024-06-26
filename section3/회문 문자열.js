/*
 * 문제: 회문 문자열
 * [조건]
 * - 입력: 문자열
 * - 회문 검사할 때 대소문자를 구분하지 않는다.
 * - 문자열은 정수 길이 100을 넘지 않는다.
 * - 문자열은 공백이 없어야 한다.
 * - 출력: 문자열
 * - 입력받은 문자열이 회문 문자열이면 YES, 아니면 NO를 출력한다.
 *
 * [플로우]
 * 1. 문자열을 입력 받는다.
 * 2. 정수 길이 100을 넘지 않는지 확인한다.
 * 3. 문자열에 공백에 없는지 확인한다.
 * 4. 문자열을 소문자로 변환한다.
 * 5. 문자열이 뒤집은 문자열과 동일하면 YES, 아니면 NO를 출력한다.
 *
 * [함수]
 * String.prototype.includes(): 문자열에 특정 문자열이 포함되어 있는지 확인한다.
 * String.prototype.toLowerCase(): 문자열을 소문자로 변환한다.
 * Array.prototype.split(): 문자열을 배열로 변환한다.
 * Array.prototype.reverse(): 배열을 뒤집는다.
 * Array.prototype.join(): 배열을 문자열로 변환한다.
 * */

export function solution31(str) {
  if (str.length > 100) {
    return '정수 길이 100을 넘지 않습니다.';
  }
  if (str.includes(' ')) {
    return '공백이 없어야 합니다.';
  }

  let answer = 'YES';
  str = str.toLowerCase();

  if (str.split('').reverse().join('') !== str) {
    answer = 'NO';
  }

  return answer;
}
