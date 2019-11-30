/* Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів,
що містить лише букви та цифри, номер не може бути першим.
Функція має приймати рядок і знаходити усі числа в цьому рядку,
включаючи числа з плаваючою кількістю (наприклад, 3.4).
	Приклад роботи:
checkLogin('ee11ret3');
true
11
3

checkLogin('ee1*1ret3');
false
1 		2(times)
3
*/


function checkLogin(l){
    let reg = /^[^\d+\.\,]+[a-zA-Z0-9]{2,10}$/ig;
    let newL = reg.test(l);
    if (newL){
        let decimAndFloatRe = /[\-?\d+\.?\d+]+/g;
        let arrOfDecim = l.match(decimAndFloatRe);
        let countObj = {};
        let countFunction = keys =>{
            countObj[keys] = ++countObj[keys] || 1

        };
        arrOfDecim.forEach(countFunction);
        return console.log(newL, countObj);
    } else {
        let decimAndFloatRe = /[\-?\d+\.?\d+]+/g;
        let arrOfDecim = l.match(decimAndFloatRe);
        let countObj = {};
        let countFunction = keys =>{
            countObj[keys] = ++countObj[keys] || 1
        };
        arrOfDecim.forEach(countFunction);
        return console.log(newL, countObj)};
}

checkLogin('ee11ret3');
checkLogin('ee1*1rt3');
