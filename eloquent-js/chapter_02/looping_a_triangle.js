const repeatString = function (string, n, max) {
    let str = "";

    do {
        str += string;
        console.log(str);
        n++;
    } while (n < max);
}

repeatString('#', 1, 8);