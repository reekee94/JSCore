/* Напишіть функцію, яка виконуватиме валідацію
номера банківської карти (9999-9999-9999-9999). */

let card = '9999-9999-9999-9999';
let re = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
console.log(re.test('9999-9999-9999-9999'));