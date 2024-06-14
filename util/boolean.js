/*
 * 입력한 숫자가 범위 내에 속하는지 확인하는 함수
 * @param {number} numbers - 확인할 숫자(여러 개 가능)
 * @param {number} min - 최솟값
 * @param {number} max - 최댓값
 * @returns {boolean} 모든 숫자가 범위 내에 속하면 true, 아니면 false를 반환합니다.
 */
export function areNumbersInRange(numbers, min, max) {
  if (Array.isArray(numbers)) {
    return !numbers.some(number => {
      return !Number.isInteger(number) || number < min || number > max;
    });
  } else {
    return Number.isInteger(numbers) && numbers >= min && numbers <= max;
  }
}
