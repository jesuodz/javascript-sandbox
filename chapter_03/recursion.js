function isEven(n) {
    if (n == 0) { return true; }
    if ( n == 1 ) { return false; }
    return isEven(n - 2) ? true : false;
}

function printMessage(n) {
    if (n < 0)
        n = Math.abs(n);

    if (isEven(n)) {
        console.log("The number %s is even", (n));
    } else {
        console.log("The number %s is odd", (n));
    }
}

printMessage(3);
printMessage(5);
printMessage(4);
printMessage(-23);
printMessage(50);
printMessage(75);