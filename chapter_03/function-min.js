function min (n1, n2) {
    if (n2 === undefined) {
        return n1;
    }
    return (n1 > n2) ? n2 : n1;
}

console.log("Minimun between 2 and 3: ", min(3, 2));
console.log("Minimun between 2 and 1: ", min(2,1));
console.log("Minimun between 1 and 1: ", min(1,1));
console.log("Minimun of 3: ", min(3));