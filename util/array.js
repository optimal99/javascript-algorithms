/*
 * 홀수 배열 추출 함수
 * @param {number[]} numbers - 홀수를 추출할 숫자 배열입니다.
 * @returns {number[]} 홀수만 포함하는 새로운 배열을 반환합니다.
 */
export function pickOddNumbers(numbers) {
  return Array.isArray(numbers) && numbers.filter(number => number % 2 !== 0);
}

/*
 * 짝수 배열 추출 함수
 * @param {number[]} numbers - 짝수를 추출할 숫자 배열입니다.
 * @returns {number[]} 짝수만 포함하는 새로운 배열을 반환합니다.
 */
export function pickEvenNumbers(numbers) {
  return Array.isArray(numbers) && numbers.filter(number => number % 2 === 0);
}

/*
 * 배열의 합을 구하는 함수
 * @param {number[]} numbers - 합을 구할 숫자 배열입니다.
 * @returns {number} 배열의 합을 반환합니다.
 */
export function sumNumbers(numbers) {
  return Array.isArray(numbers) && numbers.reduce((acc, cur) => acc + cur, 0);
}
