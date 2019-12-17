/* Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
Можуть видалятися всі елементи в будь-якому порядку.*/

function removeOption () {
    let itemList = document.getElementById('userSelect');
    itemList.remove(itemList.selectedIndex);
}