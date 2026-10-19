function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 5; i++) {
  console.log(`Случайное число ${i}: ${randInt(1, 10)}`);
}