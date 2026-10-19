function maxOf3(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
console.log("maxOf3(5, 12, 9) =", maxOf3(5, 12, 9));
console.log("Проверка Math.max:", Math.max(5, 12, 9));