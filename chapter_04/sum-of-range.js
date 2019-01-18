function range(n1, n2, opc = 1) {
  let nList = [];
  let i = n1;
  if (opc > 0) {
    for (i; i<=n2; i += opc) { nList.push(i); }
  } else {
    for (i; i >= n2 ; i += opc) { nList.push(i); }
  }
  return nList;
}
function sum(nums) {
  let result = null;
  for (let n of nums) {
    result += n;
  }
  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55