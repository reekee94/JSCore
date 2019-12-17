/*Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!". */

document.getElementById('butt').addEventListener('click', () => document.innerText='<h4>I was clicked</h4>');
document.getElementById('butt').addEventListener('mouseover', () => document.innerText='<h4>Mouse on me</h4>');
document.getElementById('butt').addEventListener('mouseout', () => document.innerText='<h4>Mouse leaved me</h4>');