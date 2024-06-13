/*
 * 문제: 삼각형 판별하기
 * [조건]
 * - 길이가 서로 다른 A, B, C
 * - 삼각형 만들 수 있으면 YES, 아니면 NO 출력
 *
 * [플로우]
 * 1. 세 변의 길이 입력 받기
 * 2. 가장 긴 변 찾기
 * 3. 가장 긴 변을 제외한 나머지 두 변의 길이 합이 가장 긴 변보다 크면 YES, 아니면 NO 출력
 * */

export function solution12(a, b, c) {
  const triangleName = triangleType(a, b, c);
  if (triangleName !== '일반 삼각형') return triangleName;
  let answer = 'YES';
  let max;
  let sum = a + b + c;

  max = a > b ? a : b;
  if (c > max) max = c;

  if (sum - max <= max) answer = 'NO';

  return answer;
}

function triangleType(a, b, c) {
  let triangleType = '일반 삼각형';
  if (a === b && b === c) {
    triangleType = '정삼각형';
  } else if (a === b || b === c || a === c) {
    triangleType = '이등변 삼각형';
  }

  return triangleType;
}
