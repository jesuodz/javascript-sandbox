class MultiplicatorUnitFailure extends Error {}

function random() {
  return Math.ceil(Math.random() * 10);
}

function primitiveMultiply(arr) {
  let n = random();
  if (n == 2 || n == 8) {
    return `${arr[0]} power ${arr[1]} is: ` + arr[0] * arr[1];  
  }
  throw new MultiplicatorUnitFailure("Invalid Units: ${arr}.");
}

for (;;) {
  try {
    let result = primitiveMultiply(Array(random(), random()));
    console.log(result);
    break;
  } catch(e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log("Not a valid unit.");
    } else {
      throw e;
    }
  }
}
