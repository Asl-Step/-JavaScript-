function digitSum(n) {
  let sum = 0;
  n = Math.abs(n);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log("Сумма цифр 12345 =", digitSum(12345));
console.log("Сумма цифр 9009  =", digitSum(9009));