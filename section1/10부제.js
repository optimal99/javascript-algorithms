/*
 * 문제: 10부제
 * [조건]
 * - 날짜의 일의 자리 숫자와 자동차 번호의 일의 자리 숫자가 일치하면 해당 자동차는 운행이 금지된다.
 * - 자동차 번호의 끝 두 자리 숫자가 주어진다.
 * - 입력된 날짜와 비교하여 위반하는 자동차의 대수를 계산해야 한다.
 *
 * [플로우]
 * 1. 날짜의 일의 자리 숫자를 입력받는다.
 * 2. 7대의 자동차 번호의 끝 두 자리 숫자를 입력받는다.
 * 3. 각 자동차 번호의 끝 숫자와 날짜의 일의 자리 숫자를 비교하여 일치하는 경우를 세어 위반 차량 대수를 계산한다.
 * 4. 위반 차량 대수를 출력한다.
 * */

import { areNumbersInRange } from '../util/boolean.js';

export function solution17(day, cars) {
  if (!areNumbersInRange(day, 0, 9)) return '날짜의 일의 자리 숫자를 입력해주세요.';
  if (cars.length !== 7) return '7대의 자동차 번호를 입력해주세요.';
  if (!areNumbersInRange(cars, 10, 99)) return '자동차 번호의 끝 두 자리 숫자를 입력해주세요.';

  let count = 0;

  for (let car of cars) {
    if (car % 10 === day) {
      count++;
    }
  }

  return count;
}
