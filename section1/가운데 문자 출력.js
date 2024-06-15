/*
 * 문제: 가운데 문자 출력
 * [조건]
 * - 입력: 문자열
 * - 문자열의 길이는 1 이상 100 이하로 구성한다.
 * - 문자열은 영소문자로 구성되어야 한다.
 * - 출력: 문자열의 가운데 문자
 * - 문자열의 길이가 홀수라면 가운데 문자를 출력한다.
 * - 문자열의 길이가 짝수라면 가운데 두 글자를 출력한다.
 *
 * [플로우]
 * 1. 문자열을 입력 받는다.
 * 2. 문자열의 길이가 1 이상 100 이하가 아니면 '문자열의 길이가 1 이상 100 이하가 아닙니다.'를 출력하고 종료한다.
 * 3. 문자열이 영소문자가 아니면 '문자열은 영소문자로 구성되어야 합니다.'를 출력하고 종료한다.
 * 4. 문자열의 길이가 홀수인지 짝수인지 판별한다.
 * 5. 문자열의 길이가 홀수라면 가운데 문자를 출력하고 짝수라면 가운데 두 문자를 출력한다.
 *
 * [함수]
 * regex.test(): 문자열이 정규식을 만족하는지 확인한다.
 * Math.floor(): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다.
 * String.slice(시작 인덱스, 끝 인덱스): 시작 인덱스부터 끝 인덱스 전까지의 문자열을 반환한다.
 * */

export function solution115(str) {
  if (str.length < 1 || str.length > 100) return '문자열의 길이가 1 이상 100 이하가 아닙니다.';
  if (!/^[a-z]*$/.test(str)) return '문자열은 영소문자로 구성되어야 합니다.';

  let mid = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str.slice(mid - 1, mid + 1) : str[mid];
}
