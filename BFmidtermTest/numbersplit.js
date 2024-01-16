function numberSplit(num) {
  let op = [];
  if (num % 2 == 0) op.push(num / 2, num / 2);
  else op.push(num / 2 - 0.5, num / 2 + 0.5);

  return op;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
console.log(numberSplit(13));
console.log(numberSplit(-7));
