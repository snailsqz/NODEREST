function totalVolume(...args) {
  let numAr = args.concat();
  let sumOfAr = [];
  let op = 0;
  for (let i = 0; i < numAr.length; i++) {
    let num = 1;
    for (let j = 0; j < numAr[i].length; j++) {
      num *= numAr[i][j];
    }
    sumOfAr.push(num);
  }

  for (let i = 0; i < sumOfAr.length; i++) {
    op += sumOfAr[i];
  }
  return op;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
