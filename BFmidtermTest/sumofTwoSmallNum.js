function sumTwoSmallestNum(nums) {
  let sml;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] > 0 && nums[j] > 0) {
        sum = nums[i] + nums[j];
        if (sml == null) sml = sum;
        if (sum < sml) sml = sum;
      }
  }
  return sml;
}

console.log(sumTwoSmallestNum([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNum([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNum([2, 9, 6, -1]));
console.log(
  sumTwoSmallestNum([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
);
console.log(sumTwoSmallestNum([3683, 2902, 3951, -475, 1617, -2385]));
