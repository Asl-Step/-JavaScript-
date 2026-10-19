let N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
  console.log(`i = ${i}, сумма = ${sum}`);
}
console.log(`Итог: сумма чисел от 1 до ${N} равна ${sum}`);