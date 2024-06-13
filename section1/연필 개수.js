/*
 * 문제: 연필 개수
 * [조건]
 * - 연필 1다스는 12자루
 * - 학생 1인당 연필 1자루씩 나눠줄 때 필요한 연필 다스 수 구하기
 * - 1000명 이하의 학생 수 입력 받기
 *
 * [플로우]
 * 1. 학생 수 입력 받기
 * 2. 필요한 연필 다스 수 구하기
 * 3. 필요한 연필 다스 수 출력하기
 *
 * [함수]
 * Math.ceil(): 올림
 * Math.floor(): 내림
 * Math.round(): 반올림
 * */

import { areNumbersInRange } from '../util/boolean.js';

export function solution13(...n) {
  if (n.length === 0) return false;
  const isInRange = areNumbersInRange(n, 1, 1000);
  return isInRange ? Math.ceil(n / 12) : false;
}
