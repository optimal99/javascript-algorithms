/*
 * 문제: A를 #으로
 * [조건]
 * - 영대문자로 이루어진 문자열을 입력한다.
 * - 입력된 문자열에 A를 모두 #으로 바꾸어 출력한다.
 *
 * [플로우]
 * 1. 문자열을 입력받는다.
 * 2. 변수 answer를 생성한다.
 * 3. 문자열을 순회하며 A를 만나면 answer에 #을 추가하고 아니면 그대로 추가한다.
 * 4. answer를 출력한다.
 * */

// export function solution19(str) {
//   return str.replace(/A/g, '#');
// }

export function solution19(str) {
  let answer = '';
  for (let x of str) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}
