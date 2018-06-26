const fizzbuzz = function(max) {
    var answer = ["Fizz","Buzz"];
    for (let n = 1; n <= max; n++) {

        if ( n % 3 == 0 && n % 5 == 0) {
            console.log(answer.join(''));
        }
    
        if (n % 3 == 0) {
            console.log(answer[0]);
        } else if (n % 5 == 0) {
            console.log(answer[1]);
        }
    }
}

fizzbuzz(100);