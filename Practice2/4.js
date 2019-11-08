let firstSide = +prompt("Enter first side of triangle");
let secondSide = +prompt("Enter the second side of the triangle");
let thirdSide = +prompt("Enter the third side of the triangle");

if (!((firstSide > 0) && (secondSide > 0) && (thirdSide > 0))) {
    alert("Incorrect data");
} else if (!(firstSide + secondSide > thirdSide) && (firstSide + thirdSide > secondSide) && (secondSide + thirdSide > firstSide)) {
    alert("Cant form a triangle");
} else {
    let s = (firstSide + secondSide + thirdSide)/2;
    let area = (s*((s-firstSide)*(s-secondSide)*(s-thirdSide)))**(1/2);
    console.log(area.toFixed(3))
}

console.log( "This triangle is right: " + Boolean(firstSide**2 === (secondSide**2 + thirdSide**2) || secondSide**2 === (firstSide**2 + thirdSide**2) || thirdSide**2 === (secondSide**2 + firstSide**2)));

