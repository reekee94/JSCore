/* 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj),
яка приймає даний об’єкт і виводить список його властивостей записаних в масив.
Виведіть також масив значень властивостей об’єкта.  */

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    x: 12,
    y: 'x'
};


function showProps(obj) {
    var props = [];
    if (Object.keys) props.push(Object.keys(obj));
    if (Object.values) props.push(Object.values(obj));
    return props

};

// console.log(showProps(mentor));
//
//
// function showProps(obj) {
//     var n1 = [];
//     var n2 = [];
//     for (var key in obj) {
//         n1.push(key);
//         n2.push(obj[key]);
//     }
//     return {n1, n2}
// }


console.log(showProps(mentor));