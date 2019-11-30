/* На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
	1) першого елемента списку
	2) останнього елемента списку
	3) другого елемента списку
	4) четвертого елемента списку
	5) третього елемента списку
Зробіть завдання 2 різними способами.
Приклад:
    • 1
    • 2
    • 3
    • 4
    • 5
Результат виводу: 1, 5, 2, 4, 3               */

let listOfUl = document.getElementById('list');
// console.log(listOfUl.firstElementChild);
// console.log(listOfUl.lastElementChild);
// console.log(listOfUl.firstElementChild.nextElementSibling);
// console.log(listOfUl.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(listOfUl.firstElementChild.nextElementSibling.nextElementSibling);

let lis = document.querySelectorAll('li');
console.log(lis.item(0));
console.log(lis.item(lis.length-1));
console.log(lis.item(1));
console.log(lis.item(3));
console.log(lis.item(2));
