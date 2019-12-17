/* 2. Для заданої HTML-сторінки:

<p id ='text'>I learning JavaScript events!</p>
<div>
	<button . . . . . >Change style!</button>
</div>
 напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку
 і змінюватиме стиль вмісту тега <p>:
 колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".*/


document.querySelector('button').onclick='changeStyle';
function changeCSS() {
    document.getElementById('text').style.color='orange';
    document.getElementById('text').style.fontSize='20';
    document.getElementById('text').style.fontFamily='Comic Sans MS'

}