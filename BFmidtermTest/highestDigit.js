function highestDigit(num) {
  let op = [];
  let checker = num.toString();
  let max = 0;
  op = checker.split("");
  for (let i = 0; i < op.length; i++) {
    if (op[i] > max) max = op[i];
  }
  return max;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
