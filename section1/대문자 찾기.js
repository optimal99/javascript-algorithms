/*
 * 문제: 대문자 찾기
 * [조건]
 * - 입력받는 문자열의 길이는 100을 넘지 않는다.
 * - 영대문자의 개수를 출력한다.
 *
 * [플로우]
 * 1. 문자열을 입력 받는다.
 * 2. 문자열을 순회하며 영대문자면 answer를 증가시킨다.
 * 3. 문자열의 순회가 끝나면 answer를 반환한다.
 *
 * [함수]
 * String.toUpperCase(): 문자열을 대문자로 변환한다.
 * String.charCodeAt(): 문자열을 아스키코드로 변환한다.
 * */

export function solution111(str) {
  if (str.length > 100) return '100자 이하의 문자열을 입력해주세요.';
  let answer = 0;

  for (let s of str) {
    // let num = s.charCodeAt();
    // if (num >= 65 && num <= 90) answer++;
    if (s === s.toUpperCase()) answer++;
  }

  return answer;
}
