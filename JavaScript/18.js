function isLeap(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}
[1900, 2000, 2023, 2024].forEach(y => {
  console.log(`${y} — ${isLeap(y) ? "високосный" : "обычный"}`);
});