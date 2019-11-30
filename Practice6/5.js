/*      Для сторінки
		  <body>
		       <h1>I'am a big header!!!</h1>
        <div id="myDiv">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <p>Fourth paragraph</p>
        </div>
        <ul id="myList">
            <li>Make</li>
            <li>me</li>
            <li>horizontal!</li>
        </ul>
        <span>Make me invisible, please!</span>
	    </body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:
 */
document.querySelector('h1').style.background = 'green';
document.getElementById('myDiv').firstElementChild.style.fontWeight='bold';
document.getElementById('myDiv').firstElementChild.nextElementSibling.style.color='red';
document.getElementById('myDiv').firstElementChild.nextElementSibling.nextElementSibling.style.textDecoration='underline';
document.getElementById('myDiv').lastElementChild.style.fontStyle='italic';
const ps = document.querySelectorAll('#myList > li');
ps.forEach(p => p.style = "display: inline");
document.querySelector('span').style.visibility = "hidden";