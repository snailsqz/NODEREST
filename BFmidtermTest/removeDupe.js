function removeDups(arr) {
  let op = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) if (arr[i] == arr[j]) op.push(j);

  op.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < op.length; i++) arr.splice(op[i]);

  return arr;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "Big", "Cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
