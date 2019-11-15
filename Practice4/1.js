/* 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = {
            course: "JS fundamental",
            duration: 3,
            direction: "web-development"
        };
Результат має бути 3. */

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount( currentObject ) {
    var length = 0;
    for( var key in currentObject ) {
        if( currentObject.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};
console.log(propsCount(mentor));