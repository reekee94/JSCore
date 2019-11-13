
function capitalizeFirstLetter (s) {
    newS = [];
    let letter;
    let iterator = 0;
    for (letter of s) {

        if (s.charAt(iterator) === ' ') {
            newS.push(s.charAt(iterator));
            let chosenString = s.charAt(iterator+1);
            let newChosenString = chosenString.toUpperCase();
            newS.push(newChosenString);
            iterator += 2;
        } else {newS.push(s.charAt(iterator));
            iterator++}
    }
    return newS.join('');
}

console.log(capitalizeFirstLetter("Im wery tired to code!"));
