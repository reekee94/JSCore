/* Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
   Валідними вважаються всі символи на різних позиціях.
   Приклад роботи:   checkEmail("Qmail2@gmail.com");   true  */

function checkEmail(v) {
    regEx = /[\w]+@[\w]+\.[\w]+/;
    return console.log(regEx.test(v))

}

checkEmail('oleg@rambler.ru');