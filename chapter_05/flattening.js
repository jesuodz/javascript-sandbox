let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
console.log(
  arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  })
);