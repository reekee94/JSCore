/* Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java” */
let names = 'Java Script';
let pattern = / /;
var nameList = names.split(pattern);


nameList = nameList.join(' ');
nameList = nameList.replace(/(^\w+\s)(\w+)/g, "$2, $1");
// nameList = nameList.match(/(^\w+\s)(\w+)/g)
console.log(nameList);




