/* Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
    1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим. */


document.getElementById('but1').addEventListener('click', () => document.body.style.backgroundColor='blue');
document.getElementById('but2').addEventListener('dblclick', () => document.body.style.backgroundColor='pink');
document.getElementById('but3').addEventListener('mousedown', () => document.body.style.backgroundColor='brown');
document.getElementById('but3').addEventListener('mouseup', () => document.body.style.backgroundColor='white');
document.querySelector('a').addEventListener('mouseover', () => document.body.style.backgroundColor='yellow');
document.querySelector('a').addEventListener('mouseout', () => document.body.style.backgroundColor='white');