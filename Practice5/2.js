/*
Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
*/

function calcRectangleArea(width, height) {
    try{
        if ( !(typeof(width) === 'number' && typeof(height) === 'number')) {throw new Error('Not Integer')}
        if ((width/(height+height) < 1)) {throw new Error("Such a right triangle doesn't exists.")}
        if (width===0 || height === 0) {throw new Error("Must be a positive digit")}
        return (width*height)/2
    } catch (e) {console.log(e.stack)}
}

calcRectangleArea(6, 3.5);