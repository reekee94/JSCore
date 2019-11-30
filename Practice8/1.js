/* Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character
String's starts with uppercase character */



function upperCase(v) {
    regEx =  /[A-Z].+/
    if (regEx.test(v)){
        console.log('Upper')
    } else {console.log("not upper")}
}
