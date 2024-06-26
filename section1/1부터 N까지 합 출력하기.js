/*
 * 문제: 1부터 N까지 합 출력하기
 * [조건]
 * - 1 이상 20이하의 자연수 입력 받기
 *
 * [플로우]
 * 1. 자연수 입력 받기
 * 2. 1 이상 20 이하의 자연수인지 확인하기
 * 3. 1부터 N까지 합 구하기
 * 4. 합 출력하기
 * */

import { areNumbersInRange } from '../util/boolean.js';

export function solution14(...n) {
  if (n.length === 0) return false;
  const isInRange = areNumbersInRange(n, 1, 20);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return isInRange ? sum : false;
}
