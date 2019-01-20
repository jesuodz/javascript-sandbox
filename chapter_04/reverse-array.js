const reverseArray = (arr) => {
  let arr2 = [];
    for (var i=arr.length-1; i>=0; i--) {
      arr2.push(arr[i]);
    }
  return arr2;
}

function reverseArrayInPlace(arr) {
  const halfLength = Math.floor(arr.length / 2);
  var rightSide = arr.slice(-halfLength);
  var limit = halfLength - 1;
  
  for (var i = limit; i>=0; i--) {
    var temp = arr[i];
    arr[i] = rightSide[limit-i];
    arr[arr.length-i-1] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]