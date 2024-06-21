/*
 * 문제: 격자판 최대합
 * [조건]
 * - 입력: 2차원 정수 배열
 * - 2차원 정수 배열의 행과 열의 크기는 같고, 1부터 50 사이의 정수이다.
 * - 각 정수는 100을 넘지 않는다.
 * - 출력: 정수
 * - 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력한다.
 *
 * [플로우]
 * 1. 2차원 정수 배열을 입력받는다.
 * 2. 2차원 정수 배열의 길이가 1 이상 50 이하인지 확인한다.
 * 3. 각 정수가 100을 넘지 않는지 확인한다.
 * 4. 각 행의 합을 구한다. (행의 합 중 가장 큰 값을 저장한다.)
 * 5. 각 열의 합을 구한다. (열의 합 중 가장 큰 값을 저장한다.)
 * 6. 두 대각선의 합을 구한다. (대각선의 합 중 가장 큰 값을 저장한다.)
 * 7. 가장 큰 값을 출력한다.
 * */

export function solution26(arr) {
  if (arr.length < 1 || arr.length > 50) {
    return '2차원 정수 배열의 길이는 1부터 50 사이의 정수여야 합니다.';
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 100) {
        return '각 정수는 100을 넘지 않아야 합니다.';
      }
    }
  }

  // 답안.
  // let answer = Number.MIN_SAFE_INTEGER;
  // let n = arr.length;
  // let sum1 = 0,
  //   sum2 = 0;
  // for (let i = 0; i < n; i++) {
  //   sum1 = sum2 = 0;
  //   for (let j = 0; j < n; j++) {
  //     sum1 += arr[i][j];
  //     sum2 += arr[j][i];
  //   }
  //   answer = Math.max(answer, sum1, sum2);
  // }
  // sum1 = sum2 = 0;
  // for (let i = 0; i < n; i++) {
  //   sum1 += arr[i][i];
  //   sum2 += arr[i][n - i - 1];
  // }
  // answer = Math.max(answer, sum1, sum2);
  // return answer;

  // 리팩토링
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let [sum1, sum2, sum3, sum4] = [0, 0, 0, 0];
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    sum3 += arr[i][i];
    sum4 += arr[i][n - i - 1];

    answer = Math.max(answer, sum1, sum2, sum3, sum4);
  }
  return answer;
}
