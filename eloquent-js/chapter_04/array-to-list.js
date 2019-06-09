const arrayToList = (arr) => {
  let container = {root: null };

  for (let i=arr.length-1; i > -1; i--) {
    let temp = {'value': arr[i], rest: null};
    
    if (container.root === null) {
      container.root = temp;
    } else {
      temp.rest = container.root;
      container.root = temp;
    }
  }

  return container.root;
}

const listToArray = (list) => {
  let array = [];
  let temp = list;

  while (temp) {
    array.push(temp.value);
    temp = temp.rest;
  }
  return array;
}

const prepend = (element, list) => {
  let object = {value: element, rest: list};
  return object;
}

const nth = (list, num) => {
  let array = listToArray(list);

  return array[num];
}

console.log("Array to list:", arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("List to array:",listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log("Prepend:",prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log("Return element in n position:",nth(arrayToList([10, 20, 30]), 1));
// // → 20