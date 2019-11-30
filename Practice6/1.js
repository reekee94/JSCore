/* 1. На HTML-сторінці є елемент div:
    <body>
	<div id="test">First</div>
  </body>
Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.	*/


// document.getElementById("test").textContent = "Last";
document.body.firstElementChild.textContent = "Last";


