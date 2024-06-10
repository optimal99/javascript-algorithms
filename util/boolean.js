export function areNumbersInRange(numbers, min, max) {
  return numbers.every(n => {
    return !(!Number.isInteger(n) || n < min || n > max);
  });
}
