/* За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль,
і виводить на екран повідомлення із введеними даними.
Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”. */



var userName = prompt('Enter your login');
var userMail = prompt('Enter your email');
var userPassowd = prompt("Enter your password");

alert('Dear '+ userName + ', your email is '+ userMail + ', your password is '+ userPassowd);