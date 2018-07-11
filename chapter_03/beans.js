// Taken from https://gist.github.com/kzapata19/cf106ab05165e92bfd90
function countBs(str) {
    var count = 0;
    [].forEach.call(str, (item, i) => {
        if (item === "B") {
            count++;
        }
    })
    return count;
}

const countChars = (str, char) => {
    if (char === undefined) { return "Write a char"}
    let count = 0;
    str = str.toLowerCase(); char = char.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) { count++; }
    }
    return count;
}


console.log(countBs("HelloWordl"));
console.log(countChars("Hellb WobrlB", "B"));
console.log(countChars("Hellb WobrlB"));
console.log(countChars("Hellb WobrlB", "a"));