const reverseArray = (arr) => {
	let arr2 = [];
  	for (var i=arr.length-1; i>=0; i--) {
      arr2.push(arr[i]);
    }
  return arr2;
}

const reverseArrayInPlace = (arr) => {
	return arr.reverse();
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]