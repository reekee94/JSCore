function checkAge() {
    try{ let age = +prompt('Який ваш вік?');
    if (age === '' && age.charAt(0) === ' ') {throw new Error('The field is empty! Please enter your age')}
    if (typeof age !== "number") {throw new Error( 'Not a number')}
    if (age < 14) {throw new Error('You are too young')}
    } catch (e) { console.log(e.stack) }
}