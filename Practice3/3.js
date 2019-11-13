function randArray(k) {
    exitArr = [];
    function random() {
        return (1 + Math.random() * (500 - 1)).toFixed(0);
    }
    while (k > 0) {
        exitArr.push(random());
        k--;

    }
    return exitArr;
}
randArray(6);
console.log(exitArr);


