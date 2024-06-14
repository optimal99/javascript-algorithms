/*
 * 문제: 홀수
 * [조건]
 * - 입력으로 주어지는 7개의 자연수는 각각 100보다 작은 값이다.
 * - 7개의 자연수 중에서 홀수가 반드시 하나 이상 존재한다.
 * - 홀수인 자연수를 모두 골라서 그 합을 구한다.
 * - 골라낸 홀수들 중에서 최소값을 찾는다.
 *
 * [플로우]
 * 1. 7개의 자연수를 입력받는다.
 * 2. 1부터 100사이의 자연수인지 확인한다.
 * 3. 홀수가 한 개 이상 존재하는지 확인한다.
 * 4. 입력받은 자연수 중 홀수를 골라낸다.
 * 5. 골라낸 홀수들의 합을 구한다.
 * 6. 골라낸 홀수들 중 최소값을 찾는다.
 * 7. 홀수들의 합과 최소값을 출력한다.
 *
 * [함수]
 * Array.filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
 * Array.reduce(): 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고 하나의 결과값을 반환
 * Math.min(): 주어진 숫자들 중에서 가장 작은 수 반환
 * */

import { areNumbersInRange } from '../util/boolean.js';

export function solution16(...numbers) {
  const isInRange = areNumbersInRange(numbers, 1, 100);

  if (isInRange) {
    // 홀수 배열 추출
    const oddNumbers = numbers.filter(number => number % 2 !== 0);

    // 홀수들의 합 추출
    const sumOfOddNumbers = oddNumbers.reduce((acc, cur) => acc + cur, 0);

    // 홀수들 중 최솟값 추출
    const minOddNumber = Math.min(...oddNumbers);

    return `${sumOfOddNumbers}\n${minOddNumber}`;
  } else return '1부터 100사이의 자연수를 입력해주세요.';
}
