function simplePair(nums, ans) {
  let op = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] * nums[j];
      if (sum == ans) {
        op.push(nums[i], nums[j]);
      }
    }
  }
  return op;
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));
