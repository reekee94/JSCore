function lastElem(a,n) {
    lastItems = [];
    n = typeof n !== 'undefined' ? n : 1;
    if (n >= a.length) {
        return a;
        }
    else {
       for (let i = n; i>0; i--) { lastItems.push(a[a.length-i]) }
        }
    return lastItems
}

console.log(lastElem([3, 4, 10, -5], 5));
