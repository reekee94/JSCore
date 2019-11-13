let x = (+prompt("First digit:"));
let y = (+prompt("Second digit:"));


while(!Number.isInteger(x) || !Number.isInteger(y)) {
    x = (+prompt("First digit:"));
    y = (+prompt("Second digit:"));
}
function raiseToDegree(a,b) {
    return Math.pow(a, b);
}


console.log(raiseToDegree(x, y));