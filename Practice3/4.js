let secondDigit = (+prompt("First digit:"));
let firstDigit = (+prompt("Second digit:"));


while(!Number.isInteger(secondDigit) || !Number.isInteger(firstDigit)) {
    secondDigit = (+prompt("First digit:"));
    firstDigit = (+prompt("Second digit:"));
}
function raiseToDegree(a,b) {
    return a**b
    // return Math.pow(a, b);
}


console.log(raiseToDegree(secondDigit, firstDigit));